import React from "react";
import { CardContainer, CardTitle } from "./CardsStyled";

interface CardProps {
  titulo: string;
  background: string;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ titulo, background, onClick }) => {
  return (
    <CardContainer style={{ background }} onClick={onClick}>
      <CardTitle>{titulo}</CardTitle>
    </CardContainer>
  );
};

export default Card;
