import React from 'react';

import MiSwiper from "../MiSwiper"
import Busqueda from "../Busqueda";
import Card from "../Card";
import CardSlider from "../CardSlider";
import Navbar from "../NavBar";

function Home() {
    return (
    <>
            <Navbar />
            <MiSwiper />
            <Busqueda />
            <Card/>
            <CardSlider/>
    </>
    );
}

export default Home;
