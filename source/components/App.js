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
    console.log("Log from App.js: " + msg);
    console.log(msg);
    this.sendWSMessageToPlugins(msg);

//    var messages = this.state.mycroftMessages;
//    var newMessages = null;
//
//    if (msg.message_type == 'speak') {
//      newMessages =  messages.concat([{"id": msg.id , "origin": "Mycroft" , "text" : msg.metadata.utterance }]);
//    } else if (msg.message_type == 'recognizer_loop:utterance') {
//      newMessages =  messages.concat([{"id": msg.id , "origin": "You" , "text" : msg.metadata.utterances[0] }]);
//    }
//
//    if (newMessages != null){
//
//      if (newMessages.length > 5){
//        newMessages.shift();
//      }
//      console.log("Messages: ");
//      console.log(newMessages);
//      this.setState({mycroftMessages: newMessages});
//    }


  },
  sendWSMessageToPlugins: function(msg) {
    console.log('sending message ' + msg + ' to plugins');
    console.log(msg);
    console.log('created mc object');
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

        <PluginZone mycroft={this.state.mycroft}/>

        <div className="navbar navbar-fixed-bottom">
        </div>
      </div>
    );
  }
});
