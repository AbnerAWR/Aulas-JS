function receberPrimeiroEUltimoElemento(elementos){
    
    let primeiro = elementos[0]
    let ultimo = elementos[elementos.length-1]

    return [primeiro, ultimo]
}


console.log(receberPrimeiroEUltimoElemento([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))