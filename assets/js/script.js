var nomeInput = document.querySelector('#nome-pessoal')
var alturaInput = document.querySelector('#altura')
var pesoInput = document.querySelector('#peso')
var mudarCorCartao = document.querySelector('.cartao')
var resposta = document.querySelector('.resposta')

function verificar() {
    let nome = nomeInput.value
    let altura = parseFloat(alturaInput.value)
    altura = altura /= 100
    let peso = parseFloat(pesoInput.value)
    let massa = peso / (altura * altura)
    massa = massa.toFixed(2)


    let classificacao = ''

   if (massa < 18.50) {
    classificacao = 'Baixo peso'
    mudarCorCartao.style.background = '#1ec3ea'
   }else if (massa >= 18.50 && massa <= 24.9) {
    classificacao = 'Peso normal'
    mudarCorCartao.style.background = '#09c184'
   }else if(massa >= 25.0 && massa <= 29.9){
    classificacao = 'Sobrepeso'
    mudarCorCartao.style.background = '#f9d423'
   }else if(massa >= 30.0 && massa <= 34.9){
    classificacao = 'Obesidade Grau 1'
    mudarCorCartao.style.background = '#e6781e'
   }else if(massa >= 35.0 && massa <= 39.9){
    classificacao = 'Obesidade Grau 2'
    mudarCorCartao.style.background = '#ff703f'
   }else{
        classificacao = 'Obesidade Grau 3'
        mudarCorCartao.style.background = '#e02130'
   }
    
    resposta.innerHTML = `${nome} <br> possui índice de massa corporal igual a ${massa} <br> sendo classificado como: ${classificacao}`

}

