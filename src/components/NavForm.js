import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Nav extends Component {
  render() {
    const { template, changeTemplate } = this.props;

    return (
      <nav className="fixed top-0 w-full z-50 filter backdrop-blur-sm bg-indigo-900/90 h-16 px-4 shadow-lg mb-4">
        <React.Fragment>
          <div className="flex justify-between items-center h-full container lg:max-w-6xl">
            <Link to="/">
              <div className="font-semibold text-xl text-slate-100">
                CV Design
              </div>
            </Link>

            <label className="text-white font-bold">
              Plantilla:{' '}
              <select
                value={template}
                onChange={changeTemplate}
                className="bg-indigo-900 font-normal px-2 py-1 border-2 border-indigo-100 rounded-full ring-0 outline-none"
              >
                <option value="swiss">Suiza</option>
                <option value="american">Americana</option>
              </select>
            </label>
          </div>
        </React.Fragment>
      </nav>
    );
  }
}

export default Nav;
