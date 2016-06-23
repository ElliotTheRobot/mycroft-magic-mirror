var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <header class="float-right text-muted">
        <small>Node: <script>document.write(process.versions.node)</script>,</small>
        <small>Chrome: <script>document.write(process.versions.chrome)</script>,</small>
        <small>Electron: <script>document.write(process.versions.electron)</script>.</small>
      </header>
    );
  }
});
