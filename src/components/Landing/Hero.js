import React, { Component } from 'react';

export class Hero extends Component {
  render() {
    return (
      <div className="flex flex-col">
        <div className="pb-7 flex flex-col items-center bg-slate-200 relative">
          <div className="absolute z-0 bg-indigo-900 w-1/2 h-96  rounded-bl-full self-end"></div>
          <img
            className="w-72 z-10"
            src="./img/hero-cv.png"
            alt="CV Example."
          />
          <div className="px-4 flex flex-col items-center gap-3 z-10">
            <div className="flex gap-1">
              <img className="w-5" src="./img/star.svg" alt="star" />
              <img className="w-5" src="./img/star.svg" alt="star" />
              <img className="w-5" src="./img/star.svg" alt="star" />
              <img className="w-5" src="./img/star.svg" alt="star" />
              <img className="w-5" src="./img/star.svg" alt="star" />
            </div>
            <p className="text-center text-slate-700 font-medium">
              “Con $$NAME$$ logré hacer mi CV en minutos desde el celular y
              conseguí mi primera entrevista en un día.”
            </p>
            <p className="text-center text-xs text-slate-500">
              <span className="text-indigo-800">— María Martínez</span>,
              estudiante de Lic. en Comunicación
            </p>
          </div>
        </div>
        <div className="px-4 py-6 flex flex-col gap-6">
          <h1 className="text-4xl font-bold text-slate-900 leading-10">
            Construye tu próximo CV profesional en cinco minutos
          </h1>
          <p className="font-light text-slate-700">
            En $$NAME$$ nos aseguramos de crear plantillas profesionales para
            que tu Curriculum Vitae destaque sobre toda la competencia.
          </p>
          <div className="flex gap-3">
            <button className="px-4 py-3 bg-indigo-900 font-bold text-sm text-white rounded-lg">
              Crea tu CV
            </button>
            <button className="px-4 py-3 text-indigo-900 font-bold text-sm bg-white rounded-lg border border-indigo-900">
              Plantillas Premium
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
