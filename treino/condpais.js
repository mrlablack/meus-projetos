function verificar() {
    var pais= window.document.querySelector("#pais")  
    var ver=window.document.querySelector("#ver")
    pais=pais.value
    if(pais!="Sao tome"){
        ver.innerHTML=`voce é Estrangeiro`
    }else{
        ver.innerHTML=`voce é Santomense`
    }
  
}


