// para utilização de comentários em JavaScript utilize esses caracteres
var n1 = Number(window.prompt(`Digite um número: `)); // necessário converter o `prompt` para number pois inicialmente é recebido como string.
var n2 = Number(window.prompt(`Digite outro número: `));
var soma = n1 + n2;
window.alert(`A soma dos valores informado é ` + soma)
// outra forma de mostrar este `alert`
window.alert(`A soma dos valores informados é ${soma}!`)
// outra forma de mostrar este `alert`
window.alert(`A soma entre ${n1} e ${n2} é ${soma}`)