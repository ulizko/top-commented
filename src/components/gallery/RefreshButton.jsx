import React, { Component } from 'react';

export default class RefreshButton extends Component {
  onClickRefresh = () => {
    if (this.props.interval) {
      this.props.clearRefreshInterval();
    } else {
      this.props.setRefreshInterval();
    }
  };

  render() {
    const { interval } = this.props;
    return (
      <div className="row">
        <button onClick={this.onClickRefresh}>
          {interval ? 'Stop auto-refresh' : 'Start auto-refresh'}
        </button>
      </div>
    );
  }
}
