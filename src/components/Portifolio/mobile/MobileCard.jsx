/* eslint-disable react/prop-types */
import './index.scss';

export default function MobileCard(props) {
  return (
    <div className="mobile">
      <div className="projeto-ctnr">
        <div className="projeto-card">
          <img
            className="projeto-imagem"
            src={props.mockupMobile}
            alt={props.title}
          />
          <div className="projeto-conteudo">
            <div className="projeto-titulo">
              <img src={props.marca} alt={props.title} />
            </div>

            <div className="projeto-tecnologias">
              {props.tech.map((techIcon, index) => (
                <img key={index} src={techIcon} alt={`Tech ${index}`} />
              ))}
            </div>

            <p>{props.desc}</p>
            <a className="btn1" href={props.project} target="_blank">
              Ver Projeto
            </a>
            <a className="btn2" href={props.repos} target="_blank">
              &lt;Repositório/&gt;
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
