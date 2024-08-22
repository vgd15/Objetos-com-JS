const objetoPessoa = {
    nome:"Jose",
    idade:32,
    CPF:"1111222333"
};

//criando objeto com o métofo Object.create()

const objPessoa2 = Object.create(objetoPessoa)

objPessoa2.nome = "Gandalf",
objPessoa2.idade = 30,
objPessoa2.CPF = "70232332290"

console.log(objetoPessoa,objPessoa2)