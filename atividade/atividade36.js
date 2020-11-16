/* Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.
*/

function funcao1(vetor, inteiro){
    vetorResultado = []
    for(let i = 0; i < vetor.length; i++){
        vetorResultado.push(vetor[i] * inteiro)
    }

    return  `Multiplicao do vetor ${vetorResultado}`
}

vetor = [2,4,6]
console.log(funcao1(vetor, 2))

function funcao2(vetor2, inteiro2){
    vetorResultado = []
    for(let i = 0; i < vetor.length; i++){
        if (vetor[i] > 5)
        vetorResultado.push(vetor[i] * inteiro2)
    }
    return `Multiplicao do vetor ${vetorResultado}`
}

vetor = [2,4,6]
console.log(funcao2(vetor,2))