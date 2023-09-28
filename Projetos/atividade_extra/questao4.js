var salarioInicial = parseFloat(prompt("Digite o salário inicial do funcionário:"));

var ano = 1995;
var salarioAtual = salarioInicial;

var percentualAumento = 1.5 / 100;

while (ano < 2023) {
  var aumento = salarioAtual * percentualAumento;

  salarioAtual += aumento;

  percentualAumento *= 2;

  ano++;
}

alert("O salário atual do funcionário em 2023 é de R$ " + salarioAtual.toFixed(2));
