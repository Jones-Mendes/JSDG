// Cálculo do Índice de Massa Corporal (IMC)

let peso = parseFloat(prompt("Digite seu peso em kg:"));
let altura = parseFloat(prompt("Digite sua altura em metros:"));

if (!isNaN(peso) && !isNaN(altura) && altura > 0) {
    const imc = (peso / (altura * altura)).toFixed(2);
    let classificacao = imc < 18.5 ? "Abaixo do peso" : 
                       imc < 25 ? "Peso normal" : 
                       imc < 30 ? "Sobrepeso" : "Obesidade";
    
    alert(`IMC: ${imc}\nClassificação: ${classificacao}`);
} else {
    alert("Valores inválidos! Use números e altura maior que zero.");
}