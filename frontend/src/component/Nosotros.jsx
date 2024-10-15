import React from 'react';
import './Nosotros.css'; // Asegúrate de que el archivo CSS esté en la ruta correcta

const Nosotros = () => {
    return (
        <div>
            <header>
                <nav>
                    <div className="nav-bar">
            <span className="logo">
              <a href="Inicio.html">Turismo Universo</a>
            </span>
                        <div className="menu">
                            <ul className="nav-link">
                                <li><a href="Inicio.html">Inicio</a></li>
                                <li><a href="NuestrosServicio.html">Nuestros Servicios</a></li>
                                <li><a href="Nosotros.html">Nosotros</a></li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            <div className="Busqueda">
                <h2>Busca tu destino</h2>
                <div className="form-group">
                    <div className="select-group">
                        <select>
                            <option value="">Destino</option>
                            {/* Opciones aquí */}
                        </select>
                    </div>
                    <div className="date-group">
                        <input type="date" />
                    </div>
                    <button className="buscar-btn">Buscar</button>
                </div>
            </div>

            <section className="sobre_nosotros">
                <div className="header">
                    <img className="bus-image" src="path/to/image.jpg" alt="Descripción de la imagen" />
                    <div className="header-text">
                        <h1>Sobre Nosotros</h1>
                        <p>Descripción breve de la empresa.</p>
                    </div>
                </div>

                <div className="content">
                    <div className="mission">
                        <h2>Misión</h2>
                        <p>Texto sobre la misión de la empresa.</p>
                    </div>
                    <div className="vision">
                        <h2>Visión</h2>
                        <p>Texto sobre la visión de la empresa.</p>
                    </div>
                </div>

                <div className="valores-institucionales">
                    <h2>Valores Institucionales</h2>
                    <div className="valores-icons">
                        {/* Reemplaza las imágenes y texto según sea necesario */}
                        <div className="valor">
                            <img src="path/to/icon1.png" alt="Valor 1" />
                            <p>Valor 1</p>
                        </div>
                        <div className="valor">
                            <img src="path/to/icon2.png" alt="Valor 2" />
                            <p>Valor 2</p>
                        </div>
                        {/* Agrega más valores aquí */}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Nosotros;