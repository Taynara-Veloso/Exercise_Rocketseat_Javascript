/* 1. Crie um script que exiba a mensagem "Hello World!" 
em um alerta no navegador. */

const message = 'Hello World!';

alert(message);

/* 2. Crie um script que declare duas variáveis e exiba 
o resultado da soma entre elas. */

const firstNumber = 5;
const secondNumber = 2;

const sum = firstNumber + secondNumber

alert(sum)

/* 3. Crie um script que declare uma variável e verifique 
se o seu valor é um número. Se for, exiba a mensagem "É um número", 
caso contrário, exiba a mensagem "Não é um número". */

let number = 4;

if (number === Number(number)) {
  console.log('É um número!');
  alert('É um número!');
} else {
  console.log('Não é um número!')
  alert('Não é um número!')
}

// outra maneira
const isNumber = 10

if (typeof isNumber == 'number') {
  alert('A variável é um número')
} else {
  alert('A variável não é um número')
}

/* 4. Crie um script que declare uma variável e verifique se o seu 
valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, 
exiba a mensagem "Não é uma string". */

let word = '3';

if (word === String(word)) {
  console.log('É uma string!');
  alert('É uma string!');
} else {
  console.log('Não é uma string!')
  alert('Não é uma string!')
}

/* 5. Crie um script que declare uma variável e verifique se o seu valor 
é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, 
exiba a mensagem "Não é um booleano". */

let isBoolean = true;

if (isBoolean == true || isBoolean == false) {
  console.log('É um booleano!');
  alert('É um booleano!');
} else {
  console.log('Não é um booleano!');
  alert('Não é um booleano!');
}

// outra maneira
const boolean = true

if (typeof boolean == 'boolean') {
  alert('É um booleano')
} else {
  alert('Não é um booleano')
}

/* 6. Crie um script que declare duas variáveis e exiba o resultado 
da subtração entre elas */

let first = 10;
let second = 5;

function subtraction() {
  let subBetweenTwoNumbers = first - second
  return subBetweenTwoNumbers
}

alert(subtraction(first, second))

/* 7. Crie um script que declare duas variáveis e exiba o resultado 
da multiplicação entre elas. */

let numberFirst = 5;
let numberSecond = 7;

function multiplication() {
  let multBetweenTwoNumbers = numberFirst * numberSecond
  return multBetweenTwoNumbers
}

alert(multiplication(numberFirst, numberSecond))

/* 8. Crie um script que declare duas variáveis e exiba o resultado 
da divisão entre elas. */

let numberOne = 20;
let numberTwo = 4;

function division() {
  let divBetweenTwoNumbers = numberOne / numberTwo

  return divBetweenTwoNumbers
}

alert(division(numberOne, numberTwo))

/* 9. Crie um script que declare uma variável e verifique se o seu 
valor é um número par. Se for, exiba a mensagem "É um número par", 
caso contrário, exiba a mensagem "Não é um número par". */

let even = 6;

if (even % 2 == 0) {
  alert("É um número par")
} else {
  alert("Não é um número par")
}

/* 10. Crie um script que declare uma variável e verifique se o seu 
valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", 
caso contrário, exiba a mensagem "Não é um número ímpar". */

let odd = 5;

if (odd % 2 == 1) {
  alert("É um número ímpar")
} else {
  alert("Não é um número ímpar")
}

// outra maneira
const isOddNumber = 8;

if (isOddNumber % 2 != 0) {
  alert('É um número ímpar')
} else {
  alert('Não é um número ímpar')
}