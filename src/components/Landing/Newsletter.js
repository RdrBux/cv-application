import React, { Component } from 'react';

export class Newsletter extends Component {
  render() {
    return (
      <section className="bg-indigo-900 text-white relative" id="newsletter">
        <div className="absolute text-9xl font-black opacity-5 text-indigo-300 right-3">
          PREMIUM
        </div>
        <div className="px-4 py-8 lg:py-24 flex flex-col lg:flex-row lg:items-center lg:gap-12 container lg:max-w-6xl">
          <div>
            <h2 className="font-bold text-3xl lg:text-4xl">
              Plantillas Premium - PROXIMAMENTE
            </h2>
            <p className="leading-6 font-light text-slate-300 lg:text-lg mt-4 lg:mt-6 max-w-2xl">
              Ingresa tu correo electrónico para recibir notificaciones tan
              pronto como se encuentren disponibles nuestras nuevas{' '}
              <span className="font-semibold">Plantillas Premium</span>.
            </p>
            <form className="mt-4 lg:mt-6">
              <label className="font-bold lg:text-xl" htmlFor="email">
                Email
              </label>
              <div className="flex">
                <input
                  className="text-slate-900 p-2 rounded-l-lg bg-indigo-300 w-8/12"
                  type="email"
                  id="email"
                />
                <button className="bg-white text-indigo-900 font-bold px-4 rounded-r-lg hover:bg-indigo-200">
                  ENVIAR
                </button>
              </div>
              <p className="text-xs mt-4 text-indigo-200">
                * $$NAME$$ se compromete a no enviar ningún correo adicional o
                no deseado.
              </p>
            </form>
          </div>
          <div className="mt-10 flex gap-5 overflow-hidden -mr-4">
            <img
              className="w-1/3 lg:w-52"
              src="./img/premium-cv1.svg"
              alt="Premium CV"
            />
            <img
              className="w-1/3 lg:w-52"
              src="./img/premium-cv1.svg"
              alt="Premium CV"
            />
            <img
              className="w-1/3 lg:w-52"
              src="./img/premium-cv1.svg"
              alt="Premium CV"
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Newsletter;
