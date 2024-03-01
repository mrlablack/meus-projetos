var agora=new Date()
var hora= agora.getHours()
 var minuts =agora.getMinutes()
console.log(`Sao exatamente ${hora}  horas e ${minuts} `+` minutuos`)
if( hora<12){
console.log(" BOM DIA..!(:")
}else if(hora<=17){
    console.log("BOA TARDE..(:")

}else{
    console.log("BOA NOITE..!!(:")
} 


