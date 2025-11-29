// Cálculo do Índice de Massa Corporal (IMC) usando DOM

// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona os elementos do DOM
    const form = document.getElementById('imcForm');
    const pesoInput = document.getElementById('peso');
    const alturaInput = document.getElementById('altura');
    const resultado = document.getElementById('resultado');
    const erro = document.getElementById('erro');
    const valorIMC = document.getElementById('valorIMC');
    const classificacaoIMC = document.getElementById('classificacaoIMC');

    // Adiciona evento de submit ao formulário
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Previne o comportamento padrão do formulário
        
        // Obtém os valores dos inputs
        let peso = parseFloat(pesoInput.value);
        let altura = parseFloat(alturaInput.value);

        // Esconde as mensagens anteriores
        resultado.classList.add('hidden');
        erro.classList.add('hidden');

        // Valida os valores
        if (!isNaN(peso) && !isNaN(altura) && altura > 0 && peso > 0) {
            // Calcula o IMC
            const imc = (peso / (altura * altura)).toFixed(2);
            
            // Define a classificação
            let classificacao = imc < 18.5 ? "Abaixo do peso" : 
                               imc < 25 ? "Peso normal" : 
                               imc < 30 ? "Sobrepeso" : "Obesidade";
            
            // Exibe o resultado no DOM
            valorIMC.textContent = imc;
            classificacaoIMC.textContent = classificacao;
            resultado.classList.remove('hidden');
            
            // Adiciona classe de cor baseada na classificação
            classificacaoIMC.style.color = 
                imc < 18.5 ? "#3498db" :
                imc < 25 ? "#27ae60" :
                imc < 30 ? "#f39c12" : "#e74c3c";
        } else {
            // Exibe mensagem de erro
            erro.classList.remove('hidden');
        }
    });
});