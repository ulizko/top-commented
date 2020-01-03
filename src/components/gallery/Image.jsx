import React, { Component } from 'react';
import NoImage from '../../img/no_image.png';

export default class Image extends Component {
  render() {
    const { thumbnail, title, num_comments, permalink } = this.props.image;
    return (
      <div className="card col-sm-4">
        <img
          src={thumbnail === 'self' ? NoImage : thumbnail}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">Number of comments: {num_comments}</p>
          <a href={permalink} target="_blank" rel="noopener noreferrer">
            Link
          </a>
        </div>
      </div>
    );
  }
}
