import React, { Component } from 'react';

export class Cv extends Component {
  render() {
    const { personal, extra } = this.props.state;
    return (
      <div>
        Cv
        <div>{personal.name || 'name'}</div>
        <div>{personal.profession || 'profession'}</div>
        <div>{personal.webpage || 'webpage'}</div>
        <div>{personal.mail || 'mail'}</div>
        <div>{personal.phone || 'phone'}</div>
      </div>
    );
  }
}

export default Cv;
