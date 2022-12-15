// Instância (pedaço) da classe Calculadora
const calculadora = new Calculadora ();

//Função que vai ser chamada quando o botão for clicado
function calcular () {
    //Pegar o valor do input do html
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;

    //Executar a função calcularImc de dentro da instância calculadora
    const imc = calculadora.calcularImc (peso, altura); 
    //Elemento texto vai mostrar o resultado do imc
    const elementoTextoImc = document.getElementById ("textoImc");
    elementoTextoImc.textContent = imc.toFixed(2);    
    
    //classificação do imc
    if (imc < 18.5) {        
        const elementoTextoClassificacao = document.getElementById ("textoClassificacao");
        elementoTextoClassificacao.textContent = ("Classificação: Abaixo do peso normal");
    }
    if (imc >= 18.5 && imc <= 24.99) {        
        const elementoTextoClassificacao = document.getElementById ("textoClassificacao");
        elementoTextoClassificacao.textContent = ("Classificação: Peso Normal");
    }
    if (imc >= 25 && imc <= 29.99) {        
        const elementoTextoClassificacao = document.getElementById ("textoClassificacao");
        elementoTextoClassificacao.textContent = ("Classificação: Excesso de peso");
    }
    if (imc > 30) {        
        const elementoTextoClassificacao = document.getElementById ("textoClassificacao");
        elementoTextoClassificacao.textContent = ("Classificação: Obesidade");
    }

    
}

const botao = document.getElementById("botao");
botao.addEventListener("click", () => calcular())
