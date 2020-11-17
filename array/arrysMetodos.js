const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //Massa quebrou o carro!
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift()// remove o primeiro elemento da lista!
console.log(pilotos)

pilotos.unshift('Hamalton')
console.log(pilotos)

// splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1) // Massa quebrou o carro
console.log(pilotos)

const algunsPilotos1 = pilotos.splice(2) // Novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.splice(1, 4)//Pega uma parte do array do indice 1 ao indice 3 o 4 nao entra.
console.log(algunsPilotos2)