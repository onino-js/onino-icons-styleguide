import React, { Component } from "react";
import PropTypes from "prop-types";

class PrecastWorkout extends Component {
  render() {
    return (
      <svg width={this.props.size} version="1.1" viewBox="0 0 500 500">
        <path
          id={this.props.id}
          fill={this.props.color}
          opacity={this.props.opacity}
          d="m114.9 259.1v2.9 117.3h-105.2-2.941v2.9 108.1 2.9h2.924 480.6 2.9v-2.9-108.1-2.9h-2.9-105.2v-117.3-2.9h-2.9-264.4-2.9m5.8 5.8h258.6v117.3 2.9h2.9 105.2v102.3h-474.8c0.01 0 0.01-102.3 0.01-102.3h105.2 2.9v-2.9-117.3m7.7-258.1l-0.9 1.142s-120.1 156.2-120.1 156.2c-0.047 0-0.641 0.8-0.641 0.8v1 204.3 2.9h2.924 96.12 2.9v-2.9-117.3h282.6v117.3 2.9h2.9 96.1 2.9v-2.9-204.3-1s-0.6-0.8-0.6-0.8-120.1-156.2-120.1-156.2c0 0.001-0.9-1.141-0.9-1.141h-1.4-240.4-1.4m2.9 5.851h237.4l118.7 154.2v200.5h-90.3v-117.3-2.9h-2.9-288.4-2.9v2.9 117.3h-90.29v-200.5l118.7-154.2v0.01"
        />
      </svg>
    );
  }
}

PrecastWorkout.defaultProps = {
  id: "PrecastWorkout",
  color: "#666666",
  size: 50,
  opacity: 1,
};

PrecastWorkout.propTypes = {
  id: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  opacity: PropTypes.number.isRequired,
};

export default PrecastWorkout;
