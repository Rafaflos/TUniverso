import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import MiSwiper from "../MiSwiper"
import Busqueda from "../Busqueda";
import Card from "../Card";
import CardSlider from "../CardSlider";

function Home() {
    return (
    <>
            <h1>Home Page</h1>
            <p>Welcome to the !</p>
            <MiSwiper />
            <Busqueda />
            <Card/>
            <CardSlider/>


    </>
    );
}

export default Home;
