import theme from "../theme/DefaultTheme";

interface NavigationType {
  nome: string;
  key: string;
  personagem: string;
  tema: string;
  imagemCard: string;
}

const navigation: NavigationType[] = [
  {
    key: "card-1",
    nome: "Everton Cadoná",
    personagem: "Everton Cadona",
    tema: `${theme.colorsPerson.everton}`,
    imagemCard: "./public/imagens/Everton/perfil.png",
  },
  {
    key: "card-2",
    nome: "Andrea Noer",
    personagem: "Andrea Noer",
    tema: `${theme.colorsPerson.andrea}`,
    imagemCard: "./public/imagens/Andrea/perfil.png",
  },
  {
    key: "card-3",
    nome: "Luciano Reis",
    personagem: "Luciano dos Reis",
    tema: `${theme.colorsPerson.luciano}`,
    imagemCard: "./public/imagens/Luciano/perfil.png",
  },
  {
    key: "card-4",
    nome: "Matheus Palma",
    personagem: "Matheus Falkenburg",
    tema: `${theme.colorsPerson.matheus}`,
    imagemCard: "./public/imagens/Mateus/perfil.png",
  },
  {
    key: "card-5",
    nome: "Thamires Lopes",
    personagem: "Thamires Lopes",
    tema: `${theme.colorsPerson.thamires}`,
    imagemCard: "./public/imagens/Thamires/perfil.png",
  },
];

export default navigation;
