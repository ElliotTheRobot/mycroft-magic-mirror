//Using As Template
var React = require('react');

var Message = require('./Message.js');




module.exports = React.createClass({
  getInitialState: function() {
    return {messages: []}
  },
    componentDidMount: function() {
      console.log("MessageLogProps");
      console.log(this.props);

      $(".PluginZone-Bottom").css({"right":"auto","left":"auto" });

    },
    componentWillReceiveProps: function (nextProps) {
      var newMessage = null;

      //Find new message for log
      if (nextProps.mycroftInfo.message.message_type == 'speak') {
        newMessage =  {"id": nextProps.mycroftInfo.message.id , "origin": "Mycroft" , "text" : nextProps.mycroftInfo.message.metadata.utterance };
      } else if (nextProps.mycroftInfo.message.message_type == 'recognizer_loop:utterance') {
        newMessage =  {"id": nextProps.mycroftInfo.message.id , "origin": "You" , "text" : nextProps.mycroftInfo.message.metadata.utterances[0] };
      }


      if (newMessage != null) {

        //Create clean copy of the current state
        var zstate = $.extend(true, {}, this.state);

        console.log('Messages Length: ');
        console.log(this.state.messages.length);

        if (zstate.messages.length >= 5 ) {
          zstate.messages.shift();
        }

        //zstate.messages =
        zstate.messages.push(newMessage); //.concat([newMessage]);

        this.setState(zstate);

      }

    },
  render: function() {
    console.log('ML STate: (render)');
    console.log(this.state);
    numberOfMessages = this.state.messages.length;
    var messages = this.state.messages.map(function(msg, position) {
          return (
          <Message origin={msg.origin} key={msg.id} text={msg.text} cssDimmLvl={numberOfMessages - position} position={position}/>
          );
        });
        messages.reverse;

    return (
      <div>{messages}</div>
    );
  }
});
