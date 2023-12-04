import React, { Component } from 'react';

export class Footer extends Component {
  render() {
    return (
      <footer className="flex flex-col lg:flex-row lg:gap-2 justify-center items-center my-4 text-lg lg:text:xl text-slate-900">
        <p className="">© 2023 CV Design. </p>
        <p className="">Todos los derechos reservados. </p>
        <p className="">
          Diseño por{' '}
          <a className="font-bold" href="https://github.com/RdrBux">
            RdrBux
          </a>
          .
        </p>
      </footer>
    );
  }
}

export default Footer;
