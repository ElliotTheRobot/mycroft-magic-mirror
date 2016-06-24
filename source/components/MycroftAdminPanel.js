var React = require('react');

var SysInfo = require('./SysInfo.js');
var MycroftServiceButton = require('./MycroftServiceButton');

module.exports = React.createClass({
  componentDidMount: function() {

  },
  render: function() {
    return (
      <div>
        <div className="row">
          <button id="btn_admin" data-toggle="collapse" data-target="#OptionsDiv" type="button" className="col-xs-2 btn btn btn-info" name="button">---admin---</button>

        </div>
        <div id="OptionsDiv" className="collapse top-buffer ">
          <div className="row">
            <button id="btn_start_all" type="button" className="col-xs-12  btn btn-primary btn-block" name="button">Start Services</button>
          </div>
          <div className="row  top-buffer " >
            <MycroftServiceButton ServiceName="service" />
            <MycroftServiceButton ServiceName="voice" />
            <MycroftServiceButton ServiceName="skills" />
          </div>
          <div className="row top-buffer ">
            <button id="OpenWebSocket" type="button" name="OpenWebSocket" className="btn btn-primary col-xs-12 ">Connect UI to WS</button>
          </div>
        </div>
      </div>
    );
  }
});
