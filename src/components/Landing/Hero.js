import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import star from '../../img/star.svg';
import heroCv from '../../img/hero-cv.png';

export class Hero extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <div className="relative bg-slate-100 w-full pt-20">
        <div className="top-0 absolute bg-indigo-900 z-10 w-1/2 lg:w-1/3 h-96 lg:h-screen rounded-bl-full right-0"></div>
        <div className="flex flex-col container lg:max-w-6xl items-center relative px-8 py-12 lg:pt-2">
          <img
            className=" z-20 lg:absolute lg:right-0 shadow-2xl w-72 lg:w-1/3"
            src={heroCv}
            alt="CV Example."
          />
        </div>
        <div className="w-full">
          <div className="pb-7 flex flex-col items-center">
            <div className="px-4 flex flex-col items-center container lg:items-start gap-3 lg:max-w-6xl lg:pt-2 lg:pb-4">
              <div className="flex gap-1">
                <img className="w-5" src={star} alt="star" />
                <img className="w-5" src={star} alt="star" />
                <img className="w-5" src={star} alt="star" />
                <img className="w-5" src={star} alt="star" />
                <img className="w-5" src={star} alt="star" />
              </div>
              <p className="text-center lg:text-left text-slate-700 max-w-md font-medium">
                “Con CV Design logré hacer mi Curriculum Vitae en minutos desde
                el celular y conseguí mi primera entrevista en un día.”
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
                En CV Design nos aseguramos de crear plantillas profesionales
                para que tu Curriculum Vitae destaque sobre toda la competencia.
              </p>
              <div className="flex gap-3">
                <Link to="/form">
                  <button
                    className="flex items-center gap-1 px-10 py-3 bg-indigo-700 font-bold text-sm lg:text-base text-white rounded-lg shadow-2xl hover:bg-indigo-900 duration-200"
                    onClick={onClick}
                  >
                    Crea tu CV{' '}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 stroke-[3]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                      />
                    </svg>
                  </button>
                </Link>
                {/* <a href="#newsletter">
                  <button className="px-5 py-3 text-indigo-700 font-bold text-sm lg:text-base bg-white rounded-lg border border-indigo-700 shadow hover:bg-slate-100 duration-200">
                    Plantillas Premium
                  </button>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
