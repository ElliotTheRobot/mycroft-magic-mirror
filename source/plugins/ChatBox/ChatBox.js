var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
    return {message: ""};
  },
  onSubmit: function(e) {
    e.preventDefault();
    this.sendMessage(e);
  },
  sendMessage: function() {
    if(!("WebSocket" in window)){
      window.alert('Oh no, you need a browser that supports WebSockets');
    }else{
      var socket = new WebSocket("ws://localhost:8000/events/ws");

      socket.onopen = function(){
        console.log("Socket has been opened");
        var msg = {};

        msg.message_type = "recognizer_loop:utterance";
        msg.metadata = {};
        msg.metadata.utterances = [this.state.message];

        console.log(msg);

        socket.send(JSON.stringify(msg));

        socket.onclose = function () {}; // disable onclose handler first
        socket.close()

        this.setState({message: ""});

      }.bind(this)



    };
  },
  handleChange: function(event) {
    this.setState({message: event.target.value.substr(0, 140)});
  },
  render: function() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label>Ask Mycroft</label>
          <input value={this.state.message} onChange={this.handleChange} className="form-control input-lg" type="text" placeholder="Type a question here or say &quot;Hey Mycroft &quot;" />
          <p className="help-block"></p>
        </div>
        <button className="btn btn-default" type="submit">Ask</button>
        <div style={{height: '20px'}} />
      </form>
    );
  }
});
