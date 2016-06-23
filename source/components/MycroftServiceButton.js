var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
    return {buttonType: 'Start'};
  },
  handleClick: function() {
    if (this.state.buttonType === 'Start') {
      this.startService();
    } else {
      this.stopService();
    }
  },
  startService: function() {

    var child = spawn(
        '',
        [mycroftCoreScript, name],
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
    this.setState({buttonType: 'Start'});
  },
  render: function() {
    return (
      <button type="button" onClick={this.handleClick} className="btn btn-default col-xs-4">---{this.state.buttonType} {this.props.ServiceName} service [{this.state.PID}]---</button>
    );
  }
});
