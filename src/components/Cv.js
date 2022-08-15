import React, { Component } from 'react';

export class Cv extends Component {
  render() {
    const { personal, extra, jobs, education } = this.props.state;
    const jobsList = jobs.map((job) => {
      return (
        <div>
          <p>{job.place}</p>
          <p>{job.rol}</p>
          <p>{job.description}</p>
          <p>{job.datestart}</p>
          <p>{job.dateend}</p>
          <p>{job.city}</p>
          <p>{job.country}</p>
        </div>
      );
    });

    const edList = education.map((ed) => {
      return (
        <div>
          <p>{ed.college}</p>
          <p>{ed.career}</p>
          <p>{ed.yearstart}</p>
          <p>{ed.yearend}</p>
        </div>
      );
    });
    return (
      <div className="p-4">
        <div>
          <p className="font-bold">Personal</p>
          <div>{personal.name || 'name'}</div>
          <div>{personal.profession || 'profession'}</div>
          <div>{personal.webpage || 'webpage'}</div>
          <div>{personal.mail || 'mail'}</div>
          <div>{personal.phone || 'phone'}</div>
          <div>{personal.linkedin || 'linkedin'}</div>
        </div>
        <div>
          <p className="font-bold">Extra</p>
          <div>{extra.personal || 'about me'}</div>
          <div>{extra.skills || 'skills'}</div>
        </div>
        <div>
          <p className="font-bold">Jobs</p>
          {jobsList}
        </div>
        <div>
          <p className="font-bold">Education</p>
          {edList}
        </div>
      </div>
    );
  }
}

export default Cv;
