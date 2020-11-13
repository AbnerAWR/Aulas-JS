/* Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos. */

function aplicacaoJurosSimples (capitalInicial, taxaJuros, tempoAplicacao){

    jurosSimples = capitalInicial + (capitalInicial * taxaJuros * tempoAplicacao)
    console.log(jurosSimples)

}

function valorAplicacao (capitalInicial, taxaJuros, tempoAplicacao){

    jurosSimples = capitalInicial * (1 + taxaJuros) ** tempoAplicacao
    console.log(jurosSimples)
}

aplicacaoJurosSimples(100, 10/100, 2)
valorAplicacao (100, 10/100, 2)