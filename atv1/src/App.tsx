import './App.css'
import {Routes, Route} from '../node_modules/react-router-dom'
import {Home} from './pages/Home'
import {About} from './pages/About'
import {Ods} from './pages/Ods'
import bandeira from './img/bandeira-onu.webp'
import {Link} from '../node_modules/react-router-dom'


function App() {

  return (
    <>
    <header>
      <nav>
        <h1>Nações Unidas Brasil</h1>
        <a href='https://brasil.un.org/pt-br/sdgs' target='_blank'><img src={bandeira}></img></a>
        <ul>
          <li><Link to = "/"> Início</Link></li>
          <li><Link to = "Ods">Ods 4</Link></li>
          <li><Link to = "Sobre">Sobre</Link></li>
        </ul>
      </nav>
    </header>
    <hr/>
    <div>
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='Sobre' element={<About/>} />
        <Route path='Ods' element={<Ods/>} />

      </Routes>


    </div>
    <hr/>
    <footer>
      Antônio Guedes da Cruz Neto
    </footer>
    </>


  )
}

export default App
