var React = require('react');

var spawn = require('child_process').spawn;
var exec = require('child_process').exec;

var mycroftCoreScript = '/home/josh/mycroft-core/start.sh';
var installDir = '/home/josh/magic-mycroft-mirror';

module.exports = React.createClass({
  getInitialState: function() {
    return {
      buttonType: 'Start',
      PID: 0
    };
  },
  handleClick: function() {
    if (this.state.buttonType === 'Start') {
      this.startService();
    } else {
      this.stopService();
    }
  },
  startService: function() {

    console.log("starting service");
    console.log(global);

    var child = spawn(
        '',
        [mycroftCoreScript, this.props.ServiceName],
        {
          'cwd': '/home/josh/mycroft-core',
          'env': process.env,
          'shell': true
        }
    );

    console.log('Created process with PID:' + child.pid);

    child.stdout.on('data', function(data){
        console.log('stdout-' + name + ':'+data);
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
           console.log('stderr-' + name + ':'+data);
        }
    });

    child.stdin.on('data', function(data){
        console.log('stdin-' + name + ':'+data);
    });

    ///
    //$("#btn_" + name).prop('btn-type','stop');
    //$("#btn_" + name).prop('PID',child.pid);
    //$("#btn_" + name).html('Stop ' + name + ' service');

    this.setState({buttonType: 'Stop', PID: child.pid});
  },
  stopService: function() {

    
    var options = {};
    console.log('In stop function, but it doesnt work :( ');
    console.log('PID: ' + this.state.PID);

    //make script executable
    options = {};
    console.log(__dirname);
    options.cwd = installDir +'/build'//__dirname // + "build"
    console.log(installDir +'/build');
    //cmd//
    exec('chmod 700 ./StopProcess.sh && ./StopProcess.sh ' + this.state.PID, options , function(error, stdout, stderr) {
      console.log('erx: ' + error);
      console.log('erx: ' + stdout);
      console.log('erx: ' + stderr);
    });



    //var cmd = 'pkill -TERM -P ' + PID;
    //var cmd = './StopProcess.sh ' + this.state.PID;
    //console.log(cmd);

    //options = {};
    //console.log(__dirname);
    //options.cwd = installDir +'/build'//__dirname // + "build"
    //console.log(installDir +'/build');
    //cmd//
    //exec(cmd, options , function(error, stdout, stderr) {
    //  console.log(error);
    //  console.log(stdout);
    //  console.log(stderr);
    //});


    this.setState({
      buttonType: 'Start',
      PID: 0
    });

  },
  render: function() {
    return (
      <button type="button" onClick={this.handleClick} className="btn btn-default col-xs-4">---{this.state.buttonType} {this.props.ServiceName} service [{this.state.PID}]---</button>
    );
  }
});
