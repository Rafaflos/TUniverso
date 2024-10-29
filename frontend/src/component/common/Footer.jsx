import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

const FooterContainer = styled.footer`
  background-color: #dfdad5;
  padding: 2rem 0;
  text-align: center;

  border-top: 1px solid #e7e7e7;
`;

const FooterSections = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8em;
  margin-bottom: 0.5rem;
`;

const FooterNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const StyledLink = styled(Link)`
  color: #333;
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1rem;
`;

const SocialIcon = styled.a`
  font-size: 1.5rem;
  color: #333;

  &:hover {
    color: #007bff;
  }
`;

const Copyright = styled.p`
  font-size: 0.875rem;
  color: #6c757d;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSections>
        <FooterNav>
          <StyledLink to="/home"> Home </StyledLink>
          <StyledLink to="/about">About Us</StyledLink>
          <StyledLink to="/login">Login</StyledLink>
        </FooterNav>
        <FooterNav>
          <StyledLink to="/services">Services</StyledLink>
          <StyledLink to="/contact">Contact</StyledLink>
        </FooterNav>

        <FooterNav>
          <StyledLink to="/commission"> Encomienda </StyledLink>
          <StyledLink to="/viaje">Cláusula de Viaje</StyledLink>
        </FooterNav>
        <FooterNav>
          <StyledLink to="/equipaje">Info para tu viaje</StyledLink>
          <StyledLink to="/preguntas">Preguntas Frecuentes</StyledLink>
          <StyledLink to="/dashboard">Dashboard</StyledLink>

        </FooterNav>
      </FooterSections>

      <SocialLinks>
        <SocialIcon
          href="https://www.facebook.com/turismobusuniverso?mibextid=ZbWKwL"
          aria-label="Facebook"
        >
          <i className="fab fa-facebook"></i>
        </SocialIcon>
        <SocialIcon href="https://wa.me/51999333419" aria-label="WhatsApp">
          <i className="fab fa-whatsapp"></i>
        </SocialIcon>
        <SocialIcon
          href="https://www.instagram.com/turismouniversooficial"
          aria-label="Instagram"
        >
          <i className="fab fa-instagram"></i>
        </SocialIcon>
        <SocialIcon
          href="https://www.tiktok.com/@busuniversooficial?_t=8lqusxuytx3&_r=1"
          aria-label="TikTok"
        >
          <i className="fab fa-tiktok"></i>
        </SocialIcon>
      </SocialLinks>
      <Copyright>
        &copy; {new Date().getFullYear()} Movilbus. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
