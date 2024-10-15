import React from 'react';

import './Estilos/Carf.css';
import {Link} from "react-router-dom";

const Card = () => {
    return (
        <div className="card" >
            <h2>Nuestros Servicios</h2>
            <div className="card-container">
                <div className="card-body">
                    <img src="Img/cargas.png"/>
                    <div className="card-text">
                        <h3>Premier</h3>
                        <p>Comodida y confort</p>
                    </div>
                </div>

                <div className="card-body">
                    <img src="Img/cargas.png"/>
                    <div className="card-text">
                        <h3>Economico</h3>
                        <p>Comodida y confort</p>
                    </div>
                </div>

                <div className="card-body">
                    <img src="Img/cargas.png"/>
                    <div className="card-text">
                        <h3>Ejecutivo</h3>
                        <p>Comodida y confort</p>
                    </div>
                </div>
            </div>

            <Link to="/Services"> Ver nuestros servicios </Link>

        </div>
    )
}

export default Card;