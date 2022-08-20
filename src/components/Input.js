import React, { Component } from 'react';

export class Input extends Component {
  render() {
    const { id, title, type, value, onChange } = this.props;
    return (
      <div className="flex flex-col mt-3">
        <label className="text-slate-700 text-sm" htmlFor={id}>
          {title}:{' '}
        </label>
        <input
          className="border p-2 rounded"
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
