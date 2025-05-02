
function aniversario(idade, ano = 365){
    return idade * ano
}

const resposta = aniversario(45); 
console.log(`A sua idade em dias é: ${resposta}, sua idade em números é ${resposta / 365}`);