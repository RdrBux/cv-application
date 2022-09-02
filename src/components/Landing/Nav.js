import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Nav extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <nav className="sticky top-0 z-50 bg-slate-100 h-16 px-4 backdrop-filter backdrop-blur-lg bg-opacity-40 border-b border-slate-300">
        <React.Fragment>
          <div className="flex justify-between items-center h-full container lg:max-w-6xl">
            <button onClick={() => window.scrollTo(0, 0)}>
              <div className="font-semibold text-xl text-slate-900">
                CV Design
              </div>
            </button>
            <Link to="/form">
              <button
                className="flex items-center gap-1 bg-slate-900 hover:bg-slate-700 duration-200 text-slate-100 px-4 py-2 font-bold rounded-lg text-sm"
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
          </div>
        </React.Fragment>
      </nav>
    );
  }
}

export default Nav;
