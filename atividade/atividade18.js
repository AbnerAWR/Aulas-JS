/* Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
switch. Crie um case default que escreva ‘Número fora do intervalo.’ */

function numeroExtenso(a) {
    switch (a) {
        case 0:
            return 'Zero'
        case 1: 
            return 'Um'
        case 2:
            return 'Dois'
        case 3:
            return 'Tres'
        case 4:
            return 'Quatro'
        case 5: 
            return 'Cinco'
        case 6: 
            return 'Seis'
        case 7:
            return 'Sete'
        case 8: 
            return 'Oito'
        case 9:
            return 'Nove'
        case 10:
            return 'Dez'

    default:
            return 'Numero invalido'                           
    }
}

console.log(numeroExtenso(0))
console.log(numeroExtenso(1))
console.log(numeroExtenso(2))
console.log(numeroExtenso(3))
console.log(numeroExtenso(4))
