import React, { Component } from 'react';
import Education from './Education';
import Input from './Input';
import Job from './Job';

export class Form extends Component {
  constructor() {
    super();
    this.state = {
      jobs: [<Job />],
      education: [<Education />],
    };
  }

  job() {
    this.setState({
      jobs: this.state.jobs.concat(<Job />),
    });
  }

  education() {
    this.setState({
      education: this.state.education.concat(<Education />),
    });
  }

  render() {
    return (
      <div>
        <div>
          <h2 className="font-bold text-xl">Datos personales</h2>
          <div>
            <Input title="Nombre completo" id="name" type="text" />
            <Input title="Profesión" id="profession" type="text" />
            <Input title="Página web" id="webpage" type="text" />
            <Input title="Email" id="mail" type="email" />
            <Input title="Teléfono" id="phone" type="text" />
          </div>
        </div>
        <div>
          <h2 className="font-bold text-xl">Experiencia Laboral</h2>
          <div>
            {this.state.jobs}
            <button onClick={() => this.job()}>Agregar trabajo</button>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-xl">Información Adicional</h2>
          <div>
            <Input title="Descripción personal" id="personal" type="text" />
            <Input
              title="Habilidades (separadas con coma)"
              id="skills"
              type="text"
            />
            {this.state.education}
            <button onClick={() => this.education()}>Agregar estudios</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
