import React, { PropTypes } from 'react';
import Header from './layout/Header.js';
import { connect } from 'react-redux';

class App extends React.Component {
  /**
   * this.props.children trickle down from the router
   */
  render() {
    return (
      <div className="container-fluid">
        <Header />
      </div>
    );
  }
}

export default App;