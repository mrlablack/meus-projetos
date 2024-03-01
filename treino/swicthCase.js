var semana= new Date()
var dia=semana.getDay()
switch (dia) {
    case 0:

        console.log(" hoje é domingo")
        break;

     case 1:
     console.log("hoje é segunda")
     break;
    case 2:
    console.log("hoje é terça")
    break;
    case 3:
        console.log("hoje é quarta")
        break;
        case 4 :
            console.log("hoje é quinta")
         break;
         case 5:
            console.log("hoje é sexta")
        break;
        case 6:
            console.log(" hoje è sabado")
      default:
        console.log("Dia invalido")
        break;
}