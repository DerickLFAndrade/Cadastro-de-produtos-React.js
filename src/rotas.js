import React from 'react';
import {BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import CadastroProduto from './views/produtos/cadastro';
import Home from './views/home'
import Navbar from './components/navbar';
import './rotas.css'

function Rotas() {
    return (
          
     

            <Router>
                <Navbar />
                <div className="container">
                    <Routes>
                        <Route element={<Home/>} path="/build/index.html" exact />
                        <Route element={<CadastroProduto />} path="/build/cadastro-produtos" exact />
                    </Routes>
                </div>

            </Router>
      
        
    )
}
export default Rotas;