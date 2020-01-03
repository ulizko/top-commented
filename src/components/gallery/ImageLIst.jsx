import React, { Component } from 'react';
import Image from './Image';

export default class ImageList extends Component {
  render() {
    const image = {
      thumbnail: 'pic',
      title: 'title',
      num_comments: 5,
      permalink: 'https://google.com',
    };
    return (
      <div className="row">
        <Image image={image} />
      </div>
    );
  }
}
