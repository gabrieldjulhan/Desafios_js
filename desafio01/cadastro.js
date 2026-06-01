/* // desafio01

/
crie um objeto chamedo pessoa contendo:
nome:
idade:
cidade

apos a criação:
-Altere a idade
-Adicione uma profissão
-Remova a cidade

No fim, exiba o objeto final.

 */
const pessoa={
    nome:"Gabriel",
    idade:15,
    cidade:"capanema",
}
console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(pessoa.cidade)

pessoa.idade=16,
pessoa.profissão="médico",
delete(pessoa.cidade)

console.log(pessoa)