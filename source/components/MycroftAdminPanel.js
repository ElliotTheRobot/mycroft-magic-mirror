var React = require('react');

var SysInfo = require('./SysInfo.js');
var MycroftServiceButton = require('./MycroftServiceButton');
var MycroftWebServiceButton = require('./MycroftWebServiceButton');

module.exports = React.createClass({

  componentDidMount: function() {
console.log("Admin PAnel prps: ");
console.log(this.props);
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
          <button id="btn_admin" data-toggle="collapse" data-target="#OptionsDiv" type="button" className="col-xs-12  btn btn-info btn-block" name="button">---admin---</button>

        </div>
        <div id="OptionsDiv" className="collapse top-buffer ">

          <div className="row  top-buffer " >
            <MycroftServiceButton ServiceName="service" />
            <MycroftServiceButton ServiceName="voice" />
            <MycroftServiceButton ServiceName="skills" />
          </div>
          <div className="row top-buffer ">
            <MycroftWebServiceButton onMessage={this.sendMessage} />
          </div>
        </div>
      </div>
    );
  }
});
