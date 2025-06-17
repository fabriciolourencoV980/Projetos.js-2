// 1 - Movendo-se pelo DOM
/*console.log(document.body[1]); 
console.log(document.body.childNodes[1].childNodes);
console.log(document.body.childNodes[1].childNodes[1].textContent);*/

// 2 - Selecionando por tag 
const listaItens = document.getElementsByTagName("li");
console.log(listaItens); 

// 3 - selecionando por ID

/* const title = document.getElementById("title"); 
console.log(title); */

// 4 - selecionando elementos por classe 
const products = document.getElementsByClassName("product"); 
console.log(products); 

// 5 - selecionando elementos por CSS 
const productQuery = document.querySelectorAll(".product"); 
console.log(productQuery); 

const mainContainer = document.querySelector("#main-container"); 
console.log(mainContainer);

// 6 - InsertBefore 
/*const p = document.createElement("p"); 
const header = title.parentElement; 
header.insertBefore(p, title); 

// 7 - AppendChild
const navLinks = document.querySelector("nav ul"); 
const li = document.createElement("li"); 
navLinks.appendChild(li); 

// 8 - replaceChield
const h2 = document.createElement("h2"); 
h2.textContent = "Meu novo Título!"; 
header.replaceChild(h2, title);

// 9 - creatTextNode
const myText = document.createTextNode("Agora vamos criar mais um título!");
console.log(myText); 
const h3 = document.createElement("h3"); 
h3.appendChild(myText); 
mainContainer.appendChild(h3); 

// 10 - Trabalhando com atributos 
const firstLink = navLinks.querySelector("a"); 
console.log(firstLink); 
firstLink.setAttribute("href","https://www.google.com"); 
console.log(firstLink.getAttribute("href")); 
firstLink.setAttribute("target", "_blank"); 

// 11 - altura e largura 
const footer = document.querySelector("footer"); 
console.log(footer.offsetHeight); 
console.log(footer.offsetWidth); 

console.log(footer.clientWidth); 
console.log(footer.clientHeight);*/

// 12 - getClientBoundingRect 
const product1 = products[0]
console.log(product1.getBoundingClientRect());

// 13 - CSS com JS
mainContainer.style.color = "red"; 
mainContainer.style.backgroundColor = "#333"; 
mainContainer.style.paddingBottom = "15px"; 

// 14 - alterando estilos de varios elementos 
for(const li of listaItens){
    li.style.backgroundColor = "red"; 
}