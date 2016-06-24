//Using As Template
var React = require('react');

var self

module.exports = React.createClass({
//  componentDidMount: function() {

//  },
  getInitialState: function() {
    self = this;
    return {buttonType: 'Connect'}
  },
  handleClick: function() {
    if (this.state.buttonType === 'Connect') {
      this.connectToService();
      this.setState({buttonType: 'Disconnect'});
    } else {
      this.disconnectFromService();
      alert('Havent written method yet')
      //this.setState({buttonType: 'Disconnect'}
    }
  },
  connectToService: function() {
    if(!("WebSocket" in window)){
      window.alert('Oh no, you need a browser that supports WebSockets');
    }else{
      var socket = new WebSocket("ws://localhost:8000/events/ws");

      socket.onopen = function(){
        console.log("Socket has been opened!");
      }
      socket.onmessage = function(event){
        self.sendMessage(event);
      }
    };
  },
  sendMessage: function(event){
    console.log("in SEND MESSAGE");
    console.log(event);

    console.log("CALLING PROP");
    this.props.onMessage(event);
  },
  render: function() {
    return (
      <button id="OpenWebSocket" type="button" name="OpenWebSocket" className="btn btn-primary  btn-block col-xs-12" onClick={this.handleClick} >{this.state.buttonType}</button>
    );
  }
});
