import React, { Component } from 'react';
import Input from './Input';

export class Education extends Component {
  render() {
    return (
      <div>
        <h3>Carrera</h3>
        <Input title="Universidad" id="college" type="text" />
        <Input title="Carrera Universitaria" id="career" type="text" />
        <Input title="Año de inicio" id="yearstart" type="number" />
        <Input title="Año de finalización" id="yearend" type="number" />
      </div>
    );
  }
}

export default Education;
