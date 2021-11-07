import React from 'react'
import { Link } from 'react-router-dom'
export default function CadastroProduto () {
    return (
        <>
        <div className="card"></div>
        <div className="card-header">
            Cadastro de Produtos
        </div>
        <div className="card-body">
                <Link to="/index.html">Voltar</Link>
        </div>
        </>
    )
}