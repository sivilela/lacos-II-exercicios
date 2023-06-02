/**# Exercício 2

Crie um programa que peça um input de número 
para o usuário. Com este número, o código deve 
imprimir a **tabuada** do número, de 1 a 10.

**Utilize o for...in para resolver**


Exemplo com entrada **`7`**:
```jsx
7
14
21
28
35
42
49
56
63
70
``` */


//------------------------------------
// console.log("----Tabuada---");
// let numero = Number(prompt("Informe um número para a tabuada:"));
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for (let i in array) {
//     console.log(`${array[i]}x${numero}=${array[i] * numero}`);
// }

//------------------------------------
const numero = Number(prompt("Digite um número"))
const arrayNumeros = [1,2,3,4,5,6,7,8,9,10]
for(let i in arrayNumeros){
    let multiplicacao = numero * (Number(i) + 1)
    console.log(`${numero} x ${(Number(i) + 1)} = ${multiplicacao}`);
}

//------------------------------------

// var verdade = true;
// while (verdade) {
//   console.log("----Tabuada---");
//   let numero = Number(prompt("Informe um número para a tabuada:"));
//   let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//   for (let i in array) {
//     console.log(`${array[i]}x${numero}=${array[i] * numero}`);
//   }

//   verdade = confirm("Gostaria de continuar?")

//   if (!verdade) {
//     break
//   } else {
//     console.log(`Obrigado por utilizar nosso serviço!`)
//   }

// }