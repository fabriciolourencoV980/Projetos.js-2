// 1 - Arrays
/*const lista = [1, 2, 3, 4, 5]
console.log(lista)
console.log(typeof lista)

// 2 - Mais sobre array 
const arr = ["a", "b", "c", "d", "d"]
console.log(arr[2])

// 3 - propriedades
const numbers = [5, 3, 4];
console.log(numbers.length);
console.log(numbers["length"]);

const myName = "Fabricio"; 
console.log(myName.length);

// 4 - Métodos
const otherNumbers = [1, 2, 3];
const allNumbers = numbers.concat(otherNumbers);
console.log(allNumbers);

const text = "Algum Texto";
const text1 = "ALGUM TEXTO"; 
console.log(text.toUpperCase());
console.log(text1.toLowerCase());
console.log(typeof text.toLocaleUpperCase());
console.log(text.indexOf("g")); 

// 5 - Objetos
const person = {
    name: "Fabrício,",
    age: 20 + " anos,", 
    job: "Analista"
}
console.log(person); 
console.log(person.name, person.age, person.job);
console.log(person.name.length);*/

// 6 - Criando e deletando Objetos
/*const car = {
  engine: 2.0,
  brand: "VW",
  model: "Tiguan",
  km: 2000,
};
console.log(car);
car.doors = 4;
console.log(car);

delete car.km;
console.log(car);*/

// 7 - mais sobre objetos

/*const obj = {
  a: "Teste",
  b: true
}; 
console.log(obj instanceof Object)

const obj2 = {
  c: []
};
Object.assign(obj2, obj); 
console.log(obj2);
console.log(obj)

// 8 - Conhecendo melhor os Objetos 
console.log(Object.keys(obj)); 
console.log(Object.keys(obj2)); 

console.log(Object.entries(obj)); 
console.log(Object.entries(obj2));*/

// 9 - Mutação
/*const a = {
  nome: "Fabrício"
}; 

const b = a; 
console.log(a); 
console.log(b); 

console.log(a === b);
a.age = 31; 
console.log(a);
console.log(b); 

delete b.age; 
console.log(a);
console.log(b);*/

// 10 - loop em arrray

/*const users = ["Matheus", "Jõao", "Pedro", "Miguel"];

for(let i = 0; i < users.length; i++){
  console.log(`Listando o usuário: ${users[i]}`)
};*/

// 11 - push(adiciona final) e pop(remove final)

/*const array = ["a", "b", "c"]
array.push("d")
console.log(array)
array.pop();
console.log(array)

const itemRemovido = array.pop(); 
console.log(itemRemovido); 
console.log(array); 

array.push("z","x","y"); 
console.log(array)*/

// 12 - Shift(remove inicio) e Unshift(adiciona inicio)

/*const letters = ["a", "b", "c"]; 
const letter = letters.shift(); 

console.log(letter); 
console.log(letters);

letters.unshift("p","q","r")
letters.unshift("z"); 
console.log(letters);*/

// 13 - IndexOf lastIndexOf
/* const myElements =  ["Morando", "Maça", "Banana", "Pera", "Pessego"]

console.log(myElements.indexOf("Maça")); 
console.log(myElements.indexOf("Pessego"));
console.log(myElements[2]);
console.log(myElements[myElements.indexOf("Pessego")]); 

console.log(myElements.lastIndexOf("Pessego")); 
console.log(myElements.indexOf("Mamão")); 
console.log(myElements.lastIndexOf("Mamão")); */

// 14 -  Slice
/*const testeSlice = ["a", "b", "c", "d", "e", "f"]; 

const subArray = testeSlice.slice(2, 4); 
console.log(subArray); 
console.log(testeSlice); 
const subArray2 = testeSlice.slice(2, 4 + 1); 
console.log(subArray2); 
const subArray3 = testeSlice.slice(10, 20); 
console.log(subArray3); 

const subArray4 = testeSlice.slice(2); 
console.log(subArray4); */

// 15 - forEach
/*const nums = [1, 2, 3, 4, 5]; 

/*for(let i = 0; i < nums.length; i++){ 
  console.log(`Números salvos em lista: ${nums[i]}`)
}*/

/*nums.forEach((numero) => {
  console.log(`O número é ${numero}`)
})

const posts = [
  {tiltle: "Primeiro post", category: "PHP"},
  {tiltle: "Segundo post", category: "JavaScript"}, 
  {tiltle: "Terceiro post", category: "Phyton"},  
]

posts.forEach((post) =>{
  console.log(`Exibindo post: ${post.tiltle}, da categoria: ${post.category}`)
})*/

// 16 - Includes
/*const brands = ["BMW","VW","Fiat"];

console.log(brands.includes("Fiat"));
console.log(brands.includes("VolksWalgem")); 

if(brands.includes("BMW")){
  console.log(`Há carros da marca BMW em meio a lista de array!`)
}*/

// 17 - Reverse
/*const reverseTeste = [1, 2, 3, 4, 5];
reverseTeste.reverse(); 
console.log(reverseTeste);*/

// 18 - Trim (remove tudo o que não é texto em uma string)

/*const trimTeste = "  testando \n "

console.log(trimTeste); 
console.log(trimTeste.trim()); 

console.log(trimTeste.length); 
console.log(trimTeste.trim().length);*/

// 19 - PadStart
/*const testePadStart = "1"; 
const newNumber = testePadStart.padStart(4, "0");
console.log(newNumber); 

const testePadEnd = "1"; 
const newNumber2 = testePadEnd.padEnd(4, "0"); 
console.log(newNumber2);*/

// 20 - split

/*const frase = "O rato roeu a roupa do rei de roma"; 
const arrayDaFrase = frase.split(" "); 
console.log(arrayDaFrase);

// 21 - join 

const fraseDenovo = arrayDaFrase.join(" "); 
console.log(fraseDenovo); 

const itensParaComprar = ["Mouse", "Teclado", "Monitor"]; 

const fraseDeCompra = `Precisamos comprar: ${itensParaComprar.join(", ")}`
console.log(fraseDeCompra)*/

// 22 - repeat

/*const palavra = "Testando "; 
console.log(palavra.repeat(5));*/

// 23 - Rest operator

/*const somaInfinita = (...args) => {
  let total = 0;
  for (let i = 0; i < args.length; i++) 
  total += args[i];

  return total; 
};

console.log(somaInfinita(1, 2, 3));
console.log(somaInfinita(1, 20, 63, 52, 100, 250, 552, 990, 789, 899, 900));*/

// 24 - for of

