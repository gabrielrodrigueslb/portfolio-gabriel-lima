import { useState, useEffect, useMemo } from "react";
import "./index.scss";

export default function Main() {
  const words = useMemo(
    () => ["Programador", "UX/UI Designer", "Web Designer", "Freelancer"],
    []
  );

  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0); // Índice da palavra atual
  const [charIndex, setCharIndex] = useState(0); // Índice do caractere atual
  const [isDeleting, setIsDeleting] = useState(false); // Controla se está apagando

  const typeSpeed = 100; // Velocidade da digitação (ms)
  const deleteSpeed = 50; // Velocidade de apagar (ms)
  const delayBetweenWords = 1500; // Tempo de pausa entre palavras (ms)

  useEffect(() => {
    const currentWord = words[index]; // Palavra atual

    const visibleText = isDeleting
      ? currentWord.substring(0, charIndex)
      : currentWord.substring(0, charIndex + 1);

    setCurrentText(visibleText);

    if (!isDeleting && charIndex === currentWord.length) {
      const timeout = setTimeout(() => setIsDeleting(true), delayBetweenWords);
      return () => clearTimeout(timeout);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }

    const timeout = setTimeout(() => {
      setCharIndex((prevCharIndex) =>
        isDeleting ? prevCharIndex - 1 : prevCharIndex + 1
      );
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index, words]);

  return (
    <main className="hero-bg" id="hero">
      <div className="hero container">
        <div className="main animated fadeInLeft">
          <p className="code">&lt;Olá, meu nome é&gt;</p>
          <h1>Gabriel Lima</h1>
          <div className="digitacao">
            <span className="texto first-text">Seu</span>
            <span className="texto sec-text">{currentText}</span>
            <span className="cursor">|</span>
          </div>
          <p className="main-text">
            Construindo interfaces digitais com foco na simplicidade, design e
            funcionalidade, criando conexões entre pessoas e tecnologia.
          </p>
          <div className="redes">
            <ul className="redes-btn">
              <li>
                <a
                  href="https://www.linkedin.com/in/gabriel-eduardo-52218a27b/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="logo"
                    src="./img/icons/linkedin.svg"
                    alt="Logo Linkedin"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/gabrielrodrigueslb"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="logo"
                    src="img/icons/github.svg"
                    alt="Logo Github"
                  />
                </a>
              </li>
            </ul>
            <a
              className="redes-cv"
              href="src/Curriculo Gabriel Eduardo.pdf"
              download="Curriculo Gabriel Eduardo.pdf"
            >
              Download CV
            </a>
          </div>
        </div>
        <picture>
          <img
            className="avatar"
            src="img/fotos/gabriel2.png"
            alt="Avatar Gabriel"
          />
        </picture>
      </div>
    </main>
  );
}
