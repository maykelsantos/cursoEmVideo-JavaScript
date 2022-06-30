// funções são AÇÕES executadas assim que são CHAMADAS ou em decorrência de algum EVENTO.

// uma FUNÇÃO pode receber PARÂMETROS e retornar um RESULTADO.

function parimpar(n) { // n é parâmetro
    if (n % 2 == 0) { // ação
        return `PAR`
    } else {
        return `ÍMPAR`
    }
}

let resultado = parimpar(11) // chamada ou evento

console.log(resultado)

function soma (n1 = 0, n2 = 0) { // parâmetros pré-definidos
    return n1 + n2
}

console.log(soma(5, 2))

let v = function(x) {
    return x * 2
}
console.log(v(10))

function fatorial(n) {
    let fat = 1
    for(let c = n; c > 1; c = c - 1) {
        fat = fat * c
    }
    return fat
}

console.log(fatorial(3))

