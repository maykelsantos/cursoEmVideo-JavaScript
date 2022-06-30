let num = [5, 8, 2, 9, 3]
num[5] = 10
num.push(27)

console.log(`Nosso vetor é ${num}`)
console.log(`Nosso vetor tem ${num.length} elementos`) // mostra quantos elementos há no vetor (array)
console.log(`O terceiro é elemento é ${num[2]}`)

for (let pos = 0; pos < num.length; pos = pos + 1) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

for (let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

console.log(`O número 27 está na posição ${num.indexOf(27)}`)
console.log(`O número 8 está na posição ${num.indexOf(8)}`)

