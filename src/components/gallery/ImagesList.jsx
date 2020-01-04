import React, { Component } from 'react';
import Image from './Image';

export default class ImagesList extends Component {
  constructor() {
    super();

    this.state = {
      images: [],
      loaded: false,
      interval: null,
    };
  }

  componentDidMount() {
    this.getImages();
  }

  componentWillUnmount() {
    const { interval } = this.state;
    if (interval) {
      clearInterval(interval);
    }
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

  startAutoRefresh = () => {
    const interval = setInterval(this.getImages, 3000);
    this.setState({
      interval,
    });
  };

  stopAutoRefresh = () => {
    clearInterval(this.state.interval);
    this.setState({ interval: null });
  };

  onRefresh = () => {
    if (this.state.interval) {
      this.stopAutoRefresh();
    } else {
      this.startAutoRefresh();
    }
  };

  render() {
    const { images, loaded, interval } = this.state;
    return (
      <div>
        <button onClick={this.onRefresh}>
          {interval ? 'Stop auto-refresh' : 'Start auto-refresh'}
        </button>

        <div className="row">
          {loaded
            ? images.map(image => <Image key={image.id} image={image} />)
            : 'Loading...'}
        </div>
      </div>
    );
  }
}
