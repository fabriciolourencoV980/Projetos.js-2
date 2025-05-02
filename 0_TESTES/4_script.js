
function verificandoValor(x1, x2){

    if(x1 != x2){
        return false
    } else if(x1 > x2){
        return false
    } else if(x1 === x2){
        return true 
    } else if (x1 !== "x2"){
        return false
    }
}; 

console.log(verificandoValor(0, 0));
console.log(verificandoValor(0, 1));
console.log(verificandoValor(0, "0")); 