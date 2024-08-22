const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
    saldo: 200,
    efetuaPagamento: function (valor) {
      if (valor > this.saldo) { //o this fala que estamos lidando com o saldo desse objeto 
        console.log("Saldo insuficiente");
      } else {
        this.saldo -= valor;
        console.log(`Pagamento realizado. Novo saldo: ${this.saldo}`);
      }
    },
  };
  
  cliente.efetuaPagamento(25);