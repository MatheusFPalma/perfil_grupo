import React, { useState, useEffect } from "react";
import About from "./components/About/About";
import Card from "./components/Cards/Cards";
import navigation from "./config/navigation";

function App() {
  const [showAbout, setShowAbout] = useState(false);
  const [selectedPersonagem, setSelectedPersonagem] = useState("");

  useEffect(() => {
    if (showAbout) {
      console.log("About foi exibido!");
    }
  }, [showAbout]);

  const handleCardClick = (personagem) => {
    setSelectedPersonagem(personagem);
    setShowAbout(true);
  };

  return (
    <>
      {showAbout ? (
        <>
          <div>
            {navigation.map((item) => {
              return (
                <Card
                  key={item.key}
                  titulo={item.nome}
                  background={item.backgroundColor}
                  onClick={() => handleCardClick(item.personagem)}
                />
              );
            })}
          </div>
          <About personagem={selectedPersonagem} />
        </>
      ) : (
        <div>
          {navigation.map((item) => {
            return (
              <Card
                key={item.key}
                titulo={item.nome}
                background={item.backgroundColor}
                onClick={() => handleCardClick(item.personagem)}
              />
            );
          })}
        </div>
      )}
    </>
  );
}

export default App;
