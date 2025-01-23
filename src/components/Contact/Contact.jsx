import './index.scss'

export default function Contact() {
  return (
    <aside className="contato-bg" id="contato">
        <div className="contato container">
            <div className="contato-meios">
                <img className="foto" src="img/fotos/foto-gabriel.jpeg" alt="Gabriel Lima"/>
                <div className="contato-redes">
                    <a href="https://www.linkedin.com/in/gabrielrodrigueslb" target="_blank">
                        <img src="img/icons/linkedin.svg" alt="Logo LinkedIn"/>
                    </a>
                    <a href="https://github.com/gabrielrodrigueslb" target="_blank">
                        <img src="img/icons/github.svg" alt="Logo GitHub"/>
                    </a>
                    <a href="https://wa.me/5531989899622" target="_blank">
                        <img src="img/icons/whatsapp.svg" alt="Logo WhatsApp"/>
                    </a>
                </div>

                <div className="contatos">
                    <a href="tel:+5531989899622">
                        <img src="./img/icons/telefone.svg" alt="Telefone"/>
                        <p>+55 31 98989-9622</p>
                    </a>
                </div>
                <div className="contatos">
                    <a href="mailto:bieleduardo06@gmail.com">
                        <img src="./img/icons/email.svg" alt="E-mail"/>
                        <p>bieleduardo06@gmail.com</p>
                    </a>
                </div>

            </div>
            <div className="contato-conversa">
                <h2>Vamos Conversar!</h2>
                <p>Pronto para transformar suas ideias em realidade? Entre em contato e vamos criar algo incrível juntos!</p>
                <a href="https://api.whatsapp.com/send/?phone=%2B5531989899622&text=Ol%C3%A1%2C+gostaria+de+fazer+um+or%C3%A7amento%21&type=phone_number&app_absent=0" target="_blank">Enviar Mensagem &gt;</a>
            </div>
        </div>
    </aside>
  )
}
