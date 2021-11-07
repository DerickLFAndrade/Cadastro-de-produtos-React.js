import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Store Register</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarColor02">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/index.html">Página Principal
                                    <span className="visually-hidden">(current)</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Produtos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Preços</a>
                            </li>
                        </ul>
                       
                    </div>
                </div>
            </nav>


        </>
    )
  }

  