import './index.scss'

export default function Servicos() {
  return (
    <section className="servicos-bg" id="servicos">
        <div className="servicos container">
            <h2>Serviços</h2>
            <div className="servicos-container">
                <div className="servicos-card">
                    <img src="img/icons/site.svg" alt="Programação"/>
                    <h3>Criação de Sites</h3>
                    <p>Sites modernos, funcionais e pensados para destacar sua marca e facilitar a experiência do
                        usuário.</p>
                </div>
                <div className="servicos-card">
                    <img src="img/icons/landing-page.svg" alt="Landing-page"/>
                    <h3>Criação de Landing Pages</h3>
                    <p>Landing pages otimizadas para conversão, focadas em comunicar seu valor e engajar o público de
                        forma eficaz.</p>
                </div>

                <div className="servicos-card">
                    <img src="img/icons/ui.svg" alt="Ui design"/>
                    <h3>Design de Interfaces</h3>
                    <p>Interfaces intuitivas e visualmente atraentes, com atenção aos detalhes para garantir uma
                        navegação fluida e impactante.</p>
                </div>
            </div>
        </div>
    </section>
  )
}
