import React, { Component } from 'react';
import Image from './Image';
import RangeFilter from './RangeFilter';

export default class ImagesList extends Component {
  constructor() {
    super();

    this.state = {
      numberOfComments: null,
    };
  }

  setNumberOfComments = number => {
    this.setState({ numberOfComments: number });
  };

  filterByComments = image => {
    const { numberOfComments } = this.state;
    return !numberOfComments || image.num_comments >= Number(numberOfComments);
  };

  render() {
    const { images } = this.props;
    const { numberOfComments } = this.state;

    const filteredImages = images
      .filter(this.filterByComments)
      .map(image => <Image key={image.id} image={image} />);

    return (
      <div>
        <RangeFilter
          max={images[0].num_comments}
          value={numberOfComments}
          setNumberOfComments={this.setNumberOfComments}
        />
        <div className="row">
          {filteredImages.length
            ? filteredImages
            : 'No results found matching your criteria'}
        </div>
      </div>
    );
  }
}
