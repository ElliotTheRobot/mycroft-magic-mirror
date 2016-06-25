//Using As Template
var React = require('react');

var ChatMessage = require('./ChatMessage.js');

module.exports = React.createClass({
    componentDidMount: function() {
      console.log("ChatLog");
      console.log(this.props);
    },
  render: function() {
    console.log('in CL');
    console.log(this.props);
    var chatMessages = this.props.messages.map(function(message) {
          return (
          <ChatMessage origin={message.origin} key={message.id} text={message.text} />
          //<p>{message}</p>
          );
        });

    return (
      <div>
      {chatMessages}
      </div>
    );
  }
});
