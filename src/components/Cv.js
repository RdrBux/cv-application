import React, { Component } from 'react';
import CvEd from './CvEd';
import CvJob from './CvJob';
import CvCourse from './CvCourse';
import Phone from '../img/phone.svg';
import Mail from '../img/mail.svg';
import Web from '../img/web.svg';
import Linkedin from '../img/linkedin.svg';

export class Cv extends Component {
  render() {
    const { personal, extra, jobs, courses, education, color } =
      this.props.state;

    const imgSrc =
      personal.picture.length > 0
        ? URL.createObjectURL(personal.picture[0])
        : null;

    return (
      <div className="relative font-inter text-black p-10 border grid grid-cols-3 w-[792px] h-[1120px]">
        <div
          className="absolute top-0 left-0 w-[275px] h-full"
          style={{ backgroundColor: `${color}` }}
        ></div>
        <div className="z-10 flex flex-col justify-between">
          <div>
            <div className="font-bold text-4xl leading-9 border-b-4 border-gray-400 pb-3 h-24 flex flex-col justify-end pr-4">
              {personal.picture.length === 0 ? (
                <h1 className="">{personal.name || 'Nombre Apellido'}</h1>
              ) : (
                <img
                  className="w-24 h-24 object-cover rounded-full"
                  src={imgSrc}
                  alt=""
                />
              )}
            </div>
            {personal.picture.length > 0 && (
              <div className="font-bold text-4xl h-24">
                <h1 className="pt-2">{personal.name || 'Nombre Apellido'}</h1>
              </div>
            )}
            <div className="pr-4">
              <h2 className="border-b-2 border-black pb-2 font-semibold text-3xl mt-14">
                sobre mí
              </h2>
              <p className="text-sm mt-3 text-gray-600">
                {extra.personal ||
                  'Descripción de intereses personales, capacidades, motivaciones e información sobre qué le puedes aportar a la empresa.'}
              </p>
            </div>
            <div className="pr-4">
              <h2 className="border-b-2 border-black pb-2 font-semibold text-3xl mt-10">
                educación
              </h2>
              {education.map((ed) => (
                <CvEd
                  key={ed.id}
                  yearstart={ed.yearstart}
                  yearend={ed.yearend}
                  career={ed.career}
                  college={ed.college}
                />
              ))}
            </div>
            <div className="pr-4">
              <h2 className="border-b-2 border-black pb-2 font-semibold text-3xl mt-10">
                habilidades
              </h2>
              <p className="text-base mt-3 pr-4">{extra.skills}</p>
            </div>
          </div>
          <div className="border-t-4 border-gray-400 text-xs pt-2">
            <p>{personal.webpage || personal.name || 'Nombre Apellido'}</p>
          </div>
        </div>
        <div className="z-10 col-span-2 flex flex-col justify-between">
          <div>
            <div className="flex justify-between">
              <div className="font-bold text-base leading-3 border-b-4 border-gray-400 pb-3 h-24 w-full flex flex-col justify-end px-3">
                <p className="">{personal.profession || 'Profesión'}</p>
              </div>
              <div className="border-b-4 border-gray-400 pb-3 h-24 flex flex-col gap-2 justify-end text-xs leading-[0.88em] pl-3">
                {personal.webpage && (
                  <div className="flex items-center gap-1">
                    <img src={Web} alt="" width={'10px'} />
                    {personal.webpage}
                  </div>
                )}
                <div className="flex items-center gap-1">
                  <img src={Mail} alt="" width={'10px'} />
                  {personal.mail || 'usuario@mail.com'}
                </div>
                {personal.phone && (
                  <div className="flex items-center gap-1">
                    <img src={Phone} alt="" width={'10px'} />
                    {personal.phone}
                  </div>
                )}
                {personal.linkedin && (
                  <div className="flex items-center gap-1">
                    <img src={Linkedin} alt="" width={'10px'} />
                    {personal.linkedin}
                  </div>
                )}
              </div>
            </div>
            <div className="pl-3">
              {' '}
              {/* EXTRA mt-20 */}
              <h2
                className={`border-b-2 border-black pb-2 font-semibold text-3xl ${
                  personal.picture.length > 0 ? 'mt-10' : 'mt-14'
                }`}
              >
                experiencia laboral
              </h2>
              {jobs.map((job) => (
                <CvJob
                  key={job.id}
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
            <div className="pl-3 mt-4">
              <h2 className="border-b-2 border-black pb-2 font-semibold text-3xl mt-14">
                formación adicional
              </h2>
              {courses.map((course) => (
                <CvCourse
                  key={course.id}
                  institute={course.institute}
                  datestart={course.datestart}
                  dateend={course.dateend}
                  city={course.city}
                  country={course.country}
                  title={course.title}
                  description={course.description}
                />
              ))}
            </div>
          </div>
          <div className="border-t-4 border-gray-400 text-xs pt-2 flex">
            <p className="w-1/2">{personal.mail || 'usuario@mail.com'}</p>
            {personal.linkedin && (
              <p className="w-1/2 flex items-center gap-1 ml-10">
                <img src={Linkedin} alt="" width={10} /> {personal.linkedin}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Cv;
