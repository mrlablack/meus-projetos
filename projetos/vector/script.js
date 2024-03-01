let num=document.querySelector(`input#texn`)
let lista= document.querySelector(`#lista`)
let res= document.querySelector(`#res`)
let valores=[]


function isNumero(n){
    if(Number(n)>=1 && Number(n)<=100){
        return true
    }else{
        return false
    }
}
function islist(n,l){
  if(l.indexOf(Number(n))!= -1){
    return true
  }else{
    return false
  }
    
}
function adicionar(){
    if(Number(num.value)>1 && Number(num.value)<100){
    valores.push(Number(num.value))
    let iten=document.createElement(`option`)
    iten.tex=`valor ${num.value}adicionado`
    lista.appendChild(iten)

    }else{
        alert("valor invalido ou ja encontrado")
    }

}