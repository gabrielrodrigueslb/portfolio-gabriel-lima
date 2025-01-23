
import './App.css'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Portifolio from './components/Portifolio/Portifolio'
import Servicos from './components/Servicos/Servicos'
import Sobre from './components/Sobre/Sobre'
import Tecnologias from './components/Tecnologias/Tecnologias'

function App() {
 

  return (
    <>
      <Header/>
      <Main/>
      <Tecnologias/>
      <Sobre/>
      <Servicos/>
      <Portifolio/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
