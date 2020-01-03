import React, { Component } from 'react';
import Image from './Image';

export default class ImagesList extends Component {
  constructor() {
    super();

    this.state = {
      images: [],
      loaded: false,
    };
  }

  componentDidMount() {
    this.getImages();
  }

  toImage = ({ data: { thumbnail, title, num_comments, permalink, id } }) => {
    return {
      id,
      thumbnail,
      title,
      num_comments,
      permalink,
    };
  };

  sortByComments = (a, b) => {
    if (a.num_comments > b.num_comments) {
      return -1;
    }
    if (a.num_comments < b.num_comments) {
      return 1;
    }
    return 0;
  };

  getImages = () => {
    fetch('https://www.reddit.com/r/reactjs.json?limit=100')
      .then(response => response.json())
      .then(({ data: { children = [] } }) => {
        const images = children.map(this.toImage).sort(this.sortByComments);
        this.setState({
          images: images,
          loaded: true,
        });
      });
  };
  render() {
    const { images, loaded } = this.state;
    return (
      <div className="row">
        {loaded
          ? images.map(image => <Image key={image.id} image={image} />)
          : 'Loading...'}
      </div>
    );
  }
}
