var React = require('react');

var weekday = new Array(7);
var month = new Array(12);

module.exports = React.createClass({
  componentDidMount: function() {
    $("#Clock_CurrentTime").css({"font-size":"100px" });

    weekday[0]=  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    //-----------------------------
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    window.setInterval(function () {
     this.setTime();
    }.bind(this), 1000);
  },

  setTime: function(){
  	
  	var currentdate = new Date();
  	
	var day = currentdate.getDay();
    var date = currentdate.getDate();
    var month = currentdate.getMonth();
    var offset = Math.abs(currentdate.getTimezoneOffset())/60;
    var hours = currentdate.getUTCHours()+offset;
    var minutes = currentdate.getUTCMinutes();
    var seconds = currentdate.getUTCSeconds();
    
    // pad the hours, minutes and seconds
    if(hours < 10) {
    	hours = "0" + hours;	
    }
    if(minutes < 10) {
    	minutes = "0" + minutes;	
    }
    if(seconds < 10) {
    	seconds = "0" + seconds;	
    }
    
    this.setState({
      day: day,
      date: date,
      month: month,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    });

  },

  componentWillMount: function(){
    this.setTime();
  },

  render: function() {
    return(
      <div className="Clock_Container">
        <h1 id="Clock_CurrentDate" className="dimmed-1">{weekday[this.state.day]} <small  className="dimmed-3">the</small> {this.OrdinalSuffixOf(this.state.date)} <small  className="dimmed-3">of</small> {month[this.state.month]}</h1>
        <h1 id="Clock_CurrentTime" className="dimmed-1">{this.state.hours}:{this.state.minutes}<small  className="dimmed-3">{this.state.seconds}</small></h1>
      </div>
    )
  },

  OrdinalSuffixOf: function(i) {
    var j = i % 10,
    k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
  }
});
