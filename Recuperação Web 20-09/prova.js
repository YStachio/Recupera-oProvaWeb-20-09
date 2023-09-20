const blocoNumero = document.querySelector(".bloco-numero");
const blocoAdicionar = document.querySelector(".bloco-adicionar");
const blocoNumeros = document.querySelector(".bloco-numeros");
const arrayNumeros = [];

blocoAdicionar.addEventListener("click", () => {
  // Obtém o número digitado
  const numero = blocoNumero.querySelector("input").value;

  // Valida o número
  if (numero < 1 || numero > 10) {
    return;
  }

  // Adiciona o número à lista
  arrayNumeros.push(numero);

  // Ordena a lista em ordem crescente
  arrayNumeros.sort((a, b) => a - b);

  // Atualiza a lista de números
  blocoNumeros.querySelector("ul").innerHTML = arrayNumeros.map((numero) => `<li>${numero}</li>`).join("");
});

blocoNumeros.addEventListener("click", (event) => {
  // Obtém o elemento clicado
  const item = event.target.closest("li");

  // Remove o elemento da lista
  arrayNumeros.splice(item.index, 1);

  // Atualiza a lista de números
  blocoNumeros.querySelector("ul").innerHTML = arrayNumeros.map((numero) => `<li>${numero}</li>`).join("");
});