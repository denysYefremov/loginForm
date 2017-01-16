import React, { PropTypes, Component } from 'react';

function makePlaceholder(placeholder, textLength) {
  const element = placeholder;
  if (!textLength) {
    element.className = element.className.replace('label', 'placeholder');
  } else {
    element.className = element.className.replace('placeholder', 'label');
  }
}

class CustomInput extends Component {
  componentDidMount() {
    makePlaceholder(this.placeholder, this.textInput.value.length);
  }

  render() {
    const { className, error, labelPlaceholder, ...inputProps } = this.props;

    let focused = false;

    return (
      <div className="form-group custom-input">
        {
          labelPlaceholder &&
          <span ref={span => (this.placeholder = span)} className="input-title label" >
            { labelPlaceholder }
          </span>
        }
        <input
          className={`form-control ${className}`}
          {...inputProps}
          ref={input => (this.textInput = input)}
          onChange={() => {
            if (!focused) { makePlaceholder(this.placeholder, this.textInput.value.length); }
          }}
          onFocus={() => {
            focused = true;
            makePlaceholder(this.placeholder, true);
          }}
          onBlur={() => {
            focused = false;
            makePlaceholder(this.placeholder, this.textInput.value.length);
          }}
        />
        {error && <span className="error">{ error }</span>}
      </div>
    );
  }
}

CustomInput.defaultProps = {
  className: '',
  error: null,
  labelPlaceholder: null,
};

const { string } = PropTypes;

CustomInput.propTypes = {
  className: string,
  error: string,
  labelPlaceholder: string,
};

export default CustomInput;
