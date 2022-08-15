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
      active: 'personal',
      jobs: [],
      education: [],
      personal: {
        name: '',
        profession: '',
        webpage: '',
        mail: '',
        phone: '',
        linkedin: '',
      },
      extra: {
        personal: '',
        skills: '',
      },
    };
  }

  job() {
    const newID = nanoid();
    this.setState({
      jobs: this.state.jobs.concat(
        <Job key={newID} id={newID} remove={() => this.removeJob(newID)} />
      ),
    });
  }

  removeJob(id) {
    this.setState({
      jobs: this.state.jobs.filter((job) => job.props.id !== id),
    });
  }

  education() {
    const newID = nanoid();
    this.setState({
      education: this.state.education.concat(
        <Education
          key={newID}
          id={newID}
          remove={() => this.removeEducation(newID)}
        />
      ),
    });
  }

  removeEducation(id) {
    this.setState({
      education: this.state.education.filter((ed) => ed.props.id !== id),
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

  changePanel(side) {
    const sections = ['personal', 'laboral', 'extra'];
    const index = sections.indexOf(this.state.active);
    if (side === 'left') {
      if (index === 0) {
        return sections[0];
      }
      return sections[index - 1];
    }
    if (side === 'right') {
      if (index === 2) {
        return sections[2];
      }
      return sections[index + 1];
    }
  }

  render() {
    return (
      <div className="p-4 container lg:max-w-7xl lg:flex">
        <div className="lg:w-1/2">
          <div className="border p-4 flex justify-center rounded-lg text-slate-700 mb-8">
            <button
              className={
                this.state.active === 'personal'
                  ? 'p-2 border-b-4 border-indigo-700 text-indigo-700'
                  : 'p-2 border-b-2'
              }
              onClick={() => this.setState({ active: 'personal' })}
            >
              Información personal
            </button>
            <button
              className={
                this.state.active === 'laboral'
                  ? 'p-2 border-b-4 border-indigo-700 text-indigo-700'
                  : 'p-2 border-b-2'
              }
              onClick={() => this.setState({ active: 'laboral' })}
            >
              Experiencia laboral
            </button>
            <button
              className={
                this.state.active === 'extra'
                  ? 'p-2 border-b-4 border-indigo-700 text-indigo-700'
                  : 'p-2 border-b-2'
              }
              onClick={() => this.setState({ active: 'extra' })}
            >
              Información adicional
            </button>
          </div>
          <div className="px-4">
            <div
              className={this.state.active === 'personal' ? 'block' : 'hidden'}
            >
              <h2 className="font-bold text-2xl text-slate-900">
                Información personal
              </h2>
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
                <Input
                  title="Linkedin"
                  id="linkedin"
                  type="text"
                  value={this.state.personal.linkedin}
                  onChange={(e) => this.handleChangePersonal(e)}
                />
              </div>
            </div>
            <div
              className={this.state.active === 'laboral' ? 'block' : 'hidden'}
            >
              <h2 className="font-bold text-2xl text-slate-900">
                Experiencia Laboral
              </h2>
              <div>
                {this.state.jobs}
                <button
                  className="p-4 rounded-lg mt-4 text-sm font-semibold text-indigo-700 bg-indigo-100 shadow hover:bg-indigo-200"
                  onClick={() => this.job()}
                >
                  {this.state.jobs.length === 0
                    ? 'Agregar trabajo'
                    : 'Agregar otro trabajo'}
                </button>
              </div>
            </div>
            <div className={this.state.active === 'extra' ? 'block' : 'hidden'}>
              <h2 className="font-bold text-2xl text-slate-900">
                Información Adicional
              </h2>
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
                <button
                  className="p-4 rounded-lg mt-4 text-sm font-semibold text-indigo-700 bg-indigo-100 shadow hover:bg-indigo-200"
                  onClick={() => this.education()}
                >
                  {this.state.education.length === 0
                    ? 'Agregar estudios'
                    : 'Agregar otros estudios'}
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center text-xl text-slate-700 mt-4">
            <button
              className="px-4 py-2 border-2 rounded-l-lg hover:bg-slate-100"
              onClick={() =>
                this.setState({ active: this.changePanel('left') })
              }
            >
              {'<'}
            </button>
            <button
              className="px-4 py-2 border-2 rounded-r-lg hover:bg-slate-100"
              onClick={() =>
                this.setState({ active: this.changePanel('right') })
              }
            >
              {'>'}
            </button>
          </div>
        </div>
        <div className="lg:w-1/2">
          <Cv state={this.state} ref={(el) => (this.componentRef = el)} />
          <ReactToPrint
            trigger={() => {
              return (
                <button className="ml-4 p-4 rounded-lg mt-4 text-sm font-semibold text-white bg-indigo-700 shadow hover:bg-indigo-900">
                  Descargar CV
                </button>
              );
            }}
            content={() => this.componentRef}
          />
        </div>
      </div>
    );
  }
}

export default Form;
