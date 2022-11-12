import React, { Component } from 'react';

export class CvCourse extends Component {
  render() {
    const { institute, datestart, dateend, city, country, title, description } =
      this.props;
    return (
      <div className="flex mt-3 text-sm text-gray-600 border-b-2 pb-2">
        <div className="w-1/2 pr-4">
          <p className="text-base font-bold text-black">{institute}</p>
          <p>
            {datestart} - {dateend}
          </p>
          <p>
            {city}, {country}
          </p>
        </div>
        <div className="w-1/2">
          <p className="text-base text-black">{title}</p>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default CvCourse;
