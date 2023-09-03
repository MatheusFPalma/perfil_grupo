import React, { useEffect } from "react";
import { person } from "../../data/Person";
import DefaultTheme from "../../config/theme/DefaultTheme";
import { ThemeProvider } from "styled-components";

interface AboutProps {
  personagem: string;
}

const About: React.FC<AboutProps> = ({ personagem }) => {
  const personagemSelecionado = person.find(
    (person) => person.nome === personagem
  );

  return (
    <>
      {personagemSelecionado && (
        <div
          style={{ display: "flex", flexDirection: "column", margin: "5rem" }}
        >
          <h1>{personagemSelecionado.nome}</h1>
          <p>{personagemSelecionado.descricao}</p>
          <p>{personagemSelecionado.softSkills}</p>
          <img
            style={{
              position: "absolute",
              bottom: "2%",
              right: "0%",
              height: "100%",
              width: "50%",
            }}
            src={personagemSelecionado.img}
            alt={personagemSelecionado.nome}
          />
        </div>
      )}
    </>
  );
};

export default About;
