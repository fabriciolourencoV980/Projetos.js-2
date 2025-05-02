// 1 - Criando uma função

/*function minhaFuncao(){
    console.log("Testando")
};
minhaFuncao();

const minhaFuncaoEmVariavel = function(){
    return "Função em variavel"
}; 
console.log(minhaFuncaoEmVariavel());

function funcaoComParametro(txt){
    console.log(`Imprimindo ${txt}`)
}
funcaoComParametro("Imprimindo alguma coisa"); 
funcaoComParametro("Outra função!")*/

// 2 - return

/*const a = 10; 
const b = 20; 
const c = 30; 
const d = 40; 

function soma(n1, n2){
    return n1 + n2
}
const resultado = soma(a, b);
console.log(resultado);
console.log(soma(a, d));*/

/*const valor1 = 2000;
const valor2 = 3000; 
const valor3 = 5000; 

function desconto(n1){
    return n1 * 0.15
}

console.log(desconto(valor1));
console.log(desconto(valor2));
console.log(desconto(valor3));*/

// 3 - Escopo das funções

/*let y = 10; 

function testandoEscopo(){
    let y =  20; 
    console.log(`Y dentro da função é: ${y}`)
}
console.log(`Y fora da função é: ${y}`); 
testandoEscopo();*/

// 4 - Escopo aninhado

/*let m = 10;

function escopoAninhado() {
  let m = 20;

  if (true) {
    let m = 30;
    if (true) {
      let m = 40;

      console.log(m);
    }
    console.log(m);
  }
  console.log(m)
}
escopoAninhado(); 
console.log(m); */

// 5 - arrow function

/*const testeArrow = () => {
    console.log("Arrow function")
};
testeArrow(); 

const parOuImpa = (n) => {
    if(n % 2 === 0){
        console.log("Número par")
        return
    } else{
        console.log("Número ímpar")
        return
    }
}; 
parOuImpa(5);
parOuImpa(10); 
parOuImpa(3); */

// 6 - Mais sobre arrow Function

/*const raizQuadrada = (x) => {
    console.log(`A raíz qudrada de ${x} é:`, Math.sqrt(x)); 
}
raizQuadrada(200); // Minha solução*/

/* const raizQuadrada1 = (x) =>{
    return x * x
}
console.log(raizQuadrada1(9));

const raizQuadrada2 = (x) => x * x 
console.log(raizQuadrada2(5));
console.log(raizQuadrada2(12)); 

const helloworld = () => console.log("Hello World"); 
helloworld(); */

// 7 - Parametro opcional

/*const multiplication = function (m, n){
    
    if(n === undefined){
        return m * 2
    } else {
        return m * n
    }
}; 
console.log(multiplication(5));
console.log(multiplication(2, 4)); 

const greeting = (name) => {

    if(!name){
        console.log("Olá!")
    } else {
        console.log(`Olá, ${name}!`)
    }
}; 
greeting();
greeting('Fabrício'); */

// 8 - Valor default

/*const customGreeting = (name, greet = "Olá") => {
  return `${greet}, ${name}`
};
console.log(customGreeting("Fabrício"))
console.log(customGreeting("Fafah","Boa tarde!"))

const repeatText = (text, repeat = 2) => {
    for(let i = 0; i < repeat; i++){
        console.log(text)
    }
};
 repeatText("Testando");
 repeatText("Agora repete 5 vezes", 5); */

// 9 - closure

/*function someFunction() {
  let txt = "Alguma coisa";

  function display() {
    console.log(txt);
  }
  display();
}
someFunction();

// 10 - Mais sobre closure 

const multiplicationClosure = (n) => {
    return (m) => {
        return n * m
    };
};

const c1 = multiplicationClosure(5);
const c2 = multiplicationClosure(10); 
console.log(c1(5));
console.log(c2(10)); */

// 10 - Recursão

/*const untilTen = (n,m) => {
    if(n < 10){
        console.log("A fução parou de executar!")
    } else {
        const x = n - m
        
        console.log(x)

        untilTen(x, m)
    }
}; 
untilTen(90, 5); 


function factorial(x){
    if(x === 0){
        return 1
    } else{
        return x * factorial(x - 1)
    }
}; 
const num = 6;
const result = factorial(num); 
console.log(`O fatorial do número ${num} é ${result}`); */