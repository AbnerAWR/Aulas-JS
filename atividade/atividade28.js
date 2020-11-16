/*Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.*/

function paresImpares(numero){
    let qtdPares = 0
    let qtdImpares = 0
   
    for (let i = 0; i < numero.length; i++){
    if (numero[i] % 2 == 0){
            qtdPares++
        } else{
            qtdImpares++
        }
    }
    console.log(`${qtdPares}, ${qtdImpares}`)
}

vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
paresImpares(vetor)
