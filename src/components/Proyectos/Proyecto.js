import React from "react";
import "./Proyecto.css";

function Proyecto(props) {
  return (
    <a target="_blank" without rel="noreferrer" className="proyecto_card block items-center justify-center block w-full flex-wrap text-palido bg-oscuro rounded-[.6rem] mb-[3rem] overflow-hidden sm:w-[47.5%] sm:mb-[6rem] hover:scale-[.99]" href={props.link}>
      {props.imagen && (<img src={props.imagen} className="proyecto_card_img w-full h-auto border-b-[.3rem] border-secondary overflow-hidden" alt="" />)}
      <div className="proyecto_card_contenido p-[2.4rem] ">
        {props.titulo && <h2 className="proyecto_card_title uppercase text-[2.2rem] leading-[2.6rem] tracking-[.175rem] mb-[.5rem]">{props.titulo}</h2>}
        {props.texto && <p className="proyecto_card_text text-[1.6rem] leading-[2rem] mb-[1.8rem] ">{props.texto}</p>}
        {props.link && <span className="proyecto_card_link text-palido text-[1.6rem] underline decoration-auto">Ver proyecto</span>}
      </div>
    </a>
  );
}

export default Proyecto;
