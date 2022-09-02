import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Nav extends Component {
  render() {
    return (
      <nav className="bg-indigo-800 h-16 px-4 shadow-lg mb-4">
        <React.Fragment>
          <div className="flex justify-between items-center h-full container lg:max-w-6xl">
            <Link to="/">
              <div className="font-semibold text-xl text-slate-100">
                CV Design
              </div>
            </Link>
            <div className="text-white font-semibold">
              Plantilla:{' '}
              <button className="border-2 px-2 py-1 rounded-full font-normal">
                Suiza, grises
              </button>
            </div>
          </div>
        </React.Fragment>
      </nav>
    );
  }
}

export default Nav;
