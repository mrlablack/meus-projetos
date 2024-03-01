  
        function calcular(){
            
            var txtvel=window.document.querySelector(`input#vel`)
          var res=window.document.querySelector(`div#res`)
           var velo=Number(txtvel.value)
           if (velo >100) {
            res.innerHTML=`Sua velocidade é de ${velo} Km/hr Estas multado`  
           }else{
            res.innerHTML="<p> Sua velocidade é " + velo + "Km/hr "
            res.innerHTML+= " Dirija com moderacao (: "
           }
           nun 
    
        }
