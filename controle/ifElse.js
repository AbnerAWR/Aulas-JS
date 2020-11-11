const imprimrResultado = function (nota) {
    if (nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado')
    }
}

imprimrResultado(10)
imprimrResultado(4)
imprimrResultado('epa') //cuidado com a string, sendo passada dentro de uma variavel numerica.