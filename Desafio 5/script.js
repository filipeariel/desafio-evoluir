/*5. Remova os repetidos
Imagine que você é um grande fã de figurinhas colecionaveis. Como todo fã, sua coleção não pode conter 
figurinhas repetidas e, pra isso, você cria um sistema de organização baseada nos numeros das figurinhas. 
Suponhamos que você receba a lista 'int figurinha[]' que contenham os numeros das figurinhas dos ultimos 
pacotes que você abriu: [10, 13, 15, 15, 24, 25, 33, 33, 33, 57, 68, 77, 77]. Após utilizar o sistema de 
organização, você então filtra as repetidas e percebe que só deve manter as figurinhas 10, 13, 15, 24, 25, 
33, 57, 68, 77.

Faça um método que receba a lista 'int figurinha[]', processe e retorne-a sem os valores repetidos!*/

let figurinha = [10, 13, 15, 24, 25, 33, 33, 33, 57, 68, 77, 77]

let filtrada = figurinha.filter(function(ele, pos) {
    return figurinha.indexOf(ele) == pos
})

console.log(`Figurinhas únicas: ${filtrada}`)

/*Alternativa

let filtrada = [...new Set(figurinha)]
console.log(`Figurinhas únicas: ${filtrada}`)*/