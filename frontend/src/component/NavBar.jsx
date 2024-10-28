import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import BurguerButton from "./BurguerBotton";

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const [username, setUsername] = useState(localStorage.getItem("username") || "");

  // Manejar clics del menú hamburguesa
  const handleClick = () => {
    setClicked(false);
  };

  // Manejar evento de scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup al desmontar
    };
  }, []);

  // Función de cerrar sesión
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setUsername(""); // Actualiza el estado para ocultar el nombre
    navigate("/login");
  };

  return (
      <NavContainer isScrolled={isScrolled}>
        <h2>
          <span>Turismo</span> <span>Universo</span>
        </h2>
        <div className={`links ${clicked ? "active" : ""}`}>
          <Link onClick={handleClick} to="/home">
            Inicio
          </Link>
          <Link onClick={handleClick} to="/about">
            Nosotros
          </Link>
          <Link onClick={handleClick} to="/services">
            Servicios
          </Link>
          <Link onClick={handleClick} to="/contact">
            Contactanos
          </Link>
          {username ? (
              <>
                <span>Bienvenido, {username}</span>
                <button onClick={handleLogout} className="logout-button">Cerrar Sesión</button>
              </>
          ) : (
              <Link onClick={handleClick} to="/login">
                Login
              </Link>
          )}
        </div>
        <div className="burguer">
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? " active" : ""}`}></BgDiv>
      </NavContainer>
  );
}

export default Navbar;

// Estilos del navbar
const NavContainer = styled.nav`
  position: sticky;
  top: 0;
  width: auto;
  height: 60px;
  padding: 0.3rem;
  background-color: ${({ isScrolled }) =>
      isScrolled ? "rgba(69, 219, 130, 0.9)" : "rgb(69,219,130)"};
  box-shadow: ${({ isScrolled }) =>
      isScrolled ? "0 4px 10px rgba(0, 0, 0, 0.1)" : "none"};
  transition:
      background-color 0.3s ease,
      box-shadow 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;

  h2 {
    color: white;
    font-size: 30px;
    padding-left: 20px;
    font-weight: 400;

    span {
      font-weight: bold;
    }
  }

  a {
    color: white;
    font-size: 1.5rem;
    text-decoration: none;
    margin-right: 1.5rem;
  }

  .links {
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all 0.5s ease;

    a {
      color: black;
      font-size: 2rem;
      display: block;
    }

    @media (min-width: 768px) {
      position: initial;
      margin: 0;
      z-index: 1100;
      a {
        font-size: 1rem;
        color: white;
        display: inline;
      }

      display: block;
    }
  }

  .links.active {
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    z-index: 1200;
    text-align: center;

    a {
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
  }

  .burguer {
    @media (min-width: 768px) {
      display: none;
    }
  }

  .logout-button {
    background: none;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    margin-left: 1.5rem;
    text-decoration: underline;
  }
`;

const BgDiv = styled.div`
  background-color: black;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all 0.6s ease;

  &.active {
    border-radius: 0 0 80% 0;
    z-index: 1099;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
