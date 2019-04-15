var React = require('react');
var DefaultLayout = require('./layouts/default');

import Grid from './grid'


class HelloMessage extends React.Component {
  render() {
    
        return (
        	<DefaultLayout>
        	<Grid></Grid>
            </DefaultLayout>
        )
  }
}

module.exports = HelloMessage;