var React = require('react');

var SysInfo = require('./SysInfo.js');
var MycroftServiceButton = require('./MycroftServiceButton.js');
var MycroftWebServiceButton = require('./MycroftWebServiceButton.js');

module.exports = React.createClass({

  componentDidMount: function() {
        $("#btn_admin").css({'background-color': 'Transparent','background-repeat': 'no-repeat','border': 'none', 'outline':'none' });
  },
  sendMessage: function(event){
    var msg = JSON.parse(event.data);
    msg.id = Date.now();
    this.props.onMycroftOutput(msg);
  },
  render: function() {
    return (
      <div>
        <div className="row">
          <button id="btn_admin" data-toggle="collapse" data-target="#OptionsDiv" type="button" className="col-xs-12  btn btn-info btn-block" name="button">Mycroft Inside ┌∩┐(◣_◢)┌∩┐</button>
        </div>
        <div id="OptionsDiv" className="collapse top-buffer ">
          <div className="row  top-buffer " >
            <MycroftServiceButton ServiceName="service" />
            <MycroftServiceButton ServiceName="voice" />
            <MycroftServiceButton ServiceName="skills" />
          </div>
          <div className="row top-buffer">
            <MycroftWebServiceButton onMessage={this.sendMessage} />
          </div>
        </div>
      </div>
    );
  }
});
