import React, { Component } from "react";
import PropTypes from "prop-types";

class TemperatureMeasure extends Component {
  render() {
    return (
      <svg width={this.props.size} version="1.1" viewBox="0 0 500 500">
        <path
          id={this.props.id + "probe"}
          d="m219.5 349.1l16.2 32.5h33.1s15.6-32.5 15.6-32.5v-340.7c0-0.012-64.9-0.012-64.9-0.012v340.7"
          fillRule="evenodd"
          stroke={this.props.color}
          strokeWidth="10"
          fill={this.props.color}
        />
        <path
          id={this.props.id + "container"}
          d="m89.67 251.8v243.3h324.5v-243.3h-32.5v210.9h-259.6v-210.9h-32.43"
          stroke={this.props.color}
          strokeWidth="10"
          fill={this.props.color}
        />
        <path
          id={this.props.id + "content"}
          d="m138.3 251.8h64.9v146h65.6 31.8v-146h64.9v194.7h-227.2v-194.7"
          stroke={this.props.color}
          strokeWidth="10"
          fill={"none"}
        />
        <path
          id={this.props.id + "temperature"}
          d="m130.4 137.7c-0.6-2.8-3.4-4.6-6.3-3.9-9.9 2.2-16.9 10.9-16.9 21.2 0 2.9 2.4 5.2 5.3 5.2s5.2-2.3 5.2-5.2c0-5.2 3.7-9.8 8.8-11 2.8-0.6 4.6-3.4 3.9-6.3m1.1-132.8c-13.9 0-25.3 11.41-25.3 25.33v91.11c-12.64 8.5-20.37 22.5-20.37 38 0 25.1 20.57 45.7 45.67 45.7 25.2 0 45.7-20.6 45.7-45.7 0-15.5-7.7-29.6-20.4-38v-91.11c0-13.92-11.3-25.33-25.3-25.33v-0.002m0 8.892c9.1 0 16.4 7.34 16.4 16.44v93.51 2.6l2.3 1.2c11.3 6.6 18.1 18.6 18.1 31.8 0 20.3-16.4 36.8-36.8 36.8-20.3 0-36.78-16.5-36.78-36.8 0-13.2 6.88-25.1 18.18-31.8l2.2-1.2v-2.6-93.51c0-9.1 7.3-16.44 16.4-16.44"
          stroke={this.props.color}
          strokeWdth="10"
          fill={this.props.color}
        />
      </svg>
    );
  }
}

TemperatureMeasure.defaultProps = {
  id: "TemperatureMeasure",
  color: "#666666",
  size: 50,
  opacity: 1,
};

TemperatureMeasure.propTypes = {
  id: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  opacity: PropTypes.number.isRequired,
  type: PropTypes.string,
};

export default TemperatureMeasure;
