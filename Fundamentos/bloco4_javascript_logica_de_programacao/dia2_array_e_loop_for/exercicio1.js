let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// ====================================
// for(let i = 0; i < numbers.length; i += 1) {
//     console.log(numbers[i])
// }
// ====================================

// let soma = 0

// for(let i = 0; i < numbers.length; i += 1) {
//         soma += numbers[i]
//     }

// console.log(soma)
// ====================================

// let soma = 0
// let media = 0

// for(let i = 0; i < numbers.length; i += 1) {
//        soma += numbers[i]
//        media = soma / numbers.length
//     }

// console.log(media)
// ====================================

// let soma = 0
// let media = 0

// for(let i = 0; i < numbers.length; i += 1) {
//        soma += numbers[i];
//        media = soma / numbers.length;
//     }

//     console.log(media)

// if(media > 20) {
//     console.log("valor maior que 20");
// } else {
//     console.log("valor menor que 20");
// }
// ====================================

// let maiorValor = 0;

// for (let i = 0; i < numbers.length; i += 1) {

//   if(numbers[i] > maiorValor)
//   maiorValor = numbers[i]
// }
// console.log(maiorValor)
// ====================================

// numerosImpares = []

// for (let i = 0; i < numbers.length; i += 1) {
//   if(numbers[i] % 2 > 0) {
//     numerosImpares.push(numbers[i])
//   }
// }
// if(numerosImpares.length > 0) {
//   console.log(numerosImpares)
// } else if (numerosImpares.length === 0) {
//   console.log("nenhum valor impar encontrado")
// }
// ====================================

// menorNumero = numbers[0]

// for (let i = 0; i < numbers.length; i += 1) {
//   if(numbers[i] < menorNumero) {
//     menorNumero = numbers[i]
//   }
// }

// console.log(menorNumero)
// ====================================

// umA25 = []

// for(i = 1; i <= 25; i += 1) {
//   umA25.push(i)
// }
// console.log(umA25)
// ====================================

// let umA25 = []

// for(i = 1; i <= 25; i += 1) {
//   umA25.push(i)
// }

// for(s = 0; s < umA25.length; s += 1) {
//   console.log(umA25[s] / 2)
// }
// ====================================

// // Bonus
let numbersMultiplicado = []

  for (let i = 0; i < numbers.length; i += 1) {
    // vai passar pelos numeros do numbers
    for (let j = i + 1; j < numbers.length; j += 1) {
      // vai passar pelo numero a frente do primeiro for
      if (numbers[i] > numbers[j]) {
        // vai comparar para ver qual dos dois e maior, o primeiro ou o segundo
        let aux = numbers[i];
        // armazena o valor do primeiro for caso ele seja maior que o segundo
        numbers[i] = numbers[j];
        // transforma o valor do primeiro for no valor do segundo caso o primeiro seja o maior 
        numbers[j] = aux;
        // transforma o numero menor no numero maior, caso o primeiro seja maior 
      }
    }
  }
console.log(numbers)

