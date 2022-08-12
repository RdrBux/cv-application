import React, { Component } from 'react';

export class About extends Component {
  render() {
    return (
      <section className="flex flex-col lg:flex-row lg:items-center lg:justify-center lg:gap-16 px-4 py-16 lg:py-24 gap-5 container lg:max-w-6xl">
        <img
          className="max-w-lg aspect-square object-cover shadow-2xl rounded-lg"
          src="./img/about-photo.jpg"
          alt=""
        />
        <div className="flex flex-col gap-5">
          <div className="flex justify-start p-3 bg-indigo-900 rounded-lg w-fit">
            <img className="w-5" src="./img/social.svg" alt="" />
          </div>
          <h2 className="text-slate-900 font-bold text-3xl lg:text-4xl">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-slate-700 leading-6 font-light lg:text-xl">
            En $$NAME$$ contamos con un equipo de diseñadores expertos y nos
            aseguramos de estar siempre en contacto con reclutadores para saber
            qué se busca en cada momento. Nuestras plantillas son examinadas y
            corregidas hasta garantizar la perfección.
          </p>
          <div className="flex gap-6 lg:mt-10">
            <div className="flex flex-col">
              <p className="text-indigo-900 font-bold text-3xl lg:text-4xl">
                300+
              </p>
              <p className="text-lg text-slate-700 lg:text-xl">Usuarios</p>
            </div>
            <div className="flex flex-col">
              <p className="text-indigo-900 font-bold text-3xl lg:text-4xl">
                12+
              </p>
              <p className="text-lg text-slate-700 lg:text-xl">Países</p>
            </div>
            <div className="flex flex-col">
              <p className="text-indigo-900 font-bold text-3xl lg:text-4xl">
                98%
              </p>
              <p className="text-lg text-slate-700 lg:text-xl">
                Calificaciones positivas
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
