let nomes = [];

while (true) {
  let entrada = prompt('Digite um número (ou "sair" para terminar):');

  if (entrada === "sair") {
    break; 
  }
  if (entrada.trim() === "") {
    prompt('Digite um nome: ');
    continue;
  }

  nomes.push(entrada);
};

let listaComIndices = "Lista de nomes:\n";
for (let i = 0; i < nomes.length; i++) {
  listaComIndices += (i + 1) + ": " + nomes[i] + "\n";
  alert(listaComIndices);}


for (let nome of nomes) {
    alert("Bem-vindo(a), " + nome + "!");
  }
