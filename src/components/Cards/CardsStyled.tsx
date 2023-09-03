import { styled } from "styled-components";

interface CardContainerProps {
  background: string;
}

export const CardContainer = styled.div<CardContainerProps>`
  background: ${(props) => props.background};
  &:hover {
    box-shadow: -7px -11px 6px 12px ${(props) => props.background};
  }
  padding: 16px;
  width: 300px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardTitle = styled.h2`
  color: white;
  font-size: 18px;
  margin-bottom: 10px;
`;

export const ImageCard = styled.img`
  width: 80px;
  height: 80px;
`;
