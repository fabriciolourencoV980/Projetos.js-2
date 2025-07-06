// 1 - Adicionando eventos
const btn = document.querySelector("#my-button")
btn.addEventListener("click", function(){
    console.log("Clicou!")
}); 

// 2 - Removendo Eventos 
const secondBtn = document.querySelector("#btn")

function imprimirMensagem(){
    console.log("Teste")
}; 

secondBtn.addEventListener("click", imprimirMensagem); 

const thirdBtn = document.querySelector("#other-btn")
thirdBtn.addEventListener("click", () => {
    console.log("Evento removido")
    secondBtn.removeEventListener("click", imprimirMensagem)
})


// 3 - argumento do evento

const myTitle = document.querySelector("#my-title")
myTitle.addEventListener("click", (event)=>{
    console.log(event);
    console.log(event.offsetX);
    console.log(event.pointerType);
    console.log(event.target);
})

// 4 - Propagação
const containerBtn = document.querySelector("#btn-container")
const btnInsideContainer = document.querySelector("#div-btn")

containerBtn.addEventListener("click", () => {
    console.log("Evento 1"); 
})

btnInsideContainer.addEventListener("click", (e) => {
    e.stopImmediatePropagation();
    console.log("Evento 2"); 
})

// 5 - Ações Default / Removendo evento padrão
const a = document.querySelector("a"); 
a.addEventListener("click", (e) => {
    e.preventDefault(); 
    console.log("Não alterou a Página!")
})

// 6 - Eventos de teclado
document.addEventListener("keyup", (e) => {
    console.log(`Soltou a tecla ${e.key}`)
})

document.addEventListener("keydown", (e) => {
    console.log(`Apertou a tecla ${e.key}`)
})

// 7 - Eventos do Mouse
const mouseEvent = document.querySelector("#mouse") ; 
mouseEvent.addEventListener("mousedown", ()=>{
    console.log("Pressionou o Botão")
})

document.querySelector("#mouse")
mouseEvent.addEventListener("mouseup", ()=>{
    console.log("Soltou o Botão")
})


mouseEvent.addEventListener("dblclick", () => {
    console.log("Clique Duplo")
})

// 8 - Movimento do mouse
/*document.addEventListener("mousemove", (e) => {
    console.log(`No eixo X ${e.x}`)
    console.log(`No eixo Y ${e.y}`)
})*/

// 9 - Eventos por scroll
window.addEventListener("scroll", () => {
    if(window.pageYOffset > 200){
        console.log("Passamos de 200 pixels")
    }
})

// 10 - Evento de focus blur
const input = document.querySelector("#my-input") 
input.addEventListener("focus",() => {
    console.log("Entrou no input")
})

input.addEventListener("blur",() => {
    console.log("Saiu no input")
}); 

// 11 - Eventos de carregamento de página

window.addEventListener("load", () => {
    console.log("A pagina carregou!")
})

window.addEventListener("beforeunload", (e) => {
    e.preventDefault(); 
    e.returnValue = "Teste"; 
})