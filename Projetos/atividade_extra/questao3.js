let n = parseInt(prompt("Digite a quantidade de números:"));
let numeros = [];

for (let i = 0; i < n; i++) {
    let numero = parseInt(prompt(`Digite o ${i + 1}º número:`));

    if (!isNaN(numero)) {
        numeros.push(numero);
    } else {
        alert("Por favor, digite um número válido.");
        i--;
    }
}

if (numeros.length === 0) {
    console.log("Nenhum número válido foi inserido.");
} else {
    let menorValor = Math.min(...numeros);

    let maiorValor = Math.max(...numeros);

    let somaValores = numeros.reduce((a, b) => a + b, 0);

    console.log(`Menor valor: ${menorValor}`);
    console.log(`Maior valor: ${maiorValor}`);
    console.log(`Soma dos valores: ${somaValores}`);
}
