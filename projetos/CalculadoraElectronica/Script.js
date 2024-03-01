var simbolo = false
var escreva = true
document.getElementById('Display').innerText = 0
var resultado

 function escrever(numero){
 var botao = document.getElementById('Display').innerHTML
 
  if (botao === "0"){
       document.getElementById('Display').innerHTML =  numero
    
  } 
  else if( botao===resultado){
  document.getElementById('Display').innerHTML = numero
  
  }else{
    document.getElementById('Display').innerHTML =  botao + numero
  }
  
     simbolo = false
     escreva = true
  }

function escreverSimbolo(signal){
  var botao = document.getElementById('Display').innerHTML
  if(simbolo == false){
    simbolo = true
  document.getElementById('Display').innerHTML =  botao + signal
     }
  }

function calcular(){
    simbolo = false
    escreva = false
    var aux = document.getElementById('Display').innerHTML
    document.getElementById('Display').innerText = eval (aux)
    resultado=document.getElementById(`Display`).innerText;

}

function limpar(){
  var botao = document.getElementById('Display').innerHTML
  simbolo = false
var a = document.getElementById('Display').innerText = null  
document.getElementById('Display').innerText = 0
}

function apagar(){
  var display= document.getElementById("Display").innerHTML
  document.getElementById("Display").innerHTML=display.substring(0,display.length-1)

  if(display.length == 1){
    limpar()
  }
}