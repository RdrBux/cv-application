import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Nav extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <nav className="sticky top-0 z-50 bg-slate-100 h-16 px-4 backdrop-filter backdrop-blur-lg bg-opacity-40 border-b border-slate-300">
        <React.Fragment>
          <div className="flex justify-between items-center h-full container lg:max-w-6xl">
            <div className="font-semibold text-xl text-slate-900">
              CV Design
            </div>
            <Link to="/form">
              <button
                className="bg-slate-900 hover:bg-slate-700 duration-200 text-slate-100 px-4 py-2 font-bold rounded-lg text-sm"
                onClick={onClick}
              >
                Creador de CV
              </button>
            </Link>
          </div>
        </React.Fragment>
      </nav>
    );
  }
}

export default Nav;
