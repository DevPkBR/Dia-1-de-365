const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite seu peso em kg: ", (pesoInput) => {
  rl.question("Digite sua altura em metros: ", (alturaInput) => {
    const peso = Number(pesoInput);
    const altura = Number(alturaInput);

    if (peso <= 0 || altura <= 0 || isNaN(peso) || isNaN(altura)) {
      console.log("Valores inválidos.");
    } else {
      const imc = peso / (altura * altura);
      let classificacao = "";

      if (imc < 18.5) classificacao = "Abaixo do peso";
      else if (imc < 25) classificacao = "Peso normal";
      else if (imc < 30) classificacao = "Sobrepeso";
      else if (imc < 35) classificacao = "Obesidade grau I";
      else if (imc < 40) classificacao = "Obesidade grau II";
      else classificacao = "Obesidade grau III";

      console.log(`IMC: ${imc.toFixed(2)} - ${classificacao}`);
    }

    rl.close();
  });
});
