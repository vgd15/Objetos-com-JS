const clientes = require("./clientes-json.json");

function ordenar(lista, propriedade) {
  const resultado = lista.sort((a, b) => {
    if (a[propriedade] < b[propriedade]) {
      return -1;
    }
    if (a[propriedade] > b[propriedade]) {
      return 1;
    }
    return 0;
  });

  return resultado;
}

const ordenadoNome = ordenar(clientes, "nome");

console.log(ordenadoNome);