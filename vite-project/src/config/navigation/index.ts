interface NavigationType {
  nome: string;
  key: string;
  personagem: string;
  backgroundColor: string;
}

const navigation: NavigationType[] = [
  {
    key: "card-1",
    nome: "everton",
    personagem: "Everton Cadona",
    backgroundColor: "red",
  },
  {
    key: "card-2",
    nome: "andrea",
    personagem: "Andrea Coer",
    backgroundColor: "blue",
  },
  {
    key: "card-3",
    nome: "Luciano",
    personagem: "Luciano dos Reis",
    backgroundColor: "green",
  },
  {
    key: "card-4",
    nome: "Matheus",
    personagem: "Matheus Falkenburg",
    backgroundColor: "purple",
  },
  {
    key: "card-5",
    nome: "Thamires",
    personagem: "Thamires Lopes",
    backgroundColor: "gray",
  },
];

export default navigation;
