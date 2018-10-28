import React, { Component } from "react";
import PropTypes from "prop-types";

class MainRunnerSlice extends Component {
  render() {
    return (
      <svg width={this.props.size} version="1.1" viewBox="0 0 500 500">
        <path
          id={this.props.id + "casing"}
          d="m6.062 54.85v146.4l121.9 244h122 122l121.9-244v-146.4c0 0.05-12.2 0.05-12.2 0.05v146.4l-109.7 219.6-12.2 12.2h-219.6l-12.2-12.2-109.7-219.6c-0.04 0-0.04-146.4-0.04-146.4 0 0.05-12.2 0.05-12.2 0.05"
          fillRule="evenodd"
          stroke={this.props.color}
          strokeWidth="3"
          fill={this.props.color}
        />
        <path
          id={this.props.id + "fond"}
          d="m164.6 347.6v85.38h85.38 85.38v-85.38h-85.38-85.38"
          stroke={this.props.color}
          strokeWidth="10"
          fill={this.props.type === "bottom" ? this.props.color : "none"}
        />
        <path
          id={this.props.id + "usure"}
          d="m18.26 54.85v60.98h73.18v85.38l73.18 146.4h85.38 85.38l73.18-146.4v-85.38h73.18v-60.98h-158.6v85.38c0 97.58-73.18 97.58-73.18 97.58s-75.73-0.0333-73.18-97.58v-85.38h-158.6"
          stroke={this.props.color}
          strokeWidth="10"
          fill={this.props.type === "wear" ? this.props.color : "none"}
        />
        <path
          id={this.props.id + "secu"}
          d="m335.4 347.6l73.18-146.4v-85.38h73.18v85.38l-109.8 219.5-12.2 12.2h-24.39v-85.38m-170.8 0l-73.18-146.4v-85.38h-73.18v85.38l109.8 219.5 12.2 12.2h24.39v-85.38"
          stroke={this.props.color}
          strokeWdth="10"
          fill={this.props.type === "security" ? this.props.color : "none"}
        />
      </svg>
    );
  }
}

MainRunnerSlice.defaultProps = {
  id: "MainRunnerSlice",
  color: "#666666",
  size: 50,
  opacity: 1,
};

MainRunnerSlice.propTypes = {
  id: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  opacity: PropTypes.number.isRequired,
  type: PropTypes.string,
};

export default MainRunnerSlice;
