import React, { Component } from 'react';
import Input from './Input';

export class Education extends Component {
  render() {
    const { remove, handleChange, college, career, yearstart, yearend } =
      this.props;
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
        <Input
          title="Universidad"
          id="college"
          type="text"
          value={college}
          onChange={handleChange}
        />
        <Input
          title="Carrera Universitaria"
          id="career"
          type="text"
          value={career}
          onChange={handleChange}
        />
        <Input
          title="Año de inicio"
          id="yearstart"
          type="number"
          value={yearstart}
          onChange={handleChange}
        />
        <Input
          title="Año de finalización"
          id="yearend"
          type="number"
          value={yearend}
          onChange={handleChange}
        />
      </div>
    );
  }
}

export default Education;
