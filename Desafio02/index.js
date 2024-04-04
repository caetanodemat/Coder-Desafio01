function inserirPrecoCusto() {
  let precoCusto = parseFloat(prompt("Insira o preço de custo:"));
  return precoCusto;
}

function calcularICMS(precoCusto) {
  const taxaICMS = 0.18; // 18% de ICMS
  let icms = precoCusto * taxaICMS;
  return icms;
}

function mostrarPrecoCalculado(precoCusto, icms) {
  let precoCalculado = precoCusto + icms;
  document.getElementById('resultado').innerHTML = "Preço de custo: R$ " + precoCusto.toFixed(2) + "<br>ICMS: R$ " + icms.toFixed(2) + "<br>Preço calculado (com ICMS): R$ " + precoCalculado.toFixed(2);
}


function main() {
  let precoCusto = inserirPrecoCusto();
  if (!isNaN(precoCusto)) {
      let icms = calcularICMS(precoCusto);
      mostrarPrecoCalculado(precoCusto, icms);
  } else {
      alert("Por favor, insira um preço de custo válido.");
  }
}

main();