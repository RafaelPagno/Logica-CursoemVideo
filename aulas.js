/*
Soma de dois números

let first_num = parseInt(prompt("Escreva o primeiro número"));
let second_num = parseInt(prompt("Escreva o segundo número"));
let sum = first_num + second_num;

console.log("A soma de " + first_num + " + " + second_num + " = " + sum); 
*/

/*
Média entre três números

let first_num = parseInt(prompt("Escreva o primeiro número"));
let second_num = parseInt(prompt("Escreva o segundo número"));
let third_num = parseInt(prompt("Escreva o terceiro número"));
let average = (first_num + second_num + third_num) / 3;

console.log("A média entre " + first_num + ", " + second_num + " e " + third_num + " é igual a " + average.toFixed(1) + "!"); 
*/

/*
Pode ser triângulo? E caso seja  diga se é Equilatero ou Escaleno (sem Isosceles)

let l1 = parseFloat(prompt("Escreva o primeiro lado"));
let l2 = parseFloat(prompt("Escreva o segundo lado"));
let l3 = parseFloat(prompt("Escreva o terceiro lado"));

let tri = (l1 < l2 + l3) && (l2 < l1 + l3) && (l3 < l1 + l2);
let eq = (l1 == l2) && (l2 == l3);
let es = (l1 != l2) && (l2 != l3) && (l1 != l3);

console.log("Pode formar um TRIANGULO? " + tri);
console.log("O triângulo é EQUILATERO? " + eq);
console.log("O triângulo é ESCALENO? " + es);
*/

/*
Problemas de Ana

Sua idade:
let current_year = parseFloat(prompt("Em qual ano estamos?")); 
let birth_year = parseFloat(prompt("Em que ano nasceu?"));
let age = current_year - birth_year;

console.log("Você completará " + age + " anos de idade!")

Cotação do dollar e real para viagem aos EUA:
let real = parseFloat(prompt("Quantos reais tenho?"));
let dollar = 4.98;
let exchange_rate = real / dollar;

console.log("O valor R$" + real.toFixed(2) + " resulta em aproximadamente $" + parseFloat(exchange_rate).toFixed(2));

Conversão de Fahrenheit(°F) para Celsius(°C):
let fahrenheit = parseFloat(prompt("Qual a temperatura em Fahrenheit(°F)?"));
let celsius = (fahrenheit - 32) * 5 / 9;

console.log("A temperatura " + fahrenheit.toFixed(1) + "°F é igual a " + celsius.toFixed(1) + "°C");

Taxação na Receita Federal:
let item_value = parseFloat(prompt("Qual o valor do produto?"));
let tax = (item_value * 60) / 100;

console.log("O imposto cobrado será de " + tax.toFixed(2));

Empréstimo:
let loan = parseFloat(prompt("Qual o valor do empréstimo?"));
let parcel = parseInt(prompt("Em quantas parcelas?"));
let interest = (loan + (loan * 20 / 100)) / parcel ;

console.log("Vou pagar " + parcel + " parcelas de R$" + interest.toFixed(2))
*/

// Estruturas Condicionais

/*
Maioridade

let current_year = parseInt(prompt("Em que anos estamos?"));
let birth_year = parseInt(prompt("Em que ano nasceu?"));
let age = current_year - birth_year;

console.clear();

console.log("You are " + age + " years old!");

if (age >= 21) {
  console.log("Access Allowed!")
} else {
  console.log("Access Denied!")
}
*/

/*
Par ou impar

let num = parseInt(prompt("Digite um número para saber se ele é par ou ímpar."))

if (num % 2 === 0) {
  console.log("O número " + num + " é par!")
} else {
  console.log("O número " + num + " é ímpar!")
};
*/

/*Indice de Massa Corporal (IMC) or Body Mass Index (BMI)

console.log("Descubra seu Indice de Massa Corporal (IMC)");

let height = parseFloat(prompt("Qual sua altura em metros? Ex: 1.80"));
let weight = parseFloat(prompt("Qual seu peso atual em kilogramas? Ex: 80.5"));
let bmi = weight / (height ** 2);
console.clear();

if (bmi < 18.5) {
  console.log("Você está na classificação MAGREZA, seu IMC é de " + bmi.toFixed(1) + "!");
} if (bmi >= 18.5 && bmi <= 24.9) {
  console.log("Você está na classificação NORMAL, seu IMC é de " + bmi.toFixed(1) + "!");
} if (bmi >= 25 && bmi <= 29.9) {
  console.log("Você está na classificação SOBREPESO, seu IMC é de " + bmi.toFixed(1) + "!");
} if (bmi >= 30) {
  console.log("Você está na classificação OBESIDADE, seu IMC é de " + bmi.toFixed(1) + "!");
};
*/

/*Está apto a dirigir?

console.log(` ========================
 DEPARTAMENTO DE TRÂNSITO
 ========================
`);

let current_year = parseInt(prompt(" ANO ATUAL"));
let birth_year = parseInt(prompt(" ANO DE NASCIMENTO"));
let age = current_year - birth_year;

if (age >= 18) {
  console.log(` 
 ---------STATUS---------
 
 IDADE: ` + age + ` ANOS
 APTO A TIRAR CARTEIRA
 
 ------------------------`);
} else {
  console.log(` 
 -------------STATUS-------------
 
 IDADE: ` + age + ` ANOS
 NÃO ESTA APTO A TIRAR CARTEIRA
 
 --------------------------------`);
}
*/

/*Switch Case

Criança Esperança

console.log(
`===========================
      CRIANÇA ESPERANÇA
 ===========================
 Muito obrigado por ajudar!
 [1] para doar R$10
 [2] para doar R$25
 [3] para doar R$50
 [4] para doar outros valores
 [5] para cancelar
 `);

let num = parseInt(prompt("Escolha uma das opções:"));

switch (num) {
  case 1:
    console.log("Doação APROVADA! Você doou 10 reais!");
    break;
  case 2:
    console.log("Doação APROVADA! Você doou 25 reais!")
    break;
  case 3:
    console.log("Doação APROVADA! Você doou 50 reais!")
    break;
  case 4:
    let donation = parseFloat(prompt("Quanto quer doar?"));
    console.log("Doação APROVADA! Você doou " + donation + " reais!")
    break;
  case 5:
    console.log("Doação CANCELADA!")
    break;
  default: 
    console.log("Opção INVÁLIDA!")
    break;
};
*/

/*Quantidade de dependentes

let worker = prompt("Qual o nome do funcionário?");
let salary = parseFloat(prompt("Qual é o seu salário?"));
let dependents = parseInt(prompt("Quantos dependentes possui?"));
let new_salary = 0;
switch (dependents) {
  case 0: 
    new_salary = salary + (salary*5/100);
    break;
  case 1: 
  case 2: 
  case 3:
    new_salary = salary + (salary*10/100);
    break;
  case 4:
  case 5: 
  case 6:
    new_salary = salary + (salary*15/100);
    break;
  default: 
    new_salary = salary + (salary*18/100);
    break;
};

console.log("O novo salário de " + worker + " sera de R$" + new_salary);
*/
// Estruturas de repetição

/*let num = 0;
while (num <= 5) {
  console.log(num)
  num++;
}*/

/*
let num = 25;

while (num >= 0) {
  console.log(num);
  num--
};
*/

/*
Soma 5 números e diz o maior;

let count = 1;
let soma = 0;
let greater = 0;

while (count <= 5) {
  var num = parseInt(prompt("Escreva 5 números inteiros para soma-los -"));
  if (num > greater) {
    greater = num;
  }
  soma += num;
  count++
}
console.log("A soma dos número é " + soma + " e o maior número digitado é " + greater);
*/

/*Conversor atualizado

let count = 1;
let times = prompt("Quantas vezes quer converter?");
let dollar = 4.98;

while (count <= times) {
  var real = parseFloat(prompt("Quantos reais tenho?"));
  var exchange_rate = real / dollar;
  console.log("O valor R$" + real.toFixed(2) + " resulta em aproximadamente $" + parseFloat(exchange_rate).toFixed(2));
  count++
};
*/

/*
Tarefas aula 09

Contagem inteligente: pede inicio e fim e conta de inicio a fim. Contagem deve ser progressiva caso inicio < fim e regressiva caso inicio > fim 

console.log(`
--------------------
CONTAGEM INTELIGENTE
--------------------
`);

let start = parseInt(prompt("Inicio -"));
let end = parseInt(prompt("Fim -"));

console.log(`
---------------------
   C O N T A N D O
---------------------
`);

if (start < end) {
  while (start <= end) {
    console.log(start + '...');
    start++
  };
} else {
  while (start >= end) {
    console.log(start + '...');
    start--
  };
};
*/

/*Melhor e pior aluno da turma

console.log(`
---------------------------
 Escola Estadual do Paraná
--------------------------- 
`);

let students = parseInt(prompt("Quantos alunos a turma tem? -"));
let student = "";
let best_student = "";
let worst_student = "";
let grade = 0;
let best_grade = 0;
let worst_grade = 100;
let count = 1;

while (count <= students) {
  console.log(`---------------------------`)
  console.log("Aluno " + count);
  
  student = prompt("Nome do aluno -");
  grade = parseFloat(prompt("Nota do " + student));

  if (grade > best_grade) {
    best_grade = grade;
    best_student = student
  } 

  if (grade < worst_grade) {
      worst_grade = grade;
      worst_student = student;
    };
  
  count++
};

console.log(`---------------------------

===============================================================
`);

console.log("O melhor aproveitamento foi de " + best_student + " com a nota " + best_grade);
console.log("O pior aproveitamento foi de " + worst_student + " com a nota " + worst_grade);

FIM tarefas aula 09
*/

// DO/WHILE

/*
Soma dos números com DO/WHILE


let sum = 0;
let num = "";
let resp = "s";

do {
  num = parseInt(prompt("Digite o número -"));
  sum += num;
  resp = prompt("Quer continuar? [S/N] - ");
}
while (resp === "s");

console.log("A soma dos número é " + sum);
*/

/*Contador com DO/WHILE

let num = 1;
let tabuada = parseInt(prompt("Quer saber a tabuada de que número? -"));
let resp = 0;
*/

/*
Tabuada com DO/WHILE

do {
  resp = tabuada * num
  console.log(tabuada + " x " + num + " = " + resp);
  num++
} while (num <= 10)
*/

/*Fatorial de vários números com DO/WHILE

let resp = "";

do {
  let num = parseInt(prompt("Escreva um número para saber seu fatorial -"));
  let count = num;
  let factorial = 1;
  
    do {
      factorial *= count;
     count--
    } while (count >= 1);
    console.log("O fatorial de " + num + " é " + factorial);
  
    resp = prompt("Quer continuar? [S/N] -")
    console.clear();
} while (resp === "s");
*/

/*
Número primo com DO/WHILE
let count = 1;
let num = parseInt(prompt("Escreva um número para saber se ele é primo -"));
let dividers = 0;

do {
  if (num % count == 0) {
    dividers += 1
  }
  count++
} while (count <= num);

if (dividers > 2) {
  console.log("O número " + num + " não é primo!")
} else {
  console.log("O número " + num + " é primo!")
};
*/

/*Tarefas Aula 10

Super Contador

do {
  console.log(`
===================
|     M E N U     |
===================
|  [1] De 1 a 10  |
|  [2] De 0 a 10  |
|  [3] Sair       |
===================
`);
  
  var num = parseInt(prompt(" "));
  
  switch (num) {
    case 1:
      for (let i = 1; i <= 10; i++) {
        console.log(i + "..");
      }
      break;
    case 2:
      for (let i = 10; i >= 1; i--) {
        console.log(i + "..");
      }
      break;
    default:
      break;
  };
} while (num < 3);
*/

/*
Seletor de pessoas


let male = 0;
let female = 0;

do {
console.log(`
==========================
    SELETOR DE PESSOAS
==========================    
`);
  
var gender = prompt("Qual o sexo? [M/F] -");
var age = parseInt(prompt("Qual a idade? -"));
console.log(`Qual a cor do cabelo? ->
---------------------
[1] Preto
[2] Castanho
[3] Loiro
[4] Ruivo
`);
var hair_color = prompt(``);

if (gender == "M" && age >= 18 && hair_color == 2) {
  male += 1;
} 
if (gender == "F" && age >= 25 && age <= 30 && hair_color == 3) {
  female += 1;
}

var resp = prompt("Quer continuar? [S/N] -");
console.clear();
} while (resp == "S")

console.clear();

console.log(`
----------------------------------------------------- 
                   RESULTADO FINAL
-----------------------------------------------------                   
`)

console.log("Total de homens com 18 anos ou mais e cabelos castanhos é " + male);
console.log("Total de mulheres entre 25 e 30 anos e cabelos loiros é " + female);
*/

/*
for (let i = x; x > i; i++) {
};  


De 1 a 10
for (let i = 1; i <= 10; i += 2) {
  console.log(i + "s...")
}; 

De 1 a 10 pulando 2
for (let i = 1; i <= 10; i += 2) {
  console.log(i + "s...")
}; 

De 10 a 1
for (let i = 10; i >= 1; i--) {
  console.log(i + "s...");
};
*/

/*Quantos entre 0 e 10

let total = 0;
let number = 0;
let odd = 0
  
for (let i = 1; i <= 6; i++) {
  number = parseInt(prompt("Digite um valor -"));
  if (number >=0 && number <= 10) {
     total += 1;

   if (number % 2 === 1) {
       odd += number; 
     };
  };
};
console.log("O total de números entre 0 e 10 foi de: " + total ); 
console.log("E a soma dos números ímpares digitados é: " + odd);
*/

/*
Combinações

for (let i = 1; i <= 3; i++) {
  for (let x = 1; x <= 3; x++) {
    console.log(i , x);
  };
};
*/

/*Fibonacci

const number = parseInt(prompt("Até que termo quer ver Fibonacci? -"))
let n1 = 0;
let n2 = 1;
let next_term;
console.clear();

console.log("Sequência de Fibonacci com " + number + " termos.");

for (let i = 1; i <= number; i++) {
  console.log(n1);
  next_term = n1 + n2;
  n1 = n2;
  n2 = next_term;
};
*/

/*Analisador de valores

let num = 0;
let sum = 0;
let average = 0;
let divided_5 = 0;
let null_number = 0;
let sum_even = 0

for (let i = 1; i <= 5; i++) {
  num = parseInt(prompt("Digite o " + i + "° valor -"));
  sum += num;

  if (num % 5 === 0) {
    divided_5 += 1;
  };

  if (num === 0) {
    null_number += 1;
  };

  if (num % 2 === 0) {
    sum_even += num
  };
};
average = sum / 5;

console.log("A soma entre os valores é: " + sum); 
console.log("A média entre os valores é: " + average);
console.log("O número de valores divisíveis por 5 é: " + divided_5); 
console.log("O número de valores nulos é: " + null_number); 
console.log("A soma dos valores pares é: " + sum_even);
*/

//Procedimentos - Rotina

/*
Detector de PESADOS

let person = "";
let weight = 0;
let heaviest = "";
let heavier = 0;

function top() {
console.clear();
console.log("-------------------------------------------");
console.log("   D E T E C T O R    D E    P E S A D O");
console.log("   Maior peso até agora: " + heavier  + "Kg");
console.log("-------------------------------------------");
};

top();

for (let i = 1; i <=5; i++) {
  person = prompt("Digite o nome -");
  weight = parseInt(prompt("Digite o peso de " + person + " -"));

  if (weight > heavier) {
    heavier = weight;
    heaviest = person;
  };

top();
};

top();
console.log("A pessoa mais pesada foi " + heaviest + ", com " + heavier + " quilos.");
*/

/*Passagem de parâmetros

function soma(a, b) {
  console.log("Recebi " + a);
  console.log("Recebi " + b);
  return console.log("A soma é: " + (a + b));
};

let x = 5;
let y = 3;

soma(x, y);
*/

/*Par ou ímpar com function

function even_or_odd(value) {
  if (value % 2 === 0) {
    console.log("O número " + value + " é PAR!");
  } else {
    console.log("O número " + value + " é ÍMPAR!");
  };
};

let num = parseInt(prompt("Digite um número -"));
even_or_odd(num);
//console.log(value); Teste escopo
*/

/*Por referência (Não achei em JS)*/

/*
function sum(a, b) {
  a += 1;
  b += 2;
  console.log("Valor de A = " + a);
  console.log("Valor de B = " + b);
  console.log("Soma A + B = " + (a + b));
};

let x = 4;
let y = 8;
sum(x, y);

console.log("Valor de X = " + x);
console.log("Valor de Y = " + y);
*/

//Procedimento e Função

/*
function sum(a, b) {
  var soma = a + b;
  return soma
};

let n1 = parseInt(prompt("Digite um número -"));
let n2 = parseInt(prompt("Digite outro número -"));
let res = sum(n1, n2);
console.log("A soma é " + res);
*/

/*
Fatorial com função

let N = parseInt(prompt("Digite um número -"));
let R = 1;
let F = factorial(N);
console.log("O fatorial de " + N + " é " + F + "!");

function factorial(value) {
  for (let i = 1; i <= value; i++) {
    R *= i;
  };
  return R
};
*/

/* 
Vetores - Array(JS)

let v = [1, 2, 3, 4, 5, 6];
let num = 0;
//console.log(n[0],n[1],n[2],n[3]);

for (let i = 0; i <= v.length - 1; i++) {
  num = parseInt(prompt("Digite o valor da posição " + i + " do vetor -"));
  v[i] = num
};

console.log(v);
*/

/*
let v = [];
let num = 0;

for (let i = 0; i <= 5; i++) {
  num = prompt("Digite o valor da posição " + i + " do vetor -");
  v[i] = num
};

console.log(v);
*/

/*
Listagem da turma

let names = [];
let n1 = [];
let n2 = [];
let average = [];
let on_average = 0;

for (let i = 0; i < 4; i++) {
  console.log("ALUNO " + (i + 1));
  names[i] = prompt("Name -");
  n1[i] = parseFloat(prompt("First Grade -"));
  n2[i] = parseFloat(prompt("Second Grade -"));
  average[i] = (n1[i] + n2[i]) / 2;
  
  console.clear();

  if (average[i] >= 6.0) {
    on_average += 1;
  };
};

console.clear();

console.log("LISTAGEM DE ALUNOS");
console.log("-------------------");

for (let i = 0; i < 4; i++) {
  console.log(names[i], average[i].toFixed(1));  
};

console.log("O total de alunos com nota igual ou acima da média(6.0) é " + on_average + "!");
*/

/*Apenas com C

let name;
let onlyC = [];
let totC = 0

for (let i = 1; i <= 10; i++) {
  name = prompt("Escreva um nome -");

  if (name.charAt(0) === "C") {
    totC += 1;
    onlyC[i] = name;
  };
};

console.clear();

console.log("Listagem Final");
console.log("--------------");

for (let i = 1; i <= totC; i++) {
  console.log(onlyC[i]);
};
*/

/*Ordenação do Vetor

let vet = [];
let aux = 0;

for (let i = 0; i <= 3; i++) {
  vet[i] = parseInt(prompt("Escreva um valor -"));
};

console.log(vet.sort());
*/

/*
  for (let i = 0; i <= 2; i++) {
    for (let j = 1; j <= 3; j++) {
      if (vet[i] > vet[j]) {
        aux = vet[i];
        vet[i] = vet[j];
        vet[j] = aux;
      };
    };
  };
console.log(vet)

AI - GPT

numbers.sort(function(a, b){
  return a-b;
});
*/