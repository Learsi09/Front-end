let populacaoA = 80000;
let taxaCrescimentoA = 0.03;
let populacaoB = 200000;
let taxaCrescimentoB = 0.015;
let anos = 0;

while (populacaoA < populacaoB) {
    populacaoA += populacaoA * taxaCrescimentoA;
    populacaoB += populacaoB * taxaCrescimentoB;
    anos++;
}

console.log(`Levará ${anos} anos para a população do país A ultrapassar ou igualar a população do país B.`);
