import React, { Component } from 'react';
import CvEd from './CvEd';
import CvJob from './CvJob';

export class Cv extends Component {
  render() {
    const { personal, extra, jobs, education } = this.props.state;

    return (
      <div className="font-inter text-black p-10 border grid grid-cols-3 w-[792px] h-[1120px]">
        <div className="flex flex-col justify-between">
          <div>
            <div className="font-bold text-4xl leading-9 border-b-4 pb-3 h-20 flex flex-col justify-end tracking-tighter pr-3">
              <h1 className="">{personal.name || 'Gonzalo González'}</h1>
            </div>
            <div className="pr-3">
              <h2 className="border-b-2 border-black pb-2 font-semibold text-3xl mt-14">
                sobre mí
              </h2>
              <p className="text-sm mt-3 text-gray-600">
                {extra.personal ||
                  'Descripción de intereses personales, capacidades, motivaciones y sobre qué le puedes aportar a la empresa.'}
              </p>
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
              <p className="text-base mt-3 pr-2">{extra.skills}</p>
            </div>
          </div>
          <div className="border-t-4 text-xs pt-2">
            <p>{personal.webpage || personal.name}</p>
          </div>
        </div>
        <div className="col-span-2 flex flex-col justify-between">
          <div>
            <div className="flex justify-between">
              <div className="font-bold text-base leading-3 border-b-4 pb-3 h-20 w-full flex flex-col justify-end px-3">
                <p className="">{personal.profession || 'Web Designer'}</p>
              </div>
              <div className="border-b-4 pb-3 h-20 flex flex-col gap-2 justify-end text-xs leading-[0.88em] tracking-tight pl-3">
                {personal.webpage && (
                  <div className="flex items-center gap-1">
                    <img src="./img/web.svg" alt="" width={'10px'} />
                    {personal.webpage}
                  </div>
                )}
                <div className="flex items-center gap-1">
                  <img src="./img/mail.svg" alt="" width={'10px'} />
                  {personal.mail || 'gonzalez@gmail.com'}
                </div>
                {personal.phone && (
                  <div className="flex items-center gap-1">
                    <img src="./img/phone.svg" alt="" width={'10px'} />
                    {personal.phone}
                  </div>
                )}
                {personal.linkedin && (
                  <div className="flex items-center gap-1">
                    <img src="./img/linkedin.svg" alt="" width={'10px'} />
                    {personal.linkedin}
                  </div>
                )}
              </div>
            </div>
            <div className="pl-3 mt-4">
              <h2 className="border-b-2 border-black pb-2 font-semibold text-3xl mt-14">
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
            <p className="w-1/2">{personal.mail || 'gonzalez@gmail.com'}</p>
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
