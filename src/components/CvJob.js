import React, { Component } from 'react';

export class CvJob extends Component {
  render() {
    const { place, datestart, dateend, city, country, rol, description } =
      this.props;
    return (
      <div className="flex mt-3 text-sm text-gray-600 tracking-tight border-b-2 pb-2">
        <div className="w-1/2 pr-4">
          <p className="text-base font-bold text-black">{place}</p>
          <p>
            {datestart} - {dateend}
          </p>
          <p>
            {city}, {country}
          </p>
        </div>
        <div className="w-1/2">
          <p className="text-base text-black">{rol}</p>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default CvJob;
