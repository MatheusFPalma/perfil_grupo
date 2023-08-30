import React from "react";
import { person } from "../../data/Person";

interface AboutProps {
  personagem: string;
}

const About: React.FC<AboutProps> = ({ personagem }) => {
  const personagemSelecionado = person.find(
    (person) => person.nome === personagem
  );

  return (
    <React.Fragment>
      {personagemSelecionado && (
        <>
          <h1>{personagemSelecionado.nome}</h1>
          <p>{personagemSelecionado.descricao}</p>
          <p>{personagemSelecionado.softSkills}</p>
          <img
            src={personagemSelecionado.img}
            alt={personagemSelecionado.nome}
          />
        </>
      )}
    </React.Fragment>
  );
};

export default About;
