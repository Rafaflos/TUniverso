import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Estilos/Busqueda.css';
import {Link} from "react-router-dom";

const Busqueda = () => {
    // Estados para los inputs
    const [originCity, setOriginCity] = useState('');
    const [destinationCity, setDestinationCity] = useState('');
    const [departureDate, setDepartureDate] = useState(null);
    const [returnDate, setReturnDate] = useState(null);

    const handleSearch = (e) => {
        e.preventDefault();
        console.log({
            originCity,
            destinationCity,
            departureDate,
            returnDate,
        });
    };

    return (
        <form className="search-form" onSubmit={handleSearch}>
            <div className="form-group">
                <select
                    value={originCity}
                    onChange={(e) => setOriginCity(e.target.value)}
                >
                    <option value="">Ciudad de Salida</option>
                    <option value="Lima">Lima</option>
                    <option value="Arequipa">Arequipa</option>
                    <option value="Cusco">Cusco</option>
                    <option value="Trujillo">Trujillo</option>
                </select>
            </div>
            <div className="form-group">
                <select
                    value={destinationCity}
                    onChange={(e) => setDestinationCity(e.target.value)}
                >
                    <option value="">Ciudad de destino</option>
                    <option value="Lima">Lima</option>
                    <option value="Arequipa">Arequipa</option>
                    <option value="Cusco">Cusco</option>
                    <option value="Trujillo">Trujillo</option>
                </select>
            </div>
            <div className="form-group">
                <DatePicker
                    selected={departureDate}
                    onChange={(date) => setDepartureDate(date)}
                    placeholderText="Ida"
                />
            </div>
            <div className="form-group">
                <DatePicker
                    selected={returnDate}
                    onChange={(date) => setReturnDate(date)}
                    placeholderText="Vuelta"
                />
            </div>
            <Link to="/compra" type="submit" className="search-btn"> Buscar </Link>
        </form>
    );
};

export default Busqueda;
