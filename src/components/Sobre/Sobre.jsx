import './index.scss'

export default function Sobre() {
  return (
    <section className="sobre-bg" id="sobre">
        <div className="sobre container">
            <div className="sobre-texto">
                <h2>Sobre mim</h2>
                <p>Sou um desenvolvedor dedicado a criar experiências digitais modernas e funcionais. Trabalho com um conjunto de tecnologias como <span className="html">HTML</span>, <span className="css">CSS</span>, <span className="javascript">JavaScript</span>, <span className="react">React</span> e <span className="bootstrap">Bootstrap</span>, sempre com o objetivo de desenvolver interfaces intuitivas e responsivas. Gosto de transformar ideias em soluções práticas e inovadoras, buscando constante aprendizado e aprimoramento em cada projeto.
                </p>
            </div>
            <img src="./img/fotos/ti.svg" alt="Computador"/>
        </div>
    </section>
  )
}
