
function entradaAteSair() {
  var entrada = "";
  
  while (entrada !== "sair") {
      entrada = prompt("Digite algo (ou 'sair' para sair):");
      console.log("Você digitou: " + entrada);
  }
}



entradaAteSair();
