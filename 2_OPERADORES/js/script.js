/*// 1 - Number 

console.log( typeof 10);
console.log( typeof 5.14); 
console.log( typeof -127);

// 2 - Operadores aritméticas 

console.log(2 + 4);
console.log(10 - 5);
console.log(5 * 4); 
console.log(10 / 2); 

console.log(5 + 4 * 2);

// 3 - Special numbers

console.log( typeof Infinity );
console.log( typeof -Infinity);
console.log(12 * "asd");
console.log( typeof NaN); 

// 4 - Booleanos

console.log(5 == 5);
console.log(5 == "5"); 
console.log(5 > 4); 
console.log(5 < 4); 
console.log(5 === 5); 
console.log(5 === "5");

// 9 - Comparações

console.log(5 <= 5); //Menor ou Igual - Verifica se é igual em questão de valor 
console.log(5 >= 5); //Maior ou Igual

console.log(10 == 10); //Igualdade
console.log(10 == 9); 
console.log(10 == "10");


console.log(10 != 9); //Diferença
console.log(10 != 10);
console.log(10 != "10");

console.log(10 === 10); //Estritamente Igual(Identico) - Verifica se é igual em relação ao valor e Tipo
console.log(10 === "10");
console.log(10 === 9);

// 10 - Valores identicos

console.log(10 !== 10); //Verifica se é diferente em relação ao valor e ao tipo do dado
console.log(10 !== "10");
console.log(10 !== 9);*/

// 11 - Operadores Lógicos

console.log(true && true);
console.log(true && false);
console.log(false && true); 
console.log(false && false);
console.log(5 > 2 && 2 < 10)
console.log(5 > 2 && "Fafah" === 1);

console.log(true || true);
console.log(true || false);
console.log(false|| true); 
console.log(false|| false);
console.log(5 > 2 && "Fafah" === 1);

console.log(!true);
console.log(!false);

// 12 - Empty Value
 
console.log(typeof null, typeof undefined);
console.log(null === undefined);
console.log(null == undefined);
console.log(null == false);
console.log(undefined == false);

// 13 - Conversão de tipo automático

console.log(5 * null);
console.log("teste" * "opa");
console.log("10" + 1);
console.log("10" - 9);