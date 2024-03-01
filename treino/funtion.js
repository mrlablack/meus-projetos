/*function num(  n1 ,n2) {
    return n1+n2
  
}
console.log(num(18,1))
*/

/*
function par(num){
    if(num%2==0){
    return console.log(" E par")
} else{
    return console.log("É IMPAR")
}

}
par(1087)
*/

/*
function num(  n1=0 ,n2=0)/*si eu nao passar os valores vai ser 0 {
    return n1+n2
  
}
console.log(num(18,13))
*/

/*
 var a=function factorial(n){
    if (n==1) {
        return 1
        
    }else{
        return n*factorial(n-1)
    }
}
console.log(a(4))
*/

function factorial(num) {
   var fat = 1
   for(var p=num;p>1;p--){

    fat *= num

   }
   return fat 
}

console.log(factorial(3))


