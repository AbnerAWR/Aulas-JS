function contarPalavras(frase){
    const palavra = frase.split(" ")
    return palavra.length
}

console.log(contarPalavras('Sou uma frase'))