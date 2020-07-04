import React, { Component } from 'react';
import PropsTypes from 'prop-types';

export default class AppInput extends Component {
  constructor(props) {
    super(props);
  };

  hundleChange({ target: { name, value, placeholder } }) {
    this.props.onChange({
      target: this,
      name,
      value,
      placeholder,
    });
  };

  render() {
    return (
      <input
        name={this.props.name}
        type='text'
        value={this.props.value}
        onChange={ e => this.hundleChange(e) }
        placeholder={this.props.placeholder}
      />
    );
  };
};

AppInput.propTypes = {
  name: PropsTypes.string.isRequired,
  value: PropsTypes.string,
  onChange: PropsTypes.func.isRequired,
  placeholder: PropsTypes.string,
};

AppInput.defaultProps = {
  value: '',
  placeholder: '',
};