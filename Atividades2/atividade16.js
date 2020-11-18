function checarAnoBissexto(ano) {
    const divisivelPorQuatro = ano % 4 === 0
    const divisivelPorcem = ano % 100 === 0
    const divisivelPorQuatrocentos = ano % 400 === 0

    return (divisivelPorQuatro && !divisivelPorcem) || divisivelPorQuatrocentos
}

console.log(checarAnoBissexto(2020))