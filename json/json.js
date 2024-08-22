//OBJETO DE JS
const cliente = {
    nome: "Joao",
    email: "joao@firma.com",
    telefone: ["11223344", "11922334453"],
    endereco: {
      rua: "R. Joseph Climber",
      numero: 1337,
      apartamento: true,
      complemento: "ap 934",
    },
  };

  //OBJETO JSON, PRECISAR DE UM ARQUIVO.JSON PARA FAZELOS

const json = {
    "nome": "Joao",
    "email": "joao@firma.com",
    "telefone": ["11223344", "11922334453"],
    "endereco": {
      "rua": "R. Joseph Climber",
      "numero": 1337,
      "apartamento": true,
      "complemento": "ap 934"
    }
  }

  // em json  não são permitidas: funções, comentários, variáveis  e suporta apenas tipos primitivos de dados. 

  // as chaves das propriedades tem aspas duplas (" ")

  //Arrays e objetos aninhados podem existir

  //Nesse formato, é proibido ter vírgula no último item de um bloco como "complemento": "ap 934",