/* Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo.

Obs.: O primeiro jogo não conta como novo recorde do melhor.
Exemplo:
String: “10 20 20 8 25 3 0 30 1”
Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
aconteceu no sétimo jogo.) */

//Pedro faz registro por jogos.
//Cada jogo ele anota um novo valor maior ou menor com seu melhor ou pior desempenho.

let pontuacao = '10, 20, 20, 8, 25, 3, 0, 30, 1'

function avaliarValor(pontuacao){
    let pontos = pontuacao.split(", ")
    let record = 0
    let piorJogo = 1
    let melhoresJogos = pontos[0]
    let pioresJogos = pontos[0]

    for (let i; i < pontos.leagth; i++){
        
    }
}

avaliarValor()