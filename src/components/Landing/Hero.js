import React, { Component } from 'react';

export class Hero extends Component {
  render() {
    return (
      <div className="relative bg-slate-200 w-full">
        <div className="absolute bg-indigo-900 z-10 w-1/2 lg:w-1/3 h-96 lg:h-screen rounded-bl-full right-0"></div>
        <div className="flex flex-col container lg:max-w-6xl items-center relative">
          <img
            className=" z-20 lg:absolute lg:right-0"
            src="./img/hero-cv.png"
            alt="CV Example."
            width="500"
          />
        </div>
        <div className="w-full">
          <div className="pb-7 flex flex-col items-center">
            <div className="px-4 flex flex-col items-center container lg:items-start gap-3 lg:max-w-6xl lg:pt-16 lg:pb-4">
              <div className="flex gap-1">
                <img className="w-5" src="./img/star.svg" alt="star" />
                <img className="w-5" src="./img/star.svg" alt="star" />
                <img className="w-5" src="./img/star.svg" alt="star" />
                <img className="w-5" src="./img/star.svg" alt="star" />
                <img className="w-5" src="./img/star.svg" alt="star" />
              </div>
              <p className="text-center lg:text-left text-slate-700 max-w-md font-medium">
                “Con $$NAME$$ logré hacer mi CV en minutos desde el celular y
                conseguí mi primera entrevista en un día.”
              </p>
              <p className="text-center text-xs lg:text-sm text-slate-500">
                <span className="text-indigo-800">— María Martínez</span>,
                estudiante de Lic. en Comunicación
              </p>
            </div>
          </div>
          <div className="px-4 py-6 lg:py-20 flex flex-col items-center bg-white">
            <div className="px-4 container lg:max-w-6xl flex flex-col gap-6">
              <h1 className="text-4xl lg:text-5xl lg:max-w-xl font-bold text-slate-900 leading-10">
                Construye tu próximo CV profesional en cinco minutos
              </h1>
              <p className="font-light text-slate-700 lg:text-xl lg:max-w-xl">
                En $$NAME$$ nos aseguramos de crear plantillas profesionales
                para que tu Curriculum Vitae destaque sobre toda la competencia.
              </p>
              <div className="flex gap-3">
                <button className="px-4 py-3 bg-indigo-900 font-bold text-sm lg:text-base text-white rounded-lg shadow hover:bg-indigo-700">
                  Crea tu CV
                </button>
                <button className="px-4 py-3 text-indigo-900 font-bold text-sm lg:text-base bg-white rounded-lg border border-indigo-900 shadow hover:bg-slate-200">
                  <a href="#newsletter">Plantillas Premium</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
