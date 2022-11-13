import React, { Component } from 'react';
import Job from './Job';
import Course from './Course';
import Education from './Education';
import Input from './Input';
import { nanoid } from 'nanoid';
import ReactToPrint from 'react-to-print';
import Cv from './Cv';
import Textarea from './Textarea';
import NavForm from './NavForm';
import AmericanCv from './AmericanCv';

export class Form extends Component {
  constructor() {
    super();
    this.state = {
      template: 'american',
      color: '#F3F4F6',
      active: 'personal',
      jobs: [],
      education: [],
      courses: [],
      personal: {
        name: '',
        profession: '',
        webpage: '',
        mail: '',
        phone: '',
        linkedin: '',
        picture: '',
      },
      extra: {
        personal: '',
        skills: '',
      },
    };

    this.changeTemplate = this.changeTemplate.bind(this);
  }

  job() {
    const newID = nanoid();
    this.setState({
      jobs: this.state.jobs.concat({
        id: newID,
        place: '',
        rol: '',
        description: '',
        datestart: '',
        dateend: '',
        city: '',
        country: '',
      }),
    });
  }

  renderJobs() {
    const jobsList = this.state.jobs.map((job) => (
      <Job
        key={job.id}
        remove={() => this.removeJob(job.id)}
        handleChange={(e) => this.handleChangeJob(e, job.id)}
        id={job.id}
        place={job.place}
        rol={job.rol}
        description={job.description}
        datestart={job.datestart}
        dateend={job.dateend}
        city={job.city}
        country={job.country}
      />
    ));
    return jobsList;
  }

  removeJob(id) {
    this.setState({
      jobs: this.state.jobs.filter((job) => job.id !== id),
    });
  }

  handleChangeJob(e, id) {
    this.setState({
      jobs: this.state.jobs.map((job) =>
        job.id === id ? { ...job, [e.target.id]: e.target.value } : { ...job }
      ),
    });
  }

  course() {
    const newID = nanoid();
    this.setState({
      courses: this.state.courses.concat({
        id: newID,
        institute: '',
        title: '',
        description: '',
        datestart: '',
        dateend: '',
        city: '',
        country: '',
      }),
    });
  }

  renderCourses() {
    const coursesList = this.state.courses.map((course) => (
      <Course
        key={course.id}
        remove={() => this.removeCourse(course.id)}
        handleChange={(e) => this.handleChangeCourse(e, course.id)}
        id={course.id}
        institute={course.institute}
        title={course.title}
        description={course.description}
        datestart={course.datestart}
        dateend={course.dateend}
        city={course.city}
        country={course.country}
      />
    ));
    return coursesList;
  }

  removeCourse(id) {
    this.setState({
      courses: this.state.courses.filter((course) => course.id !== id),
    });
  }

  handleChangeCourse(e, id) {
    this.setState({
      courses: this.state.courses.map((course) =>
        course.id === id
          ? { ...course, [e.target.id]: e.target.value }
          : { ...course }
      ),
    });
  }

  education() {
    const newID = nanoid();
    this.setState({
      education: this.state.education.concat({
        id: newID,
        college: '',
        career: '',
        yearstart: 2015,
        yearend: 2022,
      }),
    });
  }

  renderEducation() {
    const educationList = this.state.education.map((ed) => (
      <Education
        key={ed.id}
        remove={() => this.removeEducation(ed.id)}
        handleChange={(e) => this.handleChangeEd(e, ed.id)}
        id={ed.id}
        college={ed.college}
        career={ed.career}
        yearstart={ed.yearstart}
        yearend={ed.yearend}
      />
    ));
    return educationList;
  }

  removeEducation(id) {
    this.setState({
      education: this.state.education.filter((ed) => ed.id !== id),
    });
  }

  handleChangeEd(e, id) {
    this.setState({
      education: this.state.education.map((ed) =>
        ed.id === id ? { ...ed, [e.target.id]: e.target.value } : { ...ed }
      ),
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

  handleColorChange(e) {
    this.setState({ color: e.target.value });
  }

  changeTemplate(e) {
    this.setState({ template: e.target.value });
  }

  changePanel(side) {
    const sections = ['personal', 'laboral', 'extra'];
    const index = sections.indexOf(this.state.active);
    if (side === 'left') {
      if (index === 0) {
        return sections[0];
      }
      window.scrollTo(0, 0);
      return sections[index - 1];
    }
    if (side === 'right') {
      if (index === 2) {
        return sections[2];
      }
      window.scrollTo(0, 0);
      return sections[index + 1];
    }
  }

  render() {
    return (
      <>
        <NavForm
          template={this.state.template}
          changeTemplate={this.changeTemplate}
        />
        <div className="container p-4 lg:max-w-6xl lg:flex pt-20">
          <div className="lg:w-1/2">
            <div className="border p-4 flex justify-center rounded-lg text-slate-700 mb-8">
              <button
                className={
                  this.state.active === 'personal'
                    ? 'p-2 border-b-4 border-indigo-700 text-indigo-700'
                    : 'p-2 border-b-2 hover:border-b-4 duration-200'
                }
                onClick={() => this.setState({ active: 'personal' })}
              >
                Información personal
              </button>
              <button
                className={
                  this.state.active === 'laboral'
                    ? 'p-2 border-b-4 border-indigo-700 text-indigo-700'
                    : 'p-2 border-b-2 hover:border-b-4 duration-200'
                }
                onClick={() => this.setState({ active: 'laboral' })}
              >
                Experiencia laboral
              </button>
              <button
                className={
                  this.state.active === 'extra'
                    ? 'p-2 border-b-4 border-indigo-700 text-indigo-700'
                    : 'p-2 border-b-2 hover:border-b-4 duration-200'
                }
                onClick={() => this.setState({ active: 'extra' })}
              >
                Información adicional
              </button>
            </div>
            <div className="px-4">
              <div
                className={
                  this.state.active === 'personal' ? 'block' : 'hidden'
                }
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
                    title="Página web (opcional)"
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
                    title="Teléfono (opcional)"
                    id="phone"
                    type="text"
                    value={this.state.personal.phone}
                    onChange={(e) => this.handleChangePersonal(e)}
                  />
                  <Input
                    title="Linkedin (opcional)"
                    id="linkedin"
                    type="text"
                    value={this.state.personal.linkedin}
                    onChange={(e) => this.handleChangePersonal(e)}
                  />
                  <Input
                    title="Foto (opcional)"
                    id="picture"
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                      this.setState({
                        personal: {
                          ...this.state.personal,
                          [e.target.id]: e.target.files,
                        },
                      })
                    }
                  />
                </div>
              </div>
              <div
                className={this.state.active === 'laboral' ? 'block' : 'hidden'}
              >
                <h2 className="font-bold text-2xl text-slate-900">
                  Experiencia laboral
                </h2>
                <div>
                  {this.renderJobs()}
                  <button
                    className="p-4 rounded-lg mt-4 text-sm font-semibold text-indigo-700 bg-indigo-100 hover:bg-indigo-200 duration-200"
                    onClick={() => this.job()}
                  >
                    {this.state.jobs.length === 0
                      ? 'Agregar trabajo'
                      : 'Agregar otro trabajo'}
                  </button>
                </div>
                <h2 className="font-bold text-2xl text-slate-900 mt-10">
                  Formación adicional
                </h2>
                <div>
                  {this.renderCourses()}
                  <button
                    className="p-4 rounded-lg mt-4 text-sm font-semibold text-indigo-700 bg-indigo-100 hover:bg-indigo-200 duration-200"
                    onClick={() => this.course()}
                  >
                    {this.state.courses.length === 0
                      ? 'Agregar curso'
                      : 'Agregar otros cursos'}
                  </button>
                </div>
              </div>
              <div
                className={this.state.active === 'extra' ? 'block' : 'hidden'}
              >
                <h2 className="font-bold text-2xl text-slate-900">
                  Información adicional
                </h2>
                <div>
                  <Textarea
                    title="Descripción personal"
                    id="personal"
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
                  {this.renderEducation()}
                  <button
                    className="p-4 rounded-lg mt-4 text-sm font-semibold text-indigo-700 bg-indigo-100 hover:bg-indigo-200 duration-200"
                    onClick={() => this.education()}
                  >
                    {this.state.education.length === 0
                      ? 'Agregar estudios'
                      : 'Agregar otros estudios'}
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-center text-xl text-slate-700 my-4">
              <button
                className="px-4 py-2 border-2 rounded-l-lg hover:bg-slate-100 duration-100"
                onClick={() =>
                  this.setState({ active: this.changePanel('left') })
                }
              >
                {'<'}
              </button>
              <button
                className="px-4 py-2 border-2 rounded-r-lg hover:bg-slate-100 duration-100"
                onClick={() =>
                  this.setState({ active: this.changePanel('right') })
                }
              >
                {'>'}
              </button>
            </div>
          </div>
          <div className="lg:pl-16 lg:w-1/2 lg:px-4 max-h-screen">
            <div className="mt-16 -mb-8 lg:my-10 font-bold text-2xl text-slate-900">
              Vista previa
              <div>
                <label className="text-base font-medium">
                  COLOR:{' '}
                  <select
                    className="px-3 py-1 rounded mt-4 ml-2 bg-gray-200"
                    value={this.state.color}
                    onChange={(e) => this.handleColorChange(e)}
                  >
                    <option value="#FFFFFF">Ninguno</option>
                    <option value="#F3F4F6">Gris</option>
                    <option value="#FEE2E2">Rojo</option>
                    <option value="#FED7AA">Naranja</option>
                    <option value="#FEF08A">Amarillo</option>
                    <option value="#BBF7D0">Verde</option>
                    <option value="#BAE6FD">Celeste</option>
                    <option value="#BFDBFE">Azul</option>
                    <option value="#DDD6FE">Violeta</option>
                    <option value="#FBCFE8">Rosa</option>
                  </select>
                </label>
              </div>
            </div>
            <div className="scale-[40%] lg:scale-50 -translate-x-1/4 -translate-y-1/4">
              {this.state.template === 'swiss' ? (
                <Cv state={this.state} ref={(el) => (this.componentRef = el)} />
              ) : (
                <AmericanCv
                  state={this.state}
                  ref={(el) => (this.componentRef = el)}
                />
              )}
              <ReactToPrint
                trigger={() => {
                  return (
                    <button className="ml-10 mb-6 p-10 rounded-lg mt-10 text-4xl font-semibold text-white bg-indigo-700 shadow-2xl hover:bg-indigo-900 duration-200">
                      Descargar
                    </button>
                  );
                }}
                content={() => this.componentRef}
              />
              <p className="pl-10 pt-3 text-slate-800 text-3xl pb-10 w-[800px]">
                <span className="font-semibold">ACLARACIÓN:</span> Selecciona el
                tamaño de hoja A4 luego de presionar el botón de descarga.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Form;
