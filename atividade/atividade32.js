/* Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros. */

function mediaArti(vetor){
   let media = 0
   for(let i = 0; i < vetor.length; i++){

    media += vetor[i]

   }

   return media/vetor.length
}

vetor = [5, 5]

console.log(mediaArti(vetor))