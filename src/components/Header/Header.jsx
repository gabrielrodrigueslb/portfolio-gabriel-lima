import { useEffect, useState } from "react";
import "./index.scss";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);

  // Adiciona a classe ao header ao rolar a página
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    // Limpa o evento ao desmontar o componente
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Função para alternar o menu hamburguer
  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  // Fecha o menu quando um item é clicado
  const handleMenuItemClick = () => {
    setIsMenuActive(false);
  };

  return (
    <header className={`header-bg ${isScrolled ? "rolagem" : ""}`} id="header">
      <div className={`header container ${isMenuActive ? "active" : ""}`}>
        <div className={`navbar ${isMenuActive ? "active" : ""}`}>
          <a href="#hero">
            <img src="/img/icons/Lima.svg" alt="Logo Lima" />
          </a>
          <span
            className={`hamburguer ${isMenuActive ? "active" : ""}`}
            onClick={toggleMenu}
          ></span>
          <nav className={`nav ${isMenuActive ? "active" : ""}`}>
            <ul className="menu">
              <li>
                <a href="#sobre" onClick={handleMenuItemClick}>
                  Sobre mim
                </a>
              </li>
              <li>
                <a href="#servicos" onClick={handleMenuItemClick}>
                  Serviços
                </a>
              </li>
              <li>
                <a href="#projetos" onClick={handleMenuItemClick}>
                  Projetos
                </a>
              </li>
              <li>
                <a href="#contato" onClick={handleMenuItemClick}>
                  Contato
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
