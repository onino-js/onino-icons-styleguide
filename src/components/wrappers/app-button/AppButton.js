import React, { Component } from "react";
import PropTypes from "prop-types";

class AppButton extends Component {
  constructor(props) {
    super(props);
    this.attr = {
      fill: props.fill || "none",
      size: this.props.size - this.props.size * 0.3,
    };
    this.state = {
      color: this.props.color,
      boxStrokeColor: this.props.boxStrokeColor,
      boxFill: this.props.boxFill,
    };
  }
  componentDidMount() {}
  mouseOver(e) {
    this.setState({
      color: this.props.hoverColor,
      boxStrokeColor: this.props.hoverBoxStrokeColor,
      boxFill: this.props.hoverBoxFill,
    });
  }

  mouseOut(e) {
    this.setState({
      color: this.props.color,
      boxStrokeColor: this.props.boxStrokeColor,
      boxFill: this.props.boxFill,
    });
  }

  render() {
    const Wrapped = this.props.icon;
    return (
      <div
        id="svg2"
        style={{
          height: this.props.size,
          width: this.props.size,
          cursor: "pointer",
          position: "relative",
        }}
        onMouseOver={e => this.mouseOver(e)}
        onMouseOut={e => this.mouseOut(e)}
        onClick={this.props.onClick}
      >
        {this.props.showBox ? (
          <svg viewBox="0 0 500 500">
            <path
              id="contour"
              d="M 30,30 C 40.000001,20.000002 176.36425,9.9999999 249.99999,9.9999996 323.63573,9.9999993 459.99998,19.999999 470,30 480,39.999981 489.99998,176.36425 489.99998,249.99999 489.99998,323.63573 480.00002,460.00002 470,470 459.99998,479.99998 323.63573,489.99998 249.99999,489.99998 176.36425,489.99998 39.999981,480 30,470 19.999999,459.99998 9.9999993,323.63573 9.9999996,249.99999 9.9999999,176.36425 19.999999,39.999998 30,30 z"
              fill={this.state.boxFill}
              stroke={this.state.boxStrokeColor}
              strokeWidth="20px"
            />
          </svg>
        ) : (
          <path />
        )}
        <div
          style={{
            height: this.props.size,
            width: this.props.size,
            position: "absolute",
            top: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Wrapped {...this.attr} color={this.state.color} />
        </div>
      </div>
    );
  }
}

AppButton.defaultProps = {
  size: 50,
  showBox: true,
  color: "#666666",
  boxStrokeColor: "#666666",
  boxFill: "#FFFFFF",
  hoverColor: "#000000",
  hoverBoxFill: "#FFFFFF",
  hoverBoxStrokeColor: "#000000",
};
AppButton.propTypes = {
  showBox: PropTypes.bool.isRequired,
  hoverColor: PropTypes.string.isRequired,
  hoverBoxStrokeColor: PropTypes.string.isRequired,
  hoverBoxFill: PropTypes.string.isRequired,
  boxFill: PropTypes.string.isRequired,
  boxStrokeColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default AppButton;
