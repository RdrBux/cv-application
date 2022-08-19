import React, { Component } from 'react';

export class CvEd extends Component {
  render() {
    const { yearstart, yearend, career, college } = this.props;
    return (
      <div className="font-inter mt-3">
        <p className="text-sm text-gray-600">
          {yearstart} - {yearend}
        </p>
        <p className="text-base font-bold">{college}</p>
        <p className="text-sm text-gray-600">{career}</p>
      </div>
    );
  }
}

export default CvEd;
