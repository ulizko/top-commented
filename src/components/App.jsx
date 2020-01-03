import React, { Component } from 'react';
import ImageLIst from './gallery/ImageLIst';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Top commented</h1>
        <ImageLIst />
      </div>
    );
  }
}
