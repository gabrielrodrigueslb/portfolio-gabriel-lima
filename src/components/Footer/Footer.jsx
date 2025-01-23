import './index.scss'

export default function Footer() {
  return (
    <footer className="footer-bg">
        <div className="footer container">
            <div className="footer-infos">
                <a href="#hero"><img src="img/icons/Lima.svg" alt="Logo lima"/></a>
                <ul className="footer-menu">
                    <li><a href="#sobre">Sobre mim</a></li>
                    <li><a href="#servicos">Serviços</a></li>
                    <li><a href="#projetos">Projetos</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
            </div>
            <p>© 2024 Gabriel Eduardo. Todos os direitos reservados.</p>
        </div>
    </footer>
  )
}
