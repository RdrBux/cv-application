import React, { Component } from 'react';

export class Textarea extends Component {
  render() {
    const { id, title, value, onChange } = this.props;
    return (
      <div className="flex flex-col mt-3">
        <label className="text-slate-700 text-sm" htmlFor={id}>
          {title}:{' '}
        </label>
        <textarea
          className="border p-2 rounded"
          id={id}
          value={value}
          onChange={onChange}
        />
      </div>
    );
  }
}

export default Textarea;
