// Cálculo do Índice de Massa Corporal (IMC) usando DOM


document.addEventListener('DOMContentLoaded', function() {
    
    const form = document.getElementById('imcForm');
    const pesoInput = document.getElementById('peso');
    const alturaInput = document.getElementById('altura');
    const resultado = document.getElementById('resultado');
    const erro = document.getElementById('erro');
    const valorIMC = document.getElementById('valorIMC');
    const classificacaoIMC = document.getElementById('classificacaoIMC');

   
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        
        let peso = parseFloat(pesoInput.value);
        let altura = parseFloat(alturaInput.value);

      
        resultado.classList.add('hidden');
        erro.classList.add('hidden');

       
        if (!isNaN(peso) && !isNaN(altura) && altura > 0 && peso > 0) {
           
            const imc = (peso / (altura * altura)).toFixed(2);
            
           
            let classificacao = imc < 18.5 ? "Abaixo do peso" : 
                               imc < 25 ? "Peso normal" : 
                               imc < 30 ? "Sobrepeso" : "Obesidade";
            
           
            valorIMC.textContent = imc;
            classificacaoIMC.textContent = classificacao;
            resultado.classList.remove('hidden');
            
            
            classificacaoIMC.style.color = 
                imc < 18.5 ? "#3498db" :
                imc < 25 ? "#27ae60" :
                imc < 30 ? "#f39c12" : "#e74c3c";
        } else {
            
            erro.classList.remove('hidden');
        }
    });
});