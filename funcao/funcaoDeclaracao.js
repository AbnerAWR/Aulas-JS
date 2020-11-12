// Function declaration, é possivel chamar antes dela ser declarada
function soma(x, y){
    return x + y
}

// Function expression, é possivel chamr apenas depois de declarar
const sub = function (x, y){
    return x - y
}

// named function expression, ainda é necessario declarar primeiro, para chamar depois.
const mult = function mult(x, y){
    return x * y
}