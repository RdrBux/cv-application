import React, { Component } from 'react';
import Education from './Education';
import Input from './Input';
import Job from './Job';
import { nanoid } from 'nanoid';
import ReactToPrint from 'react-to-print';
import Cv from './Cv';

export class Form extends Component {
  constructor() {
    super();
    this.state = {
      jobs: [<Job key={nanoid()} />],
      education: [<Education key={nanoid()} />],
      personal: {
        name: '',
        profession: '',
        webpage: '',
        mail: '',
        phone: '',
      },
      extra: {
        personal: '',
        skills: '',
      },
    };
  }

  job() {
    this.setState({
      jobs: this.state.jobs.concat(<Job key={nanoid()} />),
    });
  }

  education() {
    this.setState({
      education: this.state.education.concat(<Education key={nanoid()} />),
    });
  }

  handleChangePersonal(e) {
    this.setState({
      personal: { ...this.state.personal, [e.target.id]: e.target.value },
    });
  }

  handleChangeExtra(e) {
    this.setState({
      extra: { ...this.state.extra, [e.target.id]: e.target.value },
    });
  }

  render() {
    return (
      <div>
        <div>
          <h2 className="font-bold text-xl">Datos personales</h2>
          <div>
            <Input
              title="Nombre completo"
              id="name"
              type="text"
              value={this.state.personal.name}
              onChange={(e) => this.handleChangePersonal(e)}
            />
            <Input
              title="Profesión"
              id="profession"
              type="text"
              value={this.state.personal.profession}
              onChange={(e) => this.handleChangePersonal(e)}
            />
            <Input
              title="Página web"
              id="webpage"
              type="text"
              value={this.state.personal.webpage}
              onChange={(e) => this.handleChangePersonal(e)}
            />
            <Input
              title="Email"
              id="mail"
              type="email"
              value={this.state.personal.mail}
              onChange={(e) => this.handleChangePersonal(e)}
            />
            <Input
              title="Teléfono"
              id="phone"
              type="text"
              value={this.state.personal.phone}
              onChange={(e) => this.handleChangePersonal(e)}
            />
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
            <Input
              title="Descripción personal"
              id="personal"
              type="text"
              value={this.state.extra.personal}
              onChange={(e) => this.handleChangeExtra(e)}
            />
            <Input
              title="Habilidades (separadas con coma)"
              id="skills"
              type="text"
              value={this.state.extra.skills}
              onChange={(e) => this.handleChangeExtra(e)}
            />
            {this.state.education}
            <button onClick={() => this.education()}>Agregar estudios</button>
          </div>
        </div>
        <div>
          <ReactToPrint
            trigger={() => {
              return <button>Print this out!</button>;
            }}
            content={() => this.componentRef}
          />
          <Cv state={this.state} ref={(el) => (this.componentRef = el)} />
        </div>
      </div>
    );
  }
}

export default Form;
