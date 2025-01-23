/* eslint-disable react/prop-types */
import './index.scss';

export default function DesktopCard(props) {

  return (
    <div id="projeto-desktop">
      <div className="projeto-cartao">
        <div className="cartao-texto">
          <img src={props.marca} alt={props.title} />
          <div className="projeto-tecnologias">
          {props.tech.map((techIcon, index) => (
              <img key={index} src={techIcon} alt={`Tech ${index}`} />
            ))}
          </div>
          <p >{props.desc}</p>
          <div className="projeto-btns">
            <a className="btn preview" href={props.project} target="_blank">
              Ver Projeto
            </a>
            <a className="btn repositorio" href={props.repos} target="_blank">
              &lt;Repositório/&gt;
            </a>
          </div>
        </div>
        <picture>
          <img src={props.mockupDesktop} alt={props.title} />
        </picture>
      </div>
    </div>
  );
}
