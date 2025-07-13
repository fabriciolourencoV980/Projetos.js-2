// 1 - var, let e const

/*var x = 10; 
var y = 15; 

if(y > 10){ 
    var x = 5;
    console.log(x); 
}

console.log(x); 

let a = 10; 
let b = 15; 

if(b > 10){ 
    let a = 5;
    console.log(a); 
}

console.log(a); 

function logname(){
    const name = "Pedro"; 
    console.log(name)
}; 

const name = "Fabricio"; 
logname(); 
console.log(name);*/

// 2 - Arrow functions

/*const sum = function (a, b){
    return a + b
}; 

const arrowSum = (a, b) => a + b; 

console.log(sum(5,5)); 
console.log(arrowSum(5, 5)); 

const greeting = (name) => {
    if(name){
        return `Hello ${name}!`
    } else {
        return "Hello"
    }

}; 

console.log(greeting("Fabricio")); 
console.log(greeting()); 

const user = {
    name: "Theo", 
    sayUserName(){
        setTimeout(function(){
            
            console.log(this);
            console.log(`Username: ${this.name}`);

        }, 1000);
    },
    sayUserNameArrow(){
        setTimeout(() => {
            console.log(this)
            console.log(`Username: ${this.name}`)
        }, 2000)
    },
};

user.sayUserName(); 
user.sayUserNameArrow();*/

// 3 - Filter
/*const arr = [1, 2, 3, 4, 5, 6];

const highNumbers = arr.filter((n) => {
  if (n >= 3) {
    return n;
  }
});

const lowNumbers = arr.filter((n) => {
  if (n <= 3) {
    return n;
  }
});

console.log(lowNumbers);
console.log(highNumbers);

const users = [
  { name: "Fabrício", avaible: true },
  { name: "Jota", avaible: false },
  { name: "Vitor", avaible: true },
  { name: "Pedro", avaible: false },
  { name: "Leon", avaible: true },
];

const avaibleUsers = users.filter((users) => users.avaible); 
console.log(avaibleUsers);*/

// 4 - Map
/*const products = [
  { name: "Camisa", price: 10.99, category: "Roupas" },
  { name: "Chaleira Elétrica", price: 150, category: "Eletro" },
  { name: "Fogão", price: 499, category: "Eletro" },
  { name: "Calça Jeans", price: 87.99, category: "Roupas" },
];

products.map((product) => {
    if(product.category === "Roupas"){
        product.Onsale = true; 
    }
}); 

console.log(products);*/

// 5 - Template Literals
/*const userName = "Fabrício"; 
const age = 20; 

console.log(`O nome do usuário é ${userName} e a sua idade é ${age}.`);*/

// 6 - Destructuring
/*const fruits = ["Maça", "Mamão", "Laranja"]; 
const [f1, f2, f3] = fruits; 
console.log(f1, f3); 

const productDetails = {
    name: "Mouse", 
    price: 39.99, 
    category: "Periférico", 
    color: "Cinza"
}

const {name: productName, price, category, color} = productDetails;
console.log(`O nome do produto é ${productName}, ele custa ${price}, e a cor é ${color}`)*/

// 7 - Spread Operator
/*const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

const a3 = [...a1, ...a2];
console.log(a3);

const a4 = [0, ...a3, 7];
console.log(a4);

const carName = { nome: "Gol" };
const carBrand = { brand: "VW" };
const otherInfos = {km: 1000000, price: 49.000};

const car = {...carName, ...carBrand, ...otherInfos}; 
console.log(car); */

// 8 - Classes
/*class Product { 
    constructor(name, price){
        this.name = name; 
        this.price = price;
    }

    productWithDiscount(discount){
        return this.price * ((100 - discount) / 100)
    }
}; 

const shirt = new Product("Camisa gola V", 20); 
console.log(shirt);
console.log(shirt.productWithDiscount(10)); 
console.log(shirt.productWithDiscount(15)); 

// 9 - Herança

class ProductWithAttributes extends Product {
  constructor(name, price, colors) {
    super(name, price);
    this.colors = colors;
  }

  showColors() {
    console.log("As cores são:");
    this.colors.array.forEach((color) => {
      console.log(color);
    });
  }
}

const hat = new ProductWithAttributes("Chapéu", 29.99, [
  "Preto",
  "Amarelo",
  "Verde",
]);
console.log(hat);
console.log(hat.name); 
console.log(hat.colors);*/