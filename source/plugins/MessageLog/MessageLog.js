//Using As Template
var React = require('react');

var ChatMessage = require('./Message.js');

module.exports = React.createClass({
    componentDidMount: function() {
      console.log("MessageLogProps");
      console.log(this.props);
    },
  render: function() {
    console.log('in CL');
    console.log(this.props);
    var chatMessages = this.props.messages.map(function(msg) {
          return (
          <Message origin={msg.origin} key={msg.id} text={msg.text} />
          //<p>{message}</p>
          );
        });

    return (
      <div>{Messages}</div>
    );
  }
});
