import React, { Component } from 'react';
import Input from './Input';

export class Job extends Component {
  render() {
    return (
      <div>
        <h3>Trabajo</h3>
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
