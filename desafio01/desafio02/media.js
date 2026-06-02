// desafio 02 - média da turma

/*
    Crie um array com 5 notas 
    - Utilize um loop para:
        -Somar todas as notas 
        - Calcular a média

        mostrar no console/output o seguinte:
        média da turma: 10.0
        */

let soma=0
const notas=[5,3,9,1,7]
for(const numero of notas) {
    soma += numero;
}
console.log(`AS notas da turma são: ${notas}.
    As média é ${soma/notas.length}`)