import React, { Component } from 'react';

export default class RangeFilter extends Component {
  static defaultProps = {
    min: 0,
  };

  handleChange = event => {
    const { value } = event.target;
    this.props.setNumberOfComments(value);
  };

  resetRange = event => {
    event.preventDefault();
    this.props.setNumberOfComments(null);
  };

  render() {
    const { min, max, value } = this.props;
    return (
      <form>
        <div className="form-group">
          <label htmlFor="formControlRange">
            {value ? `Current filter: ${value}` : ''}
          </label>
          <input
            type="range"
            min={min}
            max={max}
            className="form-control-range"
            id="formControlRange"
            onChange={this.handleChange}
          />
        </div>
        {value ? <button onClick={this.resetRange}>Reset</button> : null}
      </form>
    );
  }
}
