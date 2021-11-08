import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'
export default function Home() {
    return (
        <>
        
            <div className="container">
                <h1 className="titulo">Bem vindo!</h1>
                <p className="text">Utilize a barra de navegação para acessar as páginas</p>
                <hr className="my-4" />
               
                <p className="lead">
                    <Link className="btn btn-primary btn-dark" to="/build/cadastro-produtos" role="button">Cadastrar</Link>
                </p>
            </div>
        </>
    )
}