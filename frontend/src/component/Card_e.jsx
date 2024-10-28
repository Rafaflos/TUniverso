import React from "react";
import styled from "styled-components";

// Estilos para la cuadrícula de tarjetas
const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin: 50px;
`;

// Estilo para cada tarjeta
const Card = styled.div`
  background: #f4f4f4;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 400px;
  height: 300px;
`;

const CardComponent = () => {
  // Array de objetos con títulos y descripciones
  const cards = [
    { title: "Card 1", description: "Descripción de la tarjeta 1" },
    { title: "Card 2", description: "Descripción de la tarjeta 2" },
    { title: "Card 3", description: "Descripción de la tarjeta 3" },
    { title: "Card 4", description: "Descripción de la tarjeta 4" },
    { title: "Card 5", description: "Descripción de la tarjeta 5" },
    { title: "Card 6", description: "Descripción de la tarjeta 6" },
  ];

  return (
    <CardGrid>
      {cards.map((card, index) => (
        <Card key={index}>
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </Card>
      ))}
    </CardGrid>
  );
};

export default CardComponent;
