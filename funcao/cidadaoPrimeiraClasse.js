// Função em JS é First-class object (citizens)
// Higher-order function

// criar de forma litearl
function fun1() { }

// Armazenar em um variavel
const fun2 = function () { }

// Armazenar em um array
const array = [function (a, b) {return a + b}, fun1, fun2]
console.log(array[0](2, 3))

// Armazenar em atributo de objeto
const obj = {}
obj.falar = function() {return 'Opa'}
console.log(obj.falar())

// Passar função como param
function run(fun){
    fun()
}

run (function (){console.log ('Executando...')}) //Função passada como parametro

// Uma função pode retornar/conter uma função
function soma(a, b) {
    return function (c){
        console.log (a + b + c)
    }
}

soma(2, 3) (4)
const cincoMais = soma (2, 3)
cincoMais(4)

function somar1(a, b) { 
    return(a + b)

function subtracao(a, b){
    return (a - b)
    }       
}

console.log(subtracao(5, 2)) //Não é possivel acessar uma função dentro de outra função dessa forma.
