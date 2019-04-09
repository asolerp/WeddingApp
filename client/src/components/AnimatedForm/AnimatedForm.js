import React from "react";
import animateForm from "../utils/svgAnimation";
import { FormAnimatedWrapperStyle } from "./AnimatedFormStyle";

class FormAnimated extends React.Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {};
  }

  componentDidMount() {
    const widtdView = window.innerWidth;
    this.setState(
      { ...this.state, width: window.innerWidth, height: window.innerHeight },
      () =>
        animateForm(
          widtdView,
          this.props.iniY,
          this.props.endY,
          this.props.className,
          this.props.time
        )
    );
  }

  render() {
    return (
      <FormAnimatedWrapperStyle absolute={this.props.absolute}>
        {this.state.height !== undefined && (
          <svg
            fill={this.props.color}
            width={this.state.width}
            height={this.state.height}
            viewBox={`0 0 ${
              this.state.width !== undefined
                ? this.state.width
                : this.state.width
            } ${
              this.props.height !== undefined
                ? this.props.height
                : this.state.height
            }`}
          >
            <path id={this.props.className} d={this.props.form} />
          </svg>
        )}
      </FormAnimatedWrapperStyle>
    );
  }
}

export default FormAnimated;
