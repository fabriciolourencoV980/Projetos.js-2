let altura = 5;  

for (let i = 1; i <= altura; i++) {
  let espacos = ' '.repeat(altura - i);
  let asteriscos = '*'.repeat(2 * i - 1);
  console.log(espacos + asteriscos);
}
