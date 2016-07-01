var React = require('react');

module.exports = React.createClass({

  getInitialState: function() {
    return {buttonType: 'Connect'}
  },

  handleClick: function() {
    if (this.state.buttonType === 'Connect') {
      this.connectToService();
    } else {
      //this.disconnectFromService();
      console.log('ToDo: write clean disconnect method');
    }
  },

  connectToService: function() {
    if(!("WebSocket" in window)){
      window.alert('Oh no, you need a browser that supports WebSockets');
    }else{
      var socket = new WebSocket("ws://localhost:8000/events/ws");

      socket.onopen = function(){
        console.log("Socket has been opened");
        this.setState({buttonType: 'Disconnect'});
      }.bind(this)

      socket.onmessage = function(event){
        this.sendMessage(event);
      }.bind(this)
    };
  },

  sendMessage: function(event){
    this.props.onMessage(event);
  },

  render: function() {
    return (
      <button id="OpenWebSocket" type="button" name="OpenWebSocket" className="btn btn-primary  btn-block col-xs-12" onClick={this.handleClick} >{this.state.buttonType}</button>
    );
  }
});
