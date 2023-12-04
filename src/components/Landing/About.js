import React, { Component } from 'react';
import aboutPhoto from '../../img/about-photo.jpg';
import social from '../../img/social.svg';

export class About extends Component {
  render() {
    return (
      <section className="flex flex-col lg:flex-row lg:items-center lg:justify-center lg:gap-16 px-4 py-16 lg:py-24 lg:mt-40 gap-5 container lg:max-w-6xl">
        <img
          className="max-w-lg aspect-square object-cover shadow-2xl rounded-lg"
          src={aboutPhoto}
          alt=""
        />
        <div className="flex flex-col gap-5">
          <div className="flex justify-start p-3 bg-indigo-900 rounded-lg w-fit">
            <img className="w-5 shadow" src={social} alt="" />
          </div>
          <h2 className="text-slate-900 font-bold text-3xl lg:text-4xl">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-slate-700 leading-6 font-light lg:text-xl">
            En CV Design contamos con un equipo de diseñadores expertos y nos
            aseguramos de estar siempre en contacto con reclutadores para saber
            qué se busca en cada momento. Nuestras plantillas son examinadas y
            corregidas hasta garantizar la perfección.
          </p>
          <div className="flex gap-6 lg:mt-10 bg-indigo-50 w-fit p-4 rounded-lg">
            <div className="flex flex-col">
              <p className="text-lg text-slate-700 lg:text-xl">
                Plantillas editables
              </p>
              <p className="text-indigo-900 font-bold text-3xl lg:text-4xl">
                100%
              </p>
              <p className="text-lg text-slate-700 lg:text-xl">Gratuitas</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
