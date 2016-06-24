var React = require('react');

var MyCroftAdminPanel = require('./MycroftAdminPanel.js');
var Module1 = require('./Module1.js');
var Clock = require('./Clock');
var SysInfo = require('./SysInfo.js');
//require('module');


module.exports = React.createClass({
  componentDidMount: function() {
    console.log("App.js");
    console.log(this.props);
//    this.setState({process: this.props.process});
  },
  render: function() {
    return (
      <div className="container">
        <MyCroftAdminPanel />
        <Clock />
        <SysInfo process={this.props.process}/>
      </div>
    );
  }
});
