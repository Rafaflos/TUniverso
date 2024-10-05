import React, { useState } from 'react'
import styled from 'styled-components'
import BurguerButton from './BurguerBotton'

function Navbar() {

    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
        //cuando esta true lo pasa a false y vice versa
        setClicked(!clicked)
    }
    return (
        <>
            <NavContainer>
                <h2>Navbar <span>Responsive</span></h2>
                <div className={`links ${clicked ? 'active' : ''}`}>
                    <a onClick={handleClick} href="#h">Home</a>
                    <a onClick={handleClick} href="#h">Shop</a>
                    <a onClick={handleClick} href="#h">About</a>
                    <a onClick={handleClick} href="#h">Contact</a>
                    <a onClick={handleClick} href="#h">Blog</a>
                    {/*<a onClick={handleClick} href="#h"></a>*/}
                </div>
                <div className='burguer'>
                <BurguerButton clicked={clicked} handleClick={handleClick} />
                </div>
                <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
            </NavContainer>
        </>
    )
}

export default Navbar

const NavContainer = styled.nav`
  h2{
    color: blue;
    font-size: 35px;  
    padding-left: 20px; 
    font-weight: 00;
    span{
      font-weight: bold;
    }
  }  
  padding: .3rem;
  background-color: green;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a{
    color:blue;
    font-size: 3rem;  
    text-decoration: none;
    margin-right: 3rem;
  }
  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    a{
      color: blue;
      font-size: 2rem;
      display: block;
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      a{
        font-size: 1rem;
        color: blue;
        display: inline;
      }
      display: block;
    }
  }
  .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a{
      font-size: 2rem;
      margin-top: 1rem;
      color: blue;
    }
  }
  .burguer{
    @media(min-width: 768px){
      display: none;
    }
  }
`

const BgDiv = styled.div`
  background-color: #222;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .6s ease ;
  
  &.active{
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`