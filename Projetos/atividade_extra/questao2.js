let numerosPares = 0;
let numerosImpares = 0;

for (let i = 0; i < 10; i++) {
    let numero = parseInt(prompt(`Digite o ${i + 1}º número:`));

    if (isNaN(numero)) {
        alert("Por favor, digite um número inteiro válido.");
        i--;
    } else {
        if (numero % 2 === 0) {
            numerosPares++;
        } else {
            numerosImpares++;
        }
    }
}

console.log(`Quantidade de números pares: ${numerosPares}`);
console.log(`Quantidade de números ímpares: ${numerosImpares}`);
