// Sleção de elementos 
const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number"); 
const multiplicationInput = document.querySelector("#multiplicator"); 



// Funções




// Eventos
multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault(); 

    const multiplicationNumber = +numberInput.value;
    const multiplicatiorNumber = +multiplicationInput.value; 

    if(!multiplicationNumber || !multiplicatiorNumber) return;

    console.log(multiplicationNumber, multiplicatiorNumber)
}); 