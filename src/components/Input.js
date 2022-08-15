import React, { Component } from 'react';

export class Input extends Component {
  render() {
    const { id, title, type, value, onChange } = this.props;
    return (
      <div>
        <label htmlFor={id}>{title}: </label>
        <input
          className="border"
          type={type}
          id={id}
          value={value}
          onChange={onChange}
        />
      </div>
    );
  }
}

export default Input;
