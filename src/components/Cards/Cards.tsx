import React from "react";
import { CardContainer, CardTitle, ImageCard } from "./CardsStyled";

interface CardProps {
  titulo: string;
  background: string;
  image: string;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ titulo, background, image, onClick }) => {
  return (
    <CardContainer background={background} onClick={onClick}>
      <CardTitle>{titulo}</CardTitle>
      <ImageCard src={image} />
    </CardContainer>
  );
};

export default Card;
