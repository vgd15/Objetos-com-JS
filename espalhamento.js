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
    },
  ];

 

function ligaParaCliente(telefoneComercial, telefoneResidencial) {
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`);
}

ligaParaCliente(cliente.telefone[0], cliente.telefone[1]);

/*const encomenda = {
    destinatario: cliente.nome,
      rua: cliente.enderecos[0].rua,
      numero:cliente.enderecos[1].numero,
  };
  
  console.log(encomenda);*/

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0],
  };
  
  console.log(encomenda);