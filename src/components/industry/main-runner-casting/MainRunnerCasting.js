import React, { Component } from "react";
import PropTypes from "prop-types";

class MainRunnerCasting extends Component {
  render() {
    return (
      <svg width={this.props.size} version="1.1" viewBox="0 0 500 500">
        <path
          id={this.props.id}
          fill={this.props.color}
          opacity={this.props.opacity}
          d="m7.426 18.78s50.2 68.86 60.64 109.1c10.14 39.2 0 72.8-12.13 109.2-3.83 11.5-24.26 12.1-24.26 12.1l97.02 194.1 12.1 24.2h218.4l12.1-24.2 97-194.1h-36.4-36.4-48.5s-12.1 84.9-97 84.9-97-84.9-97-84.9-48.5 8.1-48.5-12.1c0-36.4-1.4-82.3-12.17-121.3-12.59-45.43-72.78-109.2-72.78-109.2 0 0.048-12.12 12.18-12.12 12.18m155.9 107.3v1.8 121.3c0 36.1 37.2 74.6 86.7 74.6s86.7-38.5 86.7-74.6v-121.3-1.8h-1.8-169.8-1.8m3.6 3.7h166.2v119.4c0 33.5-35.5 71-83.1 71s-83.1-37.5-83.1-71v-119.4m-161.3-3.7v1.8 121.3 0.4l0.19 0.4 121.3 242.6 0.5 1h1.1 242.6 1.1l0.5-1 121.3-242.6 0.2-0.4v-0.4-121.3-1.8h-1.8-12.2-1.8v1.8 120.9l-108.8 217.6-11.4 11.4h-216.8l-11.4-11.4-108.8-217.6c-0.03 0-0.03-120.9-0.03-120.9v-1.8h-1.82-12.12-1.824m3.639 3.7h8.495v119.4 0.4l0.18 0.4 109.2 218.3 0.1 0.3 0.2 0.2 12.2 12.2 0.5 0.5h0.7 218.4 0.7l0.5-0.5 12.2-12.2 0.2-0.2 0.1-0.3 109.2-218.3 0.2-0.4v-0.4-119.4h8.5v119l-120.6 241.2h-240.4l-120.6-241.2c0.045 0 0.045-119 0.045-119"
        />
      </svg>
    );
  }
}

MainRunnerCasting.defaultProps = {
  id: "MainRunnerCasting",
  color: "#666666",
  size: 50,
  opacity: 1,
};

MainRunnerCasting.propTypes = {
  id: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  opacity: PropTypes.number.isRequired,
};

export default MainRunnerCasting;
