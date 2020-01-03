import React, { Component } from 'react';

export default class Image extends Component {
  render() {
    const { thumbnail, title, num_comments, permalink } = this.props.image;
    return (
      <div className="card col-sm-4">
        <img src={thumbnail} className="card-img-top" alt="..." />
        <div className="card-body">
          <h6 className="card-title">{title}</h6>
          <p className="card-text">Number of comments: {num_comments}</p>
          <a href={permalink} target="_blank" rel="noopener noreferrer">
            Link
          </a>
        </div>
      </div>
    );
  }
}
