import React, { Component } from 'react';

export class Faq extends Component {
  render() {
    return (
      <section className="px-4 py-16 lg:py-24 container lg:max-w-6xl">
        <h2 className="text-slate-900 font-bold text-3xl lg:text-4xl">
          Preguntas Frecuentes
        </h2>
        <p className="text-slate-700 leading-6 font-light lg:text-xl mt-4 lg:mt-6 max-w-2xl">
          Si tienes cualquier otra consulta no dudes en contactarte con nosotros
          por{' '}
          <span className="font-bold text-indigo-900">correo electrónico</span>.
        </p>
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 mt-4 lg:mt-10 text-slate-900">
          <div className="flex flex-col gap-2  lg:max-w-xs bg-indigo-100 p-4 rounded-lg shadow-md">
            <p className="font-bold">¿El uso de las plantillas es gratuito?</p>
            <p>
              Las plantillas disponibles en el Creador de CV son gratuitas.
              También puede optar por las Plantillas Premium (proximamente), las
              cuales requieren un pago para su uso.
            </p>
          </div>
          <div className="flex flex-col gap-2  lg:max-w-xs bg-indigo-100 p-4 rounded-lg shadow-md">
            <p className="font-bold">
              ¿Cómo creo una plantilla con mi información?
            </p>
            <p>
              Una vez ingresado al Creador de CV, deberás completar el
              formulario con la información requerida en cada sección. Podrás
              obtener una vista previa a medida que completas los datos
            </p>
          </div>
          <div className="flex flex-col gap-2  lg:max-w-xs bg-indigo-100 p-4 rounded-lg shadow-md">
            <p className="font-bold">¿Cómo obtengo el CV?</p>
            <p>
              Tras haber completado todos los datos, podrás descargar tu CV
              personalizado presionando el botón de descarga ubicado por debajo
              del visualizador de CV.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 mt-8 text-slate-900 hidden lg:flex">
          <div className="flex flex-col gap-2  lg:max-w-xs bg-indigo-100 p-4 rounded-lg shadow-md">
            <p className="font-bold">¿En qué formato se obtiene el CV?</p>
            <p>
              Todos los CVs son descargables en formato PDF. Es el formato más
              utilizado y permite que se puedan visualizar desde cualquier
              dispositivo sin modificar la apariencia de los mismos.
            </p>
          </div>
          <div className="flex flex-col gap-2  lg:max-w-xs bg-indigo-100 p-4 rounded-lg shadow-md">
            <p className="font-bold">
              ¿Se puede editar el CV una vez descargado?
            </p>
            <p>
              Por lo general, los archivos PDF son difíciles de editar. Existe
              algunas herramientas online o programas como Adobe Acrobat Pro que
              permiten editarlos. De igual modo, puede volver a crear tu CV si
              quieres corregir algo.
            </p>
          </div>
          <div className="flex flex-col gap-2  lg:max-w-xs bg-indigo-100 p-4 rounded-lg shadow-md">
            <p className="font-bold">
              ¿Almacenan la información de las personas que emplean el servicio?
            </p>
            <p>
              $$NOMBRE$$ no almacena ninguna información de los usuarios en el
              proceso de creación de CVs, lo cual hace que cualquier dato que
              coloques en tu CV sea inaccesible tanto para la empresa como para
              otros usuarios.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Faq;
