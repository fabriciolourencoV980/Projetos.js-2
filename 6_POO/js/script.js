// 1 - Métodos 
/*const animal = {
    nome: "Bob", 
    cor: "Caramelo",
    latir: function(){
        console.log(`O cachorro ${animal.nome} da cor ${animal.cor} latiu!`)
    }
}; 
console.log(animal.nome); 
animal.latir();*/ 

// 2 - Aprofundando em Métodos 
/*const pessoa = {
    nome: "Fabrício",

    getNome: function(){
        return this.nome; 
    }, 

    setNome: function(novonome){
        this.nome = novonome;
    },
}; 
console.log(pessoa.nome);
console.log(pessoa.getNome()); 
pessoa.setNome("Joaquim");
console.log(pessoa.getNome()); */

// 3 - Prototype 
/*const text = "asd"; 
console.log(Object.getPrototypeOf(text)); 

const bool = true; 
console.log(Object.getPrototypeOf(bool));

const arr = []; 
console.log(Object.getPrototypeOf(arr)); 

const len = length; 
console.log(Object.getPrototypeOf(len)); */

// 4 - Mais sobre Prototype 
/*const myObject = {
    a: "b"
};
console.log(Object.getPrototypeOf(myObject)); 
console.log(Object.getPrototypeOf(myObject) === Object.prototype); 

const mySeconObject = Object.create(myObject); 
console.log(mySeconObject); 
console.log(mySeconObject.a); 
console.log(Object.getPrototypeOf(mySeconObject) === myObject);*/

// 5 - Classes Básicas 
/*const cachorro = {
    raca: null,
    patas: 4, 
    cor: null, 
}; 

const pastorAlemao = Object.create(cachorro); 
pastorAlemao.raca = "Pastor Alemão"; 
pastorAlemao.cor = "Caramelo"
console.log(pastorAlemao); 
// console.log(pastorAlemao.patas); 

const bulldog = Object.create(cachorro); 
bulldog.raca = "Bulldog"; 
bulldog.cor = "Preto"; 
console.log(bulldog); */

// 6 - Funções construtoras - função como classe
/*function criarCachorro(nome, raca, cor){
    const cachorro = Object.create({})

    cachorro.nome = nome; 
    cachorro.raca = raca;
    cachorro.cor = cor; 

    return cachorro
};

const bob = criarCachorro("Bob", "Pastor Alemão", "Caramelo"); 
console.log(bob); 

const bravo = criarCachorro("Bravo", "Bulldog", "Preto"); 
console.log(bravo); 

const jack = criarCachorro("Noodle", "Poodle", "Branco"); 
console.log(jack); 

console.log(Object.getPrototypeOf(jack))*/

// 7 - funções como classe 
/*function Cachorro(nome, raca){
    this.nome = nome;  
    this.raca = raca; 
}; 

const husky = new Cachorro("Ozzy", "husky"); 
console.log(husky);

// 8 - Metodos na função construtora 
Cachorro.prototype.uivar = function(){
    console.log("Auuuu!")
}
console.log(Cachorro.prototype); 
husky.uivar();*/

// 9 - Classes ES6 
/*class CachorroClasse {
    constructor(nome, raca){
        this.nome = nome; 
        this.raca = raca; 
    }
}

const jef = new CachorroClasse("Jef", "Labrador"); 
console.log(jef); 
console.log(Object.getPrototypeOf(jef))*/

// 10 - Mais sobre classes
class Caminhao{
    constructor(eixos, cor){
        this.eixos = eixos; 
        this.cor = cor; 
    }
    
       descreverCaminhao(){
        console.log(`Este caminhão tem ${this.eixos} e é da cor ${this.cor}.`)
    }
}

const mercedes = new Caminhao( 4 , "Vermelho"); 
console.log(mercedes); 
mercedes.descreverCaminhao()
const scania = new Caminhao( 6, "branca"); 
console.log(scania); 
scania.descreverCaminhao();

Caminhao.prototype.motor = 4.0; 

const c3 = new Caminhao(6, "Azul"); 
console.log(c3.motor); 