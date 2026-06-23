function contar(inicio, fim) {
    console.log("Contagem crescente:");
    for (let i = inicio; i <= fim; i++) {
        console.log(i);
    }
}

function voltar(fim, inicio) {
    console.log("Contagem decrescente:");
    for (let i = fim; i >= inicio; i--) {
        console.log(i);
    }
}
contar(1, 10);
voltar(10, 1);