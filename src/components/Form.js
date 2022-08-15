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
        /* webpage: '',
        mail: '',
        phone: '', */
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

  handleName(e) {
    this.setState({ personal: { name: e.target.value } });
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
              onChange={(e) => this.handleName(e)}
            />
            <Input
              title="Profesión"
              id="profession"
              type="text"
              value={this.state.personal.profession}
              onChange={({ target }) =>
                this.setState({ personal: { profession: target.value } })
              }
            />
            {/* <Input
              title="Página web"
              id="webpage"
              type="text"
              value={this.props.personal.webpage}
              onChange={({ target }) =>
                this.setState({ personal: { webpage: target.value } })
              }
            />
            <Input
              title="Email"
              id="mail"
              type="email"
              value={this.props.personal.mail}
              onChange={({ target }) =>
                this.setState({ personal: { mail: target.value } })
              }
            />
            <Input
              title="Teléfono"
              id="phone"
              type="text"
              value={this.props.personal.phone}
              onChange={({ target }) =>
                this.setState({ phone: { phone: target.value } })
              }
            /> */}
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
        <div>
          <ReactToPrint
            trigger={() => {
              return <a href="#">Print this out!</a>;
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
