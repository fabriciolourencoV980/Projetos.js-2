function horasTrabalhadas(x1, x2 = 7.81){
    let soma = x1 * x2; 
    console.log(`O valor das suas horas trabalhadas pe igual a ${soma}`)
    let resultado = soma * 24
    console.log(`O valor das suas horas trabalhadas no mes é igual à: ${resultado}`)  
}

horasTrabalhadas(8);

//Caso 2

function converter(x1, x2) {
  console.log( `Digite quanto você recebe por mês: ${x1}\nAgora digite quantos dias você trabalha por mês: ${x2}\nVocê recebe um total de: ${x1/x2} por dia trabalhado`);
}; 

converter(1499.52,24);
