function carregar() {
    var msg = document.getElementById('msg');
    var img = document.getElementById('foto');
    var data = new Date();
    var hora = data.getHours();
    var minutos = data.getMinutes();
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`
    if (hora >= 0 && hora <12) {
        img.src = './imagens/manha.png'
        document.body.style.background = `#BF9004`
    } else if (hora >= 12 && hora <= 18) {
        img.src = './imagens/tarde.png'
        document.body.style.background = `#734002`
    } else {
        img.src = './imagens/noite.png'
        document.body.style.background = '#193540'
    }
}