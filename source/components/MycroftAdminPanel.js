var React = require('react');

var SysInfo = require('./SysInfo.js');

module.exports = React.createClass({
  componentDidMount: function() {
    var clock = $('.clock').FlipClock({
      clockFace: 'TwentyFourHourClock',
      showSeconds: false
    });
  },
  render: function() {
    return (
      <div>
        <div className="row">
          <button id="btn_admin" data-toggle="collapse" data-target="#OptionsDiv" type="button" className="col-xs-2 btn btn btn-info" name="button">---admin---</button>
          <SysInfo/>
        </div>
        <div id="OptionsDiv" className="collapse top-buffer ">
          <div className="row">
            <button id="btn_start_all" type="button" className="col-xs-8 btn btn-primary btn-block" name="button">Start Services</button>
          </div>
          <div className="row  top-buffer " >
            <button id="btn_service" type="button" name="btn_service" className="btn btn-default col-xs-3">Start MyCroft Service</button>
            <button id="btn_voice" type="button" name="btn_voice" className="btn btn-default col-xs-4 col-xs-offset-1">Start Voice Service</button>
            <button id="btn_skills" type="button" name="btn_skills" className="btn btn-default col-xs-3 col-xs-offset-1">Start Skills Service</button>
          </div>
          <div className="row top-buffer ">
            <button id="OpenWebSocket" type="button" name="OpenWebSocket" className="btn btn-primary col-xs-12">Connect UI to WS</button>
          </div>
        </div>
      </div>
    );
  }
});
