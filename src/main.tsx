import React from 'react'
import ReactDOM from 'react-dom/client'

// componentes
import Header from "./Components/Header"
import Home from "./Pages/Home/"
import ListaServicos from "./Pages/listaServicos"
import ListaDevs from "./Pages/ListaDevs"
import Footer from "./Components/Footer"

// estilização global
import "./index.css";

// Rotas
import { BrowserRouter, Routes, Route} from "react-router-dom"


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <BrowserRouter> {/* Indica que a aplicação terá rotas*/}
    <Header/>
    <Routes> {/* Indica uma lista rotas*/}
    <Route path='/' element={<Home />} />{/* Indica o caminho do componente e o nome da rota dele*/}
    <Route path='lista/servicos' element={<ListaServicos />} />{/* Indica o caminho do componente e o nome da rota dele*/}
    <Route path='lista/devs' element={<ListaDevs />} />{/* Indica o caminho do componente e o nome da rota dele*/}
    </Routes>
    <Footer/>
    </BrowserRouter>
    </React.StrictMode>,
)
