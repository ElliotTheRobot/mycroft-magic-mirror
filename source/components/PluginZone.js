//Using As Template
var React = require('react');

var config = require('../plugin.conf.json');

//Horrible :'(  '
if (config.plugins.PluginTop == null) {
  var PluginTop = require('./Blank.js');
} else {
  var PluginTop = require('../plugins/' + config.plugins.PluginTop);
}
if (config.plugins.PluginLeft == null) {
  var PluginLeft = require('./Blank.js');
} else {
  var PluginLeft = require('../plugins/' + config.plugins.PluginLeft);
}
if (config.plugins.PluginMid == null) {
  var PluginMid = require('./Blank.js');
} else {
  var PluginMid = require('../plugins/' + config.plugins.PluginMid);
}
if (config.plugins.PluginRight == null) {
  var PluginRight = require('./Blank.js');
} else {
  var PluginRight = require('../plugins/' + config.plugins.PluginRight);
}
if (config.plugins.PluginBottom == null) {
  var PluginBottom = require('./Blank.js');
} else {
  var PluginBottom = require('../plugins/' + config.plugins.PluginBottom);
}

module.exports = React.createClass({
  componentDidMount: function() {
    console.log('Plugin Config Loaded');
    console.log(config);
  },
//  getInitialState: function() {

  //},
  render: function() {
    return (
      <div  className='PluginZone' >
        <div className='row'>
          <div className='PluginZone-Top col-xs-12'>
            <PluginTop />
          </div>
        </div>
        <div className='row'>
          <div className='PluginZone-Left col-xs-12 col-md-3'>
            <PluginLeft />
          </div>
          <div className='PluginZone-Mid col-xs-12 col-md-6'>
            <PluginMid />
          </div>
          <div className='PluginZone-Right col-xs-12 col-md-3'>
            <PluginRight />
          </div>
        </div>
        <div className='row'>
          <div className='PluginZone-Bottom col-xs-12'>
            <PluginBottom />
          </div>
        </div>
      </div>
    );
  }
});
