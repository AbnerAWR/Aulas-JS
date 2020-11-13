/*Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
*/

const DiaUtil = function (dia){
    switch(dia){
        case 1: 
        console.log('Fim de semana')
            break;
        case 2: case 3: case 4: case 5: case 6:
        console.log('Dia Util')
            break;
        case 7:
        console.log('Fim de semana')
            break;
        default:
            console.log('Dia invalido')
    }
    console.log('Terminou!')
}

DiaUtil(1)