const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
  };
  
  cliente.enderecos = [
    {
        rua: "R. Joseph Climber",
        numero: 1337,
        apartamento: true,
        complemento: "ap 934",
      }
  ];

  cliente.enderecos.push(
    {
        rua:"dos bicudos",
        numero: 964,
        apartamento: false,
        complemento: "ap 74",
  }
)

//código omitido

const listaApenasApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
  );
  
  console.log(listaApenasApartamentos);