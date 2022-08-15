import React, { Component } from 'react';
import Input from './Input';

export class Education extends Component {
  render() {
    const { remove } = this.props;
    return (
      <div className="border rounded-lg p-4 mt-4">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-xl text-slate-900">Estudios</h3>
          <button
            className="font-mono px-3 py-1 rounded-lg flex items-center justify-center hover:bg-slate-100 text-slate-500"
            onClick={remove}
          >
            X
          </button>
        </div>
        <Input title="Universidad" id="college" type="text" />
        <Input title="Carrera Universitaria" id="career" type="text" />
        <Input title="Año de inicio" id="yearstart" type="number" />
        <Input title="Año de finalización" id="yearend" type="number" />
      </div>
    );
  }
}

export default Education;
