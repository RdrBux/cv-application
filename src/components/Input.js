import React, { Component } from 'react';

export class Input extends Component {
  render() {
    const { id, title, type } = this.props;
    return (
      <div>
        <label htmlFor={id}>{title}: </label>
        <input className="border" type={type} id={id} />
      </div>
    );
  }
}

export default Input;
