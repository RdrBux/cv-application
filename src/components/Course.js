import React, { Component } from 'react';
import Input from './Input';
import Textarea from './Textarea';

export class Course extends Component {
  render() {
    const {
      remove,
      handleChange,
      institute,
      title,
      description,
      datestart,
      dateend,
      city,
      country,
    } = this.props;
    return (
      <div className="border rounded-lg p-4 mt-4">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-xl text-slate-900">
            Curso / Capacitación
          </h3>
          <button
            className="font-mono px-3 py-1 rounded-lg flex items-center justify-center hover:bg-slate-100 text-slate-500"
            onClick={remove}
          >
            X
          </button>
        </div>
        <Input
          title="Institución"
          id="institute"
          type="text"
          value={institute}
          onChange={handleChange}
        />
        <Input
          title="Título"
          id="title"
          type="text"
          value={title}
          onChange={handleChange}
        />
        <Textarea
          title="Descripción de aprendizajes"
          id="description"
          value={description}
          onChange={handleChange}
        />
        <Input
          title="Fecha de Inicio"
          id="datestart"
          type="text"
          value={datestart}
          onChange={handleChange}
        />
        <Input
          title="Fecha de Finalización"
          id="dateend"
          type="text"
          value={dateend}
          onChange={handleChange}
        />
        <Input
          title="Ciudad"
          id="city"
          type="text"
          value={city}
          onChange={handleChange}
        />
        <Input
          title="País"
          id="country"
          type="text"
          value={country}
          onChange={handleChange}
        />
      </div>
    );
  }
}

export default Course;
