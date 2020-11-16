/* Fazer um programa para encontrar todos os pares entre 1 e 100. */

let n = 0
    
while(n <= 100){
    const par = n % 2
    if (par == 0){
        console.log(n)
    }
    n++
}

console.log('FIM!')