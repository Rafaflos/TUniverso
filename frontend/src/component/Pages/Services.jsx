import React from 'react';
import Navbar from "../NavBar";
import "../Estilos/Services.css"

function Services() {
    return (
        <>
            <Navbar/>

            <section className="panel">
                <img src="/Img/cargas.png" />
            </section>

            <br/>
            <br/>
            <section className="premier-section">
                {/*Primer-Servicio*/}
                <div className="premier-content">
                    <h1>Premier</h1>
                    <h2>Comodidad y confort</h2>
                    <span>___________________________________________________________________</span>
                    <br/>
                    <br/>
                    <p>
                        Sabemos que relajarte en tu viaje es la mejor forma de disfrutarlo, es por ello que en nuestro
                        Servicio Premier está diseñado para que su cuerpo descanse en una posición ideal.<br/><br/>
                        Nuestro bus cuenta con dos niveles con asientos ergonómicos en el 1er nivel cama de 160° y en el
                        2do nivel con asientos full flat 180°. Además, contarás con un puerto usb para tus dispositivos
                        móviles.
                    </p>
                    <br/>
                    <div className="features">
                        <div className="feature-item">
                            <img src="/Img/seguridad.png" alt="Streaming"/>
                            <span>Streaming</span>
                        </div>
                        <div className="feature-item">
                            <img src="/Img/seguridad.png" alt="Asientos 180°"/>
                            <span>Asientos 180°</span>
                        </div>
                        <div className="feature-item">
                            <img src="/Img/seguridad.png" alt="Bus climatizado"/>
                            <span>Bus climatizado</span>
                        </div>

                    </div>
                </div>
                <div className="premier-image">
                    <img src="/Img/cargas.png" alt="Asientos Premier"/>
                </div>
            </section>
            <br/>
            <br/>


            {/*Segundo-Servicio*/}
            <section className="xxxx-section">
                <div className="xxxx-content">
                    <h1>Premier</h1>
                    <h2>Comodidad y confort</h2>
                    <span>___________________________________________________________________</span>
                    <br/>
                    <br/>
                    <p>
                        Sabemos que relajarte en tu viaje es la mejor forma de disfrutarlo, es por ello que en nuestro
                        Servicio Premier está diseñado para que su cuerpo descanse en una posición ideal.<br/><br/>
                        Nuestro bus cuenta con dos niveles con asientos ergonómicos en el 1er nivel cama de 160° y en el
                        2do nivel con asientos full flat 180°. Además, contarás con un puerto usb para tus dispositivos
                        móviles.
                    </p>
                    <br/>
                    <div className="features1">
                        <div className="feature1-item">
                            <img src="/Img/seguridad.png" alt="Streaming"/>
                            <span>Streaming</span>
                        </div>
                        <div className="feature1-item">
                            <img src="/Img/seguridad.png" alt="Asientos 180°"/>
                            <span>Asientos 180°</span>
                        </div>
                        <div className="feature1-item">
                            <img src="/Img/seguridad.png" alt="Bus climatizado"/>
                            <span>Bus climatizado</span>
                        </div>

                    </div>
                </div>
                <div className="premier-image">
                    <img src="/Img/cargas.png" alt="Asientos Premier"/>
                </div>
            </section>
            <br/>
            <br/>

            {/*Tercer-Servicio*/}
            <section className="premier-section">
                <div className="premier-content">
                    <h1>Premier</h1>
                    <h2>Comodidad y confort</h2>
                    <span>___________________________________________________________________</span>
                    <br/>
                    <br/>
                    <p>
                        Sabemos que relajarte en tu viaje es la mejor forma de disfrutarlo, es por ello que en nuestro
                        Servicio Premier está diseñado para que su cuerpo descanse en una posición ideal.<br/><br/>
                        Nuestro bus cuenta con dos niveles con asientos ergonómicos en el 1er nivel cama de 160° y en el
                        2do nivel con asientos full flat 180°. Además, contarás con un puerto usb para tus dispositivos
                        móviles.
                    </p>
                    <br/>
                    <div className="features">
                        <div className="feature-item">
                            <img src="/Img/seguridad.png" alt="Streaming"/>
                            <span>Streaming</span>
                        </div>
                        <div className="feature-item">
                            <img src="/Img/seguridad.png" alt="Asientos 180°"/>
                            <span>Asientos 180°</span>
                        </div>
                        <div className="feature-item">
                            <img src="/Img/seguridad.png" alt="Bus climatizado"/>
                            <span>Bus climatizado</span>
                        </div>

                    </div>
                </div>
                <div className="premier-image">
                    <img src="/Img/cargas.png" alt="Asientos Premier"/>
                </div>
            </section>

        </>
    )
}

export default Services;