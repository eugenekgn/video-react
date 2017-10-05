import React, { Component } from 'react'
import Header from './layout/Header';
import VideoListPage from './video-list/VideoListPage';
import "../../../node_modules/bootstrap/scss/bootstrap.scss";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <VideoListPage />
      </div>
    )
  }
}
