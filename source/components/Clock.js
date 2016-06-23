var React = require('react');
//global.jQuery = require('jquery');
//$=global.jQuery
//require('../assets/external/flipclock/flipclock.js');
require('../../node_modules/flipclock/compiled/flipclock.js');
require('../../node_modules/flipclock/compiled/flipclock.css');


module.exports = React.createClass({
  componentDidMount: function() {
    var clock = $('.clock').FlipClock({
      clockFace: 'TwentyFourHourClock',
      showSeconds: false
    });
  },
  render: function() {
    return (
      <div  className='row clock' ></div>
    );
  }
});
