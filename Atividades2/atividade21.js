function funcaoDaSorte(numero){
    const min = 1
    const max = 10
    const sorteado = Math.floor(Math.random() * (max - min + 1) + min)

    if (numero === sorteado){
        return `Parabéns! O número sorteado foi o ${numero}`
    } else{
        return `Que pena! O número sorteado foi o ${sorteado}`
    }

    
}

console.log(funcaoDaSorte(5))