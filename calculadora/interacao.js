
document.addEventListener(`keydown`,(event)=>{
    console.log(event.code)
    switch (event.code) {
   case `Digit1`:
    insert(1)
            
   break;case `Digit2`:
  insert(2)
            
  break;
  case `Digit3`:
insert(3)
                
  break;
               
  case `Digit4`:
                  
  insert(4)
                    
                   
  break;
                    
  case `Digit1`:
                        
  insert(5)
                        
                        
  break;
                        
  case `Digit1`:
      insert(6)
                            
    break;
    case `Digit1`:
     insert(7)
                                
     break;
 case `Digit1`:
      insert(8)
                                    
                                   
      break;

                                                                                        
    case `Digit9`:
     insert(1)
            
     break;
 case `Digit0`:
    insert(1)  
     break;
    
     case `BracketLeft`:
        insert(`+`)
        
        break;
        case `Slash`:
            insert(`-`)
            
            break;
    

    
        default:
            break;
    }

})
function insert(num) {
    
    
    var numero=document.getElementById(`resultado`).innerHTML

    document.getElementById(`resultado`).innerHTML=numero+num;
    // vai pegar o que ja tem e adicionar novos o (num)
}

    
        
    

function apagar(params) {
    document.getElementById(`resultado`).innerHTML="  "

}
function limpar(params) {
    var resultado =document.getElementById(`resultado`).innerHTML;
    document.getElementById(`resultado`).innerHTML=resultado.substring(0,resultado.length-1)// vai pegar td o
                                                                                        //  os caracter e diminuir um
}
function calcular(params) {
    var resultado= document.getElementById(`resultado`).innerHTML
    if (resultado) {
        document.getElementById(`resultado`).innerHTML =eval(resultado) //  o metodo eval vai fazer todo o calculo so  se 
                                                                        //tiver algo na var resultado 
    }
    else{
        document.getElementById(`resultado`).innerHTML= ":)"
    }
    
}
