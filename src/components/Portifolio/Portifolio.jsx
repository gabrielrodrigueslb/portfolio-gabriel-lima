import DesktopCard from './desktop/DesktopCard';
import MobileCard from './mobile/MobileCard';

import Projects from './services/script';

import './index.scss';

export default function Portifolio() {
  return (
    <section className="projetos-bg" id="projetos">
      <div className="projetos container">
        <div className="projetos-texto">
          <h2>Projetos</h2>
          <p>Explore meu portfólio.</p>
        </div>


        {/* map desktop */}
        {Projects.lenth === 0 ? (
          <p>Carregando...</p>
        ) : (
          Projects.map((projeto) => (
            <DesktopCard
              key={projeto.id}
              marca={projeto.marca}
              title={projeto.title}
              mockupDesktop={projeto.mockupDesktop}
              desc={projeto.desc}
              tech={projeto.tech}
              repos={projeto.repos}
              project={projeto.project}
            />
          ))
        )}

        {/* map mobile */}
        {Projects.lenth === 0 ? (
          <p>Carregando...</p>
        ) : (
          Projects.map((projeto) => (
            <MobileCard
              key={projeto.id}
              marca={projeto.marca}
              title={projeto.title}
              mockupMobile={projeto.mockupMobile}
              desc={projeto.desc}
              tech={projeto.tech}
              repos={projeto.repos}
              project={projeto.project}
            />
          ))
        )}
      </div>
    </section>
  );
}
