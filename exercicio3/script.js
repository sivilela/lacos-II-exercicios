/**# Exercício 3

Crie um array com 5 strings. Faça um programa que percorra este 
array e imprima as strings em formato de ranking, como no exemplo abaixo:

**Utilize o for...of para resolver**


```jsx
//entrada
const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"]

//saída
"1 - Rússia"
"2 - Canadá"
"3 - China"
"4 - EUA"
"5 - Brasil"
``` */


function pais (){
  const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"]
  
  for(let i = 0; i < maioresPaises.length; i++){
      console.log(`${i} - ${maioresPaises[i]}`);
  }
  }
  pais()


const rankingBtWomen = ["Giulia Gasparri","Ninny Valentini","Rafaella Miiller","Patricia Diaz","Nicole Nobile"]
let posicao = 1
for(const ranking of rankingBtWomen){
    console.log(`"${posicao} - ${ranking}"`);
    posicao ++;
}
