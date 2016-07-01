var React = require('react');

var MyCroftAdminPanel = require('./MycroftAdminPanel.js');
var PluginZone = require('./PluginZone.js');


module.exports = React.createClass({
  getInitialState: function() {
    return {
        'info': {},
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

    var stateAddition = {
      mycroft: {'message': msg}
    };

    var newState = $.extend({}, this.state, stateAddition);
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
