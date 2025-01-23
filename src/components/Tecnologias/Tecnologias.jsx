import { useEffect, useRef } from "react";
import "./index.scss";

export default function Tecnologias() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    let scrollAmount = 0;

    const scroll = () => {
      if (carousel) {
        scrollAmount += 1; // Incremento da rolagem
        if (scrollAmount >= carousel.scrollWidth / 2) {
          scrollAmount = 0; // Reinicia a rolagem quando chega ao fim
        }
        carousel.scrollTo({ left: scrollAmount, behavior: "smooth" });
      }
    };

    const interval = setInterval(scroll, 20); // Velocidade do carrossel

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, []);

  return (
    <section className="tecnologias-bg">
      <div className="tecnologias container animated fadeInUp">
        <div className="tecnologias-texto">
          <h2>Tecnologias</h2>
          <p>Abaixo estão algumas das tecnologias e ferramentas que utilizo.</p>
        </div>
        <div className="carousel-container" ref={carouselRef}>
          <ul className="tecnologias-icon">
            <li>
              <img src="./img/icons/html.svg" alt="Icone HTML" />
            </li>
            <li>
              <img src="./img/icons/css.svg" alt="Icone CSS" />
            </li>
            <li>
              <img src="./img/icons/javascript.svg" alt="Icone JavaScript" />
            </li>
            <li>
              <img src="./img/icons/figma.svg" alt="Icone Figma" />
            </li>
            <li>
              <img src="./img/icons/github-tc.svg" alt="Icone GitHub" />
            </li>
            <li>
              <img src="./img/icons/git.svg" alt="Icone Git" />
            </li>
            <li>
              <img src="./img/icons/react.svg" alt="Icone React" />
            </li>
            <li>
              <img
                src="./img/icons/bootstrap-brands-solid.svg"
                alt="Icone Bootstrap"
              />
            </li>
            <li>
              <img
                src="./img/icons/sass.svg"
                alt="Icone sass"
              />
            </li>
            {/* Duplicando os itens para o carrossel infinito */}
            <li>
              <img src="./img/icons/html.svg" alt="Icone HTML" />
            </li>
            <li>
              <img src="./img/icons/css.svg" alt="Icone CSS" />
            </li>
            <li>
              <img src="./img/icons/javascript.svg" alt="Icone JavaScript" />
            </li>
            <li>
              <img src="./img/icons/figma.svg" alt="Icone Figma" />
            </li>
            <li>
              <img src="./img/icons/github-tc.svg" alt="Icone GitHub" />
            </li>
            <li>
              <img src="./img/icons/git.svg" alt="Icone Git" />
            </li>
            <li>
              <img src="./img/icons/react.svg" alt="Icone React" />
            </li>
            <li>
              <img
                src="./img/icons/bootstrap-brands-solid.svg"
                alt="Icone Bootstrap"
              />
            </li>
            <li>
              <img
                src="./img/icons/sass.svg"
                alt="Icone sass"
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
