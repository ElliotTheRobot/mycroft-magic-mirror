var React = require('react');

var MyCroftAdminPanel = require('./MycroftAdminPanel.js');
var SysInfo = require('./SysInfo.js');
var PluginZone = require('./PluginZone.js');
//require('module');


module.exports = React.createClass({
  getInitialState: function() {
    return {
        'info': 'Author: Josh McDonald',
        'mycroft': {}
      };
  },
  componentDidMount: function() {
  },
  onMycroftMessage: function(msg) {
    this.sendWSMessageToPlugins(msg);
  },
  sendWSMessageToPlugins: function(msg) { 
    var mycroft_message = {
        'message': msg
    };
    console.log(mycroft_message);
    console.log('new state');

    var stateAddition = {mycroft: {
        'message': msg
    }};

    var newState = $.extend({}, this.state, stateAddition);
    console.log(newState);
    this.setState(newState );
  },
  render: function() {
    return (
      <div className="container">
        <MyCroftAdminPanel onMycroftOutput={this.onMycroftMessage} />
        <PluginZone mycroft={this.state.mycroft} />
      </div>
    );
  }
});
