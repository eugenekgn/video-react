import React from 'react';
import {Link} from 'react-router';

export default () => {
  return (
    <nav className="navbar navbar-toggleable-md navbar-light bg-primary">
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
              data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand" href="#">Videos</a>
    </nav>)
}