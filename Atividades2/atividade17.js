function somarNumero(numero){
    const soma = numero.reduce ((acumula, numeroAtual)=> acumula + numeroAtual, 0)
    return soma
}

console.log(somarNumero([1, 2, 3, 4]))