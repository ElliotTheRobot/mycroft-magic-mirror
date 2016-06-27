var React = require('react');

var MyCroftAdminPanel = require('./MycroftAdminPanel.js'); 
var SysInfo = require('./SysInfo.js');
var ChatLog = require('./ChatLog.js');
var PluginZone = require('./PluginZone.js');
//require('module');


module.exports = React.createClass({
  getInitialState: function() {
    return {mycroftMessages:[]};
  },
  componentDidMount: function() {
    console.log("App.js");
    console.log(this.props);
//    this.setState({process: this.props.process});
  },
  newMycroftMessage: function(msg) {
    console.log("Log from App.js: " + msg);
    console.log(msg);

    var messages = this.state.mycroftMessages;
    var newMessages = null;

    if (msg.message_type == 'speak') {
      newMessages =  messages.concat([{"id": msg.id , "origin": "Mycroft" , "text" : msg.metadata.utterance }]);
    } else if (msg.message_type == 'recognizer_loop:utterance') {
      newMessages =  messages.concat([{"id": msg.id , "origin": "You" , "text" : msg.metadata.utterances[0] }]);
    }

    if (newMessages != null){

      if (newMessages.length > 5){
        newMessages.shift();
      }
      console.log("Messages: ");
      console.log(newMessages);
      this.setState({mycroftMessages: newMessages});
    }


  },
  render: function() {
    return (
      <div className="container">
        <MyCroftAdminPanel onMycroftOutput={this.newMycroftMessage} />

        <PluginZone />

        <div className="navbar navbar-fixed-bottom">
          <ChatLog messages={this.state.mycroftMessages} />
        </div>
      </div>
    );
  }
});
