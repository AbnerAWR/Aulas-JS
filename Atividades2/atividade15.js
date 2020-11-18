function receberSomenteOsParesDeIndicesPares(numero){
    const resultado = []
        for (let i = 0; i < numero.length; i += 2) {
        const numeroPar = numero[i] % 2 === 0 
    if (numeroPar)
        resultado.push(numero[i])
    }
    return resultado
}

console.log(receberSomenteOsParesDeIndicesPares([10, 11, 22, 33]))