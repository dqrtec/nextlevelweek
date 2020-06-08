import React from 'react';

import logo from "./organico.svg";
import './style.css';
import Header from '../Header';
import {Link} from 'react-router-dom';

const Home = () =>{
    return (
        <div id="page-home">
            <Header />
            <div className="content">
            <div className="parte">
                    <h1>
                        E-coleta serve para voce
                    </h1>
                    <p>
                        Marque aqui seu ponto de coleta
                    </p>
                    <Link to="/cadastrar">
                        <span>
                            >
                        </span>
                        <strong>
                            Cadastre um ponto de coleta
                        </strong>
                    </Link>
            </div>
            <div className="parte">
                <img width="350" src="https://cdn.ome.lt/legacy/images/galerias/Batima-Feira-da-Fruta/Agora-e-Tarde-Danilo-Gentili-Batima-Feira-da-Fruta-01.JPG" />
            </div>
            </div>
        </div>
    )
}

export default Home;