import { Component } from 'react';
import Phone from '../img/phone.svg';
import Mail from '../img/mail.svg';
import Web from '../img/web.svg';
import Linkedin from '../img/linkedin.svg';

class AmericanCv extends Component {
  render() {
    const { personal, extra, jobs, courses, education, color } =
      this.props.state;

    return (
      <div className="relative font-inter text-black p-8 border w-[792px] h-[1120px]">
        <div
          style={{ backgroundColor: `${color}` }}
          className="absolute h-[150px] right-0 top-0 left-0"
        ></div>
        <div className="flex flex-col gap-5 z-10 relative">
          <div className="text-center flex flex-col items-center">
            <h1 className="text-4xl font-bold">
              {personal.name || 'Nombre Apellido'}
            </h1>
            <p className="text-gray-700">
              {personal.profession || 'Profesión'}
            </p>
          </div>

          <div className="flex justify-between">
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

            {personal.webpage && (
              <div className="flex items-center gap-1">
                <img src={Web} alt="" width={'10px'} />
                {personal.webpage}
              </div>
            )}
          </div>

          <div className="">
            <h3
              style={{
                borderColor: `${
                  color === '#FFFFFF' || color === '#F3F4F6' ? '#E5E7EB' : color
                }`,
              }}
              className="text-xl font-bold border-b-2 pb-1"
            >
              SOBRE MÍ
            </h3>
            <p className="pt-1">
              {extra.personal ||
                'Descripción de intereses personales, capacidades, motivaciones e información sobre qué le puedes aportar a la empresa.'}
            </p>
          </div>

          {jobs.length > 0 && (
            <div className="">
              <h3
                style={{
                  borderColor: `${
                    color === '#FFFFFF' || color === '#F3F4F6'
                      ? '#E5E7EB'
                      : color
                  }`,
                }}
                className="text-xl font-bold border-b-2 pb-1"
              >
                EXPERIENCIA LABORAL
              </h3>
              <div className="flex flex-col gap-2 my-2">
                {jobs.map((job) => (
                  <div key={job.id} className="">
                    <div className="">
                      <span className="font-bold">{job.place}</span> -{' '}
                      <span className="italic">{job.rol}</span>
                    </div>
                    <div className="flex justify-between">
                      <p>
                        {job.city}, {job.country}
                      </p>
                      <p>
                        {job.datestart} - {job.dateend}
                      </p>
                    </div>
                    <p className="text-gray-700">{job.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {courses.length > 0 && (
            <div className="">
              <h3
                style={{
                  borderColor: `${
                    color === '#FFFFFF' || color === '#F3F4F6'
                      ? '#E5E7EB'
                      : color
                  }`,
                }}
                className="text-xl font-bold border-b-2 pb-1"
              >
                FORMACIÓN ADICIONAL
              </h3>
              <div className="grid grid-cols-2 gap-10 my-2">
                {courses.map((course) => (
                  <div key={course.id} className="">
                    <div className="">
                      <span className="font-bold">{course.institute}</span> -{' '}
                      <span className="italic">{course.title}</span>
                    </div>
                    <div className="flex text-sm gap-1">
                      <p>
                        {course.city}, {course.country}
                      </p>
                      <p>
                        ({course.datestart} - {course.dateend})
                      </p>
                    </div>
                    <p className="text-gray-700 text-sm">
                      {course.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="">
            <h3
              style={{
                borderColor: `${
                  color === '#FFFFFF' || color === '#F3F4F6' ? '#E5E7EB' : color
                }`,
              }}
              className="text-xl font-bold border-b-2 pb-1"
            >
              EDUCACIÓN
            </h3>
            <div className="grid grid-cols-2 gap-x-10 gap-y-2 py-2">
              {education.map((ed) => (
                <div key={ed.id} className="">
                  <p className="text-sm text-gray-700">
                    ({ed.yearstart} - {ed.yearend})
                  </p>
                  <p className="font-bold">{ed.college}</p>
                  <p>{ed.career}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="">
            <h3
              style={{
                borderColor: `${
                  color === '#FFFFFF' || color === '#F3F4F6' ? '#E5E7EB' : color
                }`,
              }}
              className="text-xl font-bold border-b-2 pb-1"
            >
              HABILIDADES
            </h3>
            <p className="pt-1">{extra.skills}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default AmericanCv;
