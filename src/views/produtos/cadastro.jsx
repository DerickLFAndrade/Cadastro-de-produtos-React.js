import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
export default function CadastroProduto () {
    let [nome, setNome] = useState("");
    let [SKU, setSKU] = useState("");
    let [descricao, setDescricao] = useState("");
    let [preco, setPreco] = useState("");
    let [fornecedor, setFornecedor] = useState("");
    const chamar = (e) => {
        const valor = e.target.valor;
        const nomeCampo = e.target.name;
        setDescricao = e.target.value;
    }
 
    return (
        <>
        <div className="card">
        <div className="card-header">
            <h4>Cadastro de Produtos</h4>
        </div>
        <div className="card-body">

            <div className="row">

                <div className="col-md-6">
                    <div className="form-group">
                        <label>Nome:*</label>
                        <input type="text" className="form-control" onChange={chamar} name={nome} />
                    </div>
                    </div>

                        <div className="col-md-6">
                            <div className="form-group">
                                <label>SKU: *</label>
                                <input type="text" className="form-control" name={SKU} onChange={chamar}/>
                            </div>
                        </div>
                </div>

                    <div className="row" style={{ marginTop: '10px' }}>

                    <div className="col-md-12">
                        <div className="form-group">
                            <label>Descrição:</label>
                                <textarea className="form-control" name={descricao} onChange={chamar}/>
                        </div>
                    </div>
                </div>

                    <div className="row" style={{ marginTop: '10px' }}>

                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Preço:*</label>
                                <input type="text" className="form-control" name={preco} onChange={chamar}/>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Fornecedor: *</label>
                                <input type="text" className="form-control" name={fornecedor} onChange={chamar} />
                        </div>
                    </div>
                </div>

                    <div className="row" style={{ marginTop: '10px' }}>
                    <div className="col-md-1">
                        <button className="btn btn-success" onClick={onsubmit}>Salvar</button>
                    </div>
                    <div className="col-md-1"  >
                        <button className="btn btn-primary">Limpar</button>
                    </div>
                </div>

            </div>

            </div>
        </>
    )
}