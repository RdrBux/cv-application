import React, { Component } from 'react';

export class Blog extends Component {
  render() {
    return (
      <section className="px-4 py-16 lg:py-24 container lg:max-w-6xl">
        <h2 className="text-slate-900 font-bold text-3xl lg:text-4xl lg:w-1/2">
          Consejos en la elaboración de tu{' '}
          <span className="text-indigo-700">Curriculum Vitae</span>
        </h2>
        <div className="flex flex-col gap-5 mt-5 lg:mt-10 text-slate-700 text-sm lg:text-lg lg:w-3/4">
          <p>
            <strong>Sé breve y directo,</strong> considera colocar solo la
            información relevante para el puesto y nunca excedas una página.
          </p>
          <p>
            <strong>Demuestra resultados con números e indicadores,</strong> de
            este modo se puede demostrar de forma más precisa las actividades
            realizadas en trabajos anteriores. Aclaración, no se recomienda el
            uso de valores numéricos o porcentuales para indicar la capacidad en
            habilidades que no tengan un método objetivo para ser calificadas.
          </p>
          <p>
            <strong>Observa habilidades y palabras claves</strong> que busquen
            las empresas a las que deseas postularte, las mismas suelen ser
            usadas por el personal de Recursos Humanos como guía y también son
            consideradas por softwares automatizados.
          </p>
          <p>
            <strong>Redes sociales,</strong> la red social más popular en el
            mundo laboral es Linkedin, por ello se recomienda colocarla. Las
            otras solo en situaciones particulares y si no poseen contenido que
            pueda considerarse ofensivo o inapropiado.
          </p>
          <p>
            <strong>Sobre el uso de fotos,</strong> su recomendación varía
            regionalmente, en países como Estados Unidos no es recomendado
            emplear fotos en el CV y, en cambio, en muchos de Europa y América
            Latina se acostumbra a colocarlas.
          </p>
          <p>
            <strong>Usa autocorrector,</strong> escribe o copia y pega todo el
            texto en alguna aplicación con autocorrector para evitar errores
            ortográficos.
          </p>
          <p>
            <strong>Utiliza una buena plantilla,</strong> en $$NOMBRE$$ dispones
            de plantillas profesionales de diversos tipos, todas diseñadas
            detalladamente para garantizar los mejores resultados.
          </p>
        </div>
      </section>
    );
  }
}

export default Blog;
