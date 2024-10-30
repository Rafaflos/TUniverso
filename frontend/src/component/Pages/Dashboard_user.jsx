import React from 'react';

import MiSwiper from "../MiSwiper"
import Busqueda from "../Busqueda";
import Card from "../Card";
import CardSlider from "../CardSlider";
import Navbar from "../NavBar";
import Footer from "../common/Footer";

function Home() {
    return (
        <>
            <Navbar />
            <MiSwiper />
            <Busqueda />
            <Card/>
            <CardSlider/>
            <Footer/>

        </>
    );
}

export default Home;
