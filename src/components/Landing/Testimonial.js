import React, { Component } from 'react';

export class Testimonial extends Component {
  render() {
    return (
      <div className="p-4">
        <section className="bg-gradient-to-r from-indigo-700 to-indigo-900 text-white flex flex-col lg:flex-row lg:items-center lg:justify-center lg:gap-16 px-1 lg:p-16 py-8 gap-8 container lg:max-w-6xl rounded-lg shadow-2xl relative">
          <img
            className="absolute opacity-10 top-3 left-10"
            src="./img/quote-start.svg"
            alt=""
          />
          <img
            className="absolute opacity-10 bottom-3 right-10"
            src="./img/quote-end.svg"
            alt=""
          />
          <div className="flex flex-col items-center lg:items-start gap-4 lg:w-10/12 z-10">
            <div className="flex gap-1">
              <img className="w-5" src="./img/star-gold.svg" alt="star" />
              <img className="w-5" src="./img/star-gold.svg" alt="star" />
              <img className="w-5" src="./img/star-gold.svg" alt="star" />
              <img className="w-5" src="./img/star-gold.svg" alt="star" />
              <img className="w-5" src="./img/star-gold.svg" alt="star" />
            </div>
            <p className="text-center lg:text-left font-medium lg:text-lg">
              Usé las plantillas de Word por mucho tiempo hasta que me di cuenta
              que todas las personas que conocía usaban las mismas. Ahora puedo
              presumir mi resumen mucho más atractivo.
            </p>
            <div className="flex gap-2 items-center">
              <img className="w-12" src="./img/avatar1.png" alt="" />
              <p className="text-sm text-slate-400">
                <span className="font-bold text-white">
                  Yolanda Guadalupe García
                </span>
                , Docente
              </p>
            </div>
          </div>
          <div className="h-1 w-full bg-indigo-800 lg:w-1 lg:h-40"></div>
          <div className="flex flex-col items-center lg:items-start gap-4 lg:w-10/12">
            <div className="flex gap-1">
              <img className="w-5" src="./img/star-gold.svg" alt="star" />
              <img className="w-5" src="./img/star-gold.svg" alt="star" />
              <img className="w-5" src="./img/star-gold.svg" alt="star" />
              <img className="w-5" src="./img/star-gold.svg" alt="star" />
              <img className="w-5" src="./img/star-gold.svg" alt="star" />
            </div>
            <p className="text-center lg:text-left font-medium lg:text-lg">
              Ya he entregado más de cinco veces mis cvs de CV Design en persona
              y siempre recibí algún comentario positivo por el diseño.
            </p>
            <div className="flex gap-2 items-center">
              <img className="w-12" src="./img/avatar2.png" alt="" />
              <p className="text-sm text-slate-400">
                <span className="font-bold text-white">Gonzalo Palacios</span>,
                Ing. Industrial
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Testimonial;
