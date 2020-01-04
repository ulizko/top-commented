import React, { Component } from 'react';
import ImagesList from './gallery/ImagesList';
import RefreshButton from './gallery/RefreshButton';

export default class App extends Component {
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
    this.clearRefreshInterval();
  }

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

  setRefreshInterval = () => {
    const interval = setInterval(this.getImages, 3000);

    this.setState({ interval });
  };

  clearRefreshInterval = () => {
    const { interval } = this.state;
    if (interval) {
      clearInterval(interval);
      this.setState({ interval: null });
    }
  };

  render() {
    const { images, loaded, interval } = this.state;

    return (
      <div className="container">
        <h1>Top commented</h1>
        <RefreshButton
          interval={interval}
          setRefreshInterval={this.setRefreshInterval}
          clearRefreshInterval={this.clearRefreshInterval}
        />

        {loaded ? <ImagesList images={images} /> : 'Loading...'}
      </div>
    );
  }
}
