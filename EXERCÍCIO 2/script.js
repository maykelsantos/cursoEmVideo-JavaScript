function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formularioAno = document.getElementById(`txtano`)
    var res = document.querySelector(`div#res`)
    if (formularioAno.value.length == 0 || formularioAno.value > ano) {
        alert(`[ERROR] Verifique os dados e tente novamente!`)
    } else {
        var fsex = document.getElementsByName(`radsex`)
        var idade = ano - Number(formularioAno.value)
        var genero = ``
        var img = document.createElement(`img`)
        img.setAttribute(`id`, `foto`)
        img.setAttribute(`width`, `250`)
        img.setAttribute(`height`, `auto`)
        if (fsex[0].checked) {
            genero = `Homem`
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute(`src`, `imagens/criancaM.png`)
            } else if (idade >= 10 && idade < 20) {
                //jovem
                img.setAttribute(`src`, `imagens/jovemM.png`)
            } else if (idade >= 20 && idade < 50) {
                //adulto
                img.setAttribute(`src`, `imagens/adultoM.png`)
            } else if (idade >= 50) {
                //idoso
                img.setAttribute(`src`, `imagens/idosoM.png`)
            }
        } else if (fsex[1].checked) {
            genero = `Mulher`
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute(`src`, `imagens/criancaF.png`)
            } else if (idade >= 10 && idade < 20) {
                //jovem
                img.setAttribute(`src`, `imagens/jovemF.png`)
            } else if (idade >= 20 && idade < 50) {
                //adulto
                img.setAttribute(`src`, `imagens/adultoF.png`)
            } else if (idade >= 50) {
                //idoso
                img.setAttribute(`src`, `imagens/idosoF.png`)
            }
        }
        res.innerHTML =`Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}