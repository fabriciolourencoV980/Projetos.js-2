// // 1 - Prompt

/* const age = prompt("Digite sua Idade"); 
 console.log(`Você tem ${age} anos`); */

// 2 - Alert

/* alert("Testando");

const z = 10; 
alert(`O seu número é ${z}`); */

// 3 - Object Math

/* console.log(Math.max(5, 2, 1, 10)); 
 console.log(Math.floor(5.14)); //Arredonda para baixo
 console.log(Math.ceil(5.14)); //Arredonda para cima
 console.log(Math.rando()); //Gera números aleátorios */

// 4 - console

/* console.log("Teste!"); 
 console.error("ERROR1!"); 
 console.warn("AVISO"); */

// 5 - If

/* const m = 10;

if(m > 5){
    console.log("M é maior que 5!!")
}; 

const user = "João"; 

if(user === "João"){
    console.log("Olá João")
}; */

// 6 - Else

/* const loggedIn = false; 

if(loggedIn ===  true){
    console.log("Está authenticado.")
} else{
    console.log("Não está authenticado.")
}; 

const q = 10; 
const w = 25;

if(q > 5 && w > 20){
    console.log("Números mais altos.")
} else{
    console.log("Os números não são mais altos.")
} */

// 7 - Else If

/* if(1 > 2){
    console.log("Teste")
} else if(2 > 3){
    console.log("Teste2")
} else if(5 > 1){
    console.log("Agora sim!")
}; 

const userName = "Fabricio"; 
const userAge = 20; 

if(userName === "José"){
    console.log("Bem vindo José")
} else if(userName === "Fabricio" && userAge === 20){
    console.log("Olá Fabrício, você tem 20 anos")
} else{
    console.log("Nenhuma condião é aceita")
}; */

// 8 - While

/*let p = 0;

while(p < 5 ){
    console.log(`Repetindo ${p}`);
    p = p + 1
}; */

// Loop infinito

/* let x = 10; 

 while(x > 5){
    console.log(`Imprimir ${x}`)
} */

// 9 - Do While

/*let o = 10; 

do {
    console.log(`Valor de o: ${o}`)
    o-- // o = o - 1
} while(o > 1)*/

// 10 - For

/*for(let t = 0; t < 10; t++){
    console.log(`Repetindo ${t}`)
} */

/*for(let p = 10; p > 0; p--){
    console.log(`Repetindo ${p}`)
}*/

/*let r = 10 

for(r; r > 0; r =  r - 1){
    console.log("R diminuindo")
}*/

// 13 - identação

/*for (let u = 0; u < 10; u++) {
  if (u * 2 > 10) {
    console.log(`Maior que 10! ${u}`);
  } else {
    if (u / 2 === 0) {
      console.log("Deu 0");
    }
  }
}*/

// 14 - Break

/*for (let g = 20; g > 10; g--) {
  console.log(`O valor de g é: ${g}`);

  if (g === 12) {
    console.log("O g é 12!");
    break;
  }
}

for (let a = 0; a < 10; a++) {
  console.log(`O valor de a é: ${a}`);

  if (a === 5) {
    console.log(`a é igual a ${a}`);
    break;
  }
} */

// 15 - Continue

/*for (let s = 1; s < 10; s = s + 1) {
  //operador de resto = %
  if (s % 2 === 0) {
    console.log("Número Par!");
    continue;
  }
  console.log(s);
}*/

// 16 - Switch

/*const job = "Engenheiro";

switch (job) {
  case "Programador":
    console.log("Você é um programador!");
    break;
  case "Advogado":
    console.log("Você é advogado!");
    break;
  case "Engenheiro":
    console.log("Você é engenheiro");
    break;
  default:
    console.log("Profissão não encontrada");
} */
