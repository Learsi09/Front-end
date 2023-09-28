function calcularMontanteInvestimento(capitalInicial, taxaJurosMensal, tempoMeses) {
    if (capitalInicial <= 0 || taxaJurosMensal <= 0 || tempoMeses <= 0) {
      return "Os valores devem ser números positivos.";
    }
  
    var montante = capitalInicial * Math.pow(1 + taxaJurosMensal / 100, tempoMeses);
  
    montante = montante.toFixed(2);
  
    return "O montante do investimento após " + tempoMeses + " meses é R$ " + montante;
  }
  
  var capitalInicial = parseFloat(prompt("Digite o capital inicial investido (R$):"));
  var taxaJurosMensal = parseFloat(prompt("Digite a taxa de juros mensal (%):"));
  var tempoMeses = parseInt(prompt("Digite o tempo do investimento em meses:"));
  
  var resultado = calcularMontanteInvestimento(capitalInicial, taxaJurosMensal, tempoMeses);
  console.log(resultado);
  