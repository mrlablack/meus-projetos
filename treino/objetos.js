/*let pessoa={ }

pessoa={ nome :"Andeson",morada:"trindade",sexo:"M",peso:"128kl" , idade(ano){
    var anoactual= new Date()
    var a=anoactual.getFullYear()
    var ida=a-ano
    return ida

}     }

console.log(pessoa)

 */
// array de objetos
const itens=[
    { nome:" pen",quantity:"12",price:"110"},
    { nome:" computer",quantity:"3",price:"7000"} ,
    { nome:" mouse",quantity:"13",price:"170"},
    { nome:" HD",quantity:"1",price:"330"} 
]
quantitys=itens.reduce((soma,actural)=>/* soma todos os valor de price*/ {
    return parseInt( soma)+parseInt (actural.price)
},0)

var c=1222
document.querySelectorAll(`h1`).innerHTML=c



