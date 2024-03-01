let vect=[4,8,79,2,12,9,0]


var elem=8
vect.push(100)//para adcionar em elemento
vect.sort()//para ordenar
vect.indexOf()//para verificar si um elemento existe .
vect.pop(1)
if(vect.indexOf(elem)==-1){
    console.log(" Elemento nao existe")
}else{
    console.log(`O Elemento ${elem} existe e esta na posicao ${vect.indexOf(elem)} do array`)
}

for(let num=0;num<vect.length;num++){
    console.log(` Na posicao ${num} temos elemento ${vect[num]} `)
    
}

for(let num in vect){
    console.log(` Na posicao ${num} temos elemento ${vect[num]} `)
}

