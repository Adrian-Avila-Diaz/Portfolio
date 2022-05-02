import React from 'react';
import Proyecto from './Proyecto';
import ProyectosData from './ProyectosData';
import './Proyectos.css';



function Proyectos(props) {

    const projectsEls = ProyectosData.map(proj => {
        return <Proyecto key={proj.id} titulo={proj.titulo} texto={proj.texto} imagen={proj.imagen} link={proj.link} />
    })

  return (<>
        <section className="proyectos relative w-[100%] px-[2.5%] mx-auto z-100 sm:flex sm:justify-between sm:items-stretch sm:justify-center sm:wrap lg:pl-[12.5%] lg:pr-[12.5%] ">
            {projectsEls}
        </section>
    </>)
}

export default Proyectos