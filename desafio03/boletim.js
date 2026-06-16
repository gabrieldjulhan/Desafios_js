/*
Desafio 03 - Sistema de Aprovação

crie uma função chamada verificararAluno() que receba:
-nome
-nota

Regras:
-Nota maior ou igual a 7 - Aprovado
-Nota maior ou igual a 5 e menor que 7 - Recuperação
-Nota menor que 5 - Reprovado

Exiba uma mensagem informando a situação do aluno.
*/
function Boletim(nota, nome) {
    nota=Number(nota)
    if (nota<5){
        return(`${nome} Não esta aprovado!`)
    } else if(nota<7){
return(`${nome} Está em recuperação!`)
    }else{
        return(`${nome} Aprovado!`)
    }
    }
 console.log(boletim(8, 'gabriel'));   
