import React, { Component } from 'react';
import Input from './Input';

export class Job extends Component {
  render() {
    const { remove } = this.props;
    return (
      <div className="border rounded-lg p-4 mt-4">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-xl text-slate-900">Trabajo</h3>
          <button
            className="font-mono px-3 py-1 rounded-lg flex items-center justify-center hover:bg-slate-100 text-slate-500"
            onClick={remove}
          >
            X
          </button>
        </div>
        <Input title="Empresa" id="place" type="text" />
        <Input title="Rol" id="rol" type="text" />
        <Input title="Descripción de tareas" id="description" type="text" />
        <Input title="Fecha de Inicio" id="datestart" type="text" />
        <Input title="Fecha de Finalización" id="dateend" type="text" />
        <Input title="Ciudad" id="city" type="text" />
        <Input title="País" id="country" type="text" />
      </div>
    );
  }
}

export default Job;
