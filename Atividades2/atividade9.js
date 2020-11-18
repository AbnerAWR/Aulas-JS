function repetir (a, numero) {
    let resultado = []
    for (let i = 0; i < numero; i++)
    resultado.push(a)
    return resultado
}

console.log(repetir('teste', 2))