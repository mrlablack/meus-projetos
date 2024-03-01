function fact(n){
    let fa=1
    for (let index = n; index > 1;index--){
    fa*=index
}
return fa
}
console.log(fact(4))