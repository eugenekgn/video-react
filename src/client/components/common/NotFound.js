import React from 'react';
import { Link } from 'react-router';


export default () => {
  return (
    <div>
      <h1>Unfortunately we can't find the page you're looking for</h1>
      <Link to="/">Home</Link>
    </div>
  )
}