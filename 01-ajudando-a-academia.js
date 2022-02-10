// function calcularMedia(numeros){
//     // media = soma dos numeros / quantidade de numeros

//     let soma = 0

//     numeros.forEach(num => {
//         soma += num
//     })

//     let media = soma / numeros.length
    
//     return media
// }

// console.log(calcularMedia([10,9,6,8,9,1,5,7]))
// console.log(calcularMedia([2,5,7,1,-2]))
// console.log(calcularMedia([10,10,10,10,9]))
// console.log(calcularMedia([25,75]))

const mediaAlunos = function(notas) {
    soma = notas.reduce((acc, n) => acc + n, 0)
    media = soma / notas.length
    return media
}

console.log(mediaAlunos([10,9,6,8,9,1,5,7]))
console.log(mediaAlunos([2,5,7,1,-2]))
console.log(mediaAlunos([10,10,10,10,9]))
console.log(mediaAlunos([25,75]))