const pessoa = {
    nome: "Luma",
    profissao: "Engenheira",
  };
  
  console.log(pessoa.nome);
  
  console.log(pessoa.telefone); //Como essa propriedade não existe dentro do array vai retornar underfined
  
  pessoa.telefone = "11 2223333444"; // Estamos criando essa propriedade
  
  console.log(pessoa.telefone); //agora ela retorna um valor 
  
  pessoa.nome = "Luma Silva"; // alterando o nome dessa propriedade

  delete pessoa.profissao
  delete pessoa["telefone"]

  console.log(pessoa);