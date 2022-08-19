import React, { Component } from 'react';
import CvEd from './CvEd';
import CvJob from './CvJob';

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
      <div className="font-inter text-black p-10 border grid grid-cols-3 w-[792px] h-[1120px]">
        <div className="flex flex-col justify-between">
          <div>
            <div className="font-bold text-4xl leading-8 border-b-4 pb-3 h-20 flex flex-col justify-end tracking-tighter pr-3">
              <h1 className="">{personal.name || 'John Doe'}</h1>
            </div>
            <div className="pr-3">
              <h2 className="border-b-2 border-black pb-2 font-semibold text-3xl mt-10">
                sobre mí
              </h2>
              <p className="text-sm mt-3 text-gray-600">{extra.personal}</p>
            </div>
            <div className="pr-3">
              <h2 className="border-b-2 border-black pb-2 font-semibold text-3xl mt-10">
                educación
              </h2>
              {education.map((ed) => (
                <CvEd
                  yearstart={ed.yearstart}
                  yearend={ed.yearend}
                  career={ed.career}
                  college={ed.college}
                />
              ))}
            </div>
            <div className="pr-3">
              <h2 className="border-b-2 border-black pb-2 font-semibold text-3xl mt-10">
                habilidades
              </h2>
              <p className="text-base mt-3">{extra.skills}</p>
            </div>
          </div>
          <div className="border-t-4 text-xs pt-2">
            <p>{personal.webpage}</p>
          </div>
        </div>
        <div className="col-span-2 flex flex-col justify-between">
          <div>
            <div className="flex justify-between">
              <div className="font-bold text-base leading-3 border-b-4 pb-3 h-20 w-full flex flex-col justify-end px-3">
                <p className="">{personal.profession || 'Web Designer'}</p>
              </div>
              <div className="border-b-4 pb-3 h-20 flex flex-col gap-1 justify-end text-xs leading-[0.88em] tracking-tight pl-3">
                <div>{personal.webpage || 'www.johndoe.com'}</div>
                <div>{personal.mail || 'john.doe@gmail.com'}</div>
                <div>{personal.linkedin || 'John Doe'}</div>
              </div>
            </div>
            <div className="pl-3 mt-4">
              <h2 className="border-b-2 border-black pb-2 font-semibold text-3xl mt-10">
                experiencia laboral
              </h2>
              {jobs.map((job) => (
                <CvJob
                  place={job.place}
                  datestart={job.datestart}
                  dateend={job.dateend}
                  city={job.city}
                  country={job.country}
                  rol={job.rol}
                  description={job.description}
                />
              ))}
            </div>
          </div>
          <div className="border-t-4 text-xs pt-2 flex">
            <p className="w-1/2">{personal.mail}</p>
            <p className="w-1/2">{personal.linkedin}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Cv;
/* 
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
        </div> */
