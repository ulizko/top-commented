import React, { Component } from 'react';
import ImagesList from './gallery/ImagesList';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Top commented</h1>
        <ImagesList />
      </div>
    );
  }
}
