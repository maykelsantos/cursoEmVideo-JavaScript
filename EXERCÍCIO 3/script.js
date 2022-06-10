function contar() {
    let valorInicio = document.getElementById(`valorInicio`)
    let valorFim = document.getElementById(`valorFim`)
    let valorPasso = document.getElementById(`valorPasso`)
    let contador = document.getElementById(`contador`)

    if (valorInicio.value.length == 0 || valorFim.value.length == 0 || valorPasso.value.length == 0) {
        alert(`[ERROR] Faltam dados!`)
    } else {
        contador.innerHTML = `Contando [...]`
        let inicio = Number(valorInicio.value)
        let fim = Number(valorFim.value)
        let passo = Number(valorPasso.value)

        if ( inicio < fim) {
            for (let c = inicio; c <= fim; c = c + passo) {
                contador.innerHTML = contador.innerHTML + ` ${c} \u{1F449} `
            } 
        } else {
            for (let c = inicio; c >= fim; c = c - passo) {
                contador.innerHTML = contador.innerHTML + ` ${c} \u{1F449} `
            }
            contador.innerHTML = contador.innerHTML + ` \u{1F3C1}`
        }
    }
}