import React from "react";
import "./Presentacion.css";

function Presentacion(props) {
  function addScrollHandle() {
    window.addEventListener("scroll", handleScroll);
  }

  function handleScroll() {
    const bottomCircle = document.querySelector('.circulo_2 ');
    const topCircle = document.querySelector(`.circulo_1`);
    const title = document.querySelector(`.texto_titulo`);
    const text = document.querySelector(`.texto_eslogan`);
    let amountScrolled = window.pageYOffset;

    topCircle.style.animationFillMode = `unset`;
    topCircle.style.transform = `translateX(${amountScrolled / 4}px)`;
    bottomCircle.style.animationFillMode = `unset`;
    bottomCircle.style.transform = `translateX(-${amountScrolled / 8}px)`;
    title.style.opacity = "1";
    title.style.animationFillMode = `unset`;
    title.style.transform = `translateX(-${amountScrolled / 6}px)`;
    text.style.animationFillMode = `unset`;
    text.style.opacity = "1";
    text.style.transform = `translateX(${amountScrolled / 6}px)`;
  }

  return (
    <section className="contendor_main flex items-center justify-center flex-wrap min-h-screen p-[1.5rem] md:transition-all">
      <div>
        {props.nombre && <h1 id="texto_tiutlo" className="texto_titulo text-palido text-center antialiased w-[100%] text-[4.5rem] sm:text-[8.4rem] lg:text-[12rem]">{props.nombre}</h1>}
        {props.eslogan && <h2 id="texto_eslogan" className="texto_eslogan text-secondary text-center antialiased text-[1.9rem] sm:text-[2.2rem] lg:text-[2.6rem] ">{props.eslogan}</h2>}
        <span id="circulo_1" className="circulo_1 block absolute content-none rounded-full w-[15rem] h-[15rem] top-[3rem] right-[-4rem] lg:w-[30rem] lg:h-[30rem] lg:top-[-2rem] lg:right-[-8rem] overflow-hidden"></span>
        <span id="circulo_2" className="circulo_2 block absolute content-none rounded-full w-[30rem] h-[30rem] bottom-[-15rem] left-[-15rem] lg:w-[50rem] lg:h-[50rem] lg:bottom-[-25rem] lg:left-[-25rem]" onAnimationEnd={addScrollHandle}></span>
      </div>
    </section>
  );
}

export default Presentacion;
