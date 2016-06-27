var React = require('react');

var spawn = require('child_process').spawn;
var exec = require('child_process').exec;

var config = require('../config.json');

var mycroftCoreDir = config.paths.mycroftCoreDir//'/home/josh/mycroft-core';
var installDir = config.paths.installDir //'/home/josh/mycroft-magic-mirror';



module.exports = React.createClass({

  componentDidMount: function() {
    console.log("button prps: ");
    console.log(this.props);

  },

  getInitialState: function() {
      self = this;
    return {
      buttonType: 'Start',
      PID: 0
    };
  },
  handleClick: function() {
    if (this.state.buttonType === 'Start') {
      console.log('starting service');
      this.startService();
    } else {
      console.log('stopping service');
      this.stopService();
    }
  },

  startService: function() {

    var child = spawn(
        '',
        [mycroftCoreDir + '/start.sh', this.props.ServiceName],
        {
          'cwd': mycroftCoreDir,
          'env': process.env,
          'shell': true
        }
    );

    console.log('Created process with PID:' + child.pid);

    child.stdout.on('data', function(data){
        console.log('stdout-' + name + ':'+data);

        //this.props.onMessage('stdout-' + name + ':'+ data);
    });

    child.stderr.on('data', function(data){
        //console.log('stderr-' + name + ':'+data);

        if (name === 'voice') {

          var data = String(data).substring(String(data).lastIndexOf("SpeechClient"));

          var dataArray = String(data).split(" - ")

          if (dataArray[0] === 'SpeechClient') {
            parseVoiceOut(dataArray);
          }

        }else {
           var text = data.toString().replace(/(\r\n|\n|\r)/gm,"");
           //text = "." + text + "."

           if (new String("Terminated").valueOf() == new String(data.toString().replace(/(\r\n|\n|\r)/gm,"")).valueOf()) {
             this.setState({buttonType: 'Start', PID: 0});
           }
        }
    }.bind(this)  );

    child.stdin.on('data', function(data){
        //this.props.onMessage('stdin-' + name + ':'+data);
    });

  //  child.on('exit', function () {
  //    console.log('in exit');
  //     self.setState({buttonType: 'Start--', PID: 0});
  //  });



    this.setState({buttonType: 'Stop', PID: child.pid});
  },

  stopService: function() {

    var options = {};
    options.cwd = __dirname + "/scripts"


    exec('chmod 700 '+installDir + '/build/kill_descendant_processes.sh ', {} , function(error, stdout, stderr) {
      console.log(error);
      console.log(stdout);
      console.log(stderr);
    });


    exec( installDir + '/build/kill_descendant_processes.sh ' + this.state.PID, {} , function(error, stdout, stderr) {
      console.log(error);
      console.log(stdout);
      console.log(stderr);
    });



    var pid_num = this.state.PID;

    /**var child = spawn(
        '',
        ['/home/josh/mycroft-magic-mirror/build/kill_descendant_processes.sh', pid_num],
        {
          'cwd': '/home/josh/mycroft-core',
          'env': process.env,
          'shell': true
        }
    );

    console.log('Created process with PID:' + child.pid);

    child.stdout.on('data', function(data){
      console.log('stdout: ' + data);
    });

    child.stderr.on('data', function(data){
      console.log('stderr: ' + data)
    });

    child.stdin.on('data', function(data){
      console.log('stdin: ' + data)
    });

**/

  },

  render: function() {
    return (
      <button type="button" onClick={this.handleClick} className="btn btn-default col-xs-12 col-md-4">---{this.state.buttonType} {this.props.ServiceName} service [{this.state.PID}]---</button>
    );
  }
});
