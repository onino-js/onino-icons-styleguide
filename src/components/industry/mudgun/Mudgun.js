import React, { Component } from "react";
import PropTypes from "prop-types";

class Mudgun extends Component {
  render() {
    return (
      <svg width={this.props.size} version="1.1" viewBox={this.props.viewBox}>
        <path
          id={this.props.id}
          fill={this.props.color}
          opacity={this.props.opacity}
          d="m238.4 199.2s-19.5 0-19.5 13.6 19.5 13.6 19.5 13.6h77.6s19.4 0 19.4-13.6-19.4-13.6-19.4-13.6h-77.6m54.7 3.4h25.5s12.8 0 12.8 10-12.8 10-12.8 10h-25.5c0.7-7.3 0.7-10.3 0-20m-251.4 71.7v-19.4h19.75l16.82-15.8h271.1l-1.6 64.4h-227.1l-59.23-29.2h-19.75m104.4-114.7c-2.6 0-5 2.4-5 5v15.1h-25.1c-1.3 0-2.6 0.5-3.5 1.5l-58.81 58.8h-28.06c-2.63 0-5.02 2.3-5.02 5v40.1h-0.03l5.05 5.1h28.94l59.23 29.6c0.7 0.3 1.4 0.5 2.2 0.5h25.1v15.1c0 2.6 2.4 5 5 5h50.3c2.6 0 5-2.4 5-5v-15.1h140.6v15.1c0 2.6 2.4 5 5 5h50.2c2.6 0 5-2.4 5-5v-15.1h45.2c2.6 0 5-2.4 5-5v-50.2h27v-30.2h-27v-50.2c0-2.6-2.4-5-5-5h-45.2v-15.1c0-2.6-2.4-5-5-5h-50.2c-2.6 0-5 2.4-5 5v15.1h-140.6v-15.1c0-2.6-2.4-5-5-5h-50.3m5.1 10.1h40.1v15c0 2.7 2.4 5 5.1 5h150.6c2.6 0 5-2.3 5-5v-15h40.2v15c0 2.7 2.4 5 5 5h45.2v45.2h-53.4v-40.1h-30.1v110.4h30.1v-40.1h53.4v45.2h-45.2c-2.6 0-5 2.3-5 5v15h-40.2v-15c0-2.7-2.4-5-5-5h-150.6c-2.7 0-5.1 2.3-5.1 5v15h-40.1v-15c0-2.7-2.4-5-5.1-5h-28.9l-59.18-29.6c-0.7-0.4-1.48-0.6-2.26-0.6h-25.11v-30.1h25.11c1.31 0 2.62-0.5 3.55-1.5 0 0 58.79-58.8 58.79-58.8h28c2.7 0 5.1-2.3 5.1-5v-15"
        />
      </svg>
    );
  }
}

Mudgun.defaultProps = {
  id: "mudgun",
  color: "#666666",
  size: 50,
  opacity: 1,
  viewBox: "0 0 500 500",
};

Mudgun.propTypes = {
  id: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  opacity: PropTypes.number.isRequired,
  viewBox: PropTypes.number.isRequired,
};

export default Mudgun;
