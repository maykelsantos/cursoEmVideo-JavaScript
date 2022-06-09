function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formularioAno = document.getElementById(`txtano`)
    var res = document.querySelector(`div#res`)
    if (formularioAno.value.length == 0 || formularioAno.value > ano) {
        alert(`[ERROR] Verifique os dados e tente novamente!`)
    } else {
        alert(`TUDO OK!`)
    }
}