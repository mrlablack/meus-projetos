
// o setTimeout ele executa ou ativa  uma funçao  uma vez em um determinado tempo
function ativarContagem(){
   // document.getElementById(`tempo`).innerHTML="começou a contar"
  //tempo = setTimeout(function () {
  //      document.getElementById(`tempo`).innerHTML="executou o setTimeout"
 //   },7000)
  tempo= setInterval(function(){
    var cronometro=document.getElementById(`tempo`).innerHTML
 var soma=parseInt(cronometro) + 1
 document.getElementById(`tempo`).innerHTML=soma
 },1000)
 

}

// o clearTimeout ele para a execuçao de uma funçao 
// o clearinterval para a execuçao de um intervalo de setinterval
function pararContagem() {
//clearTimeout(tempo)
//document.getElementById(`tempo`).innerHTML=0
clearInterval(tempo)

}