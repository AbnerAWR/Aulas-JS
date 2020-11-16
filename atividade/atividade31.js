/* Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console */ 

function percorrer(vetor){
    qtdNegativos = 0
    for (let i = 0; i < vetor.length; i++){
        if(vetor[i] < 0){
            qtdNegativos++
        }
    }
    return `${qtdNegativos} Numero dentro do intervalo`
}

vetor = [-10, -5, -3, 10, 15, 16, 17]

console.log(percorrer(vetor))