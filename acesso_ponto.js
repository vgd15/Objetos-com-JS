const cliente =
{

    nome:"Andre",
    idade:32,
    cpf:"70244860898",
    email:"deise@gmail.com"
}

console.log(cliente.cpf.substring(0,3)) // pegando da string 0 até a 3 do cpf

//ACESSANDO ATRAVÉS DE COLCHETE

console.log(cliente["nome"]);


//OUTRA FORMA DE ACESSAR O OBJETO

const chaves = ["nome", "idade", "cpf", "email"];

chaves.forEach((chave)=>{
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`);

})