function clicar() {
    var di=document.querySelector("#res")
    var nametxt= document.querySelector("#nome")
    var names
    names = nametxt.value;
    di.innerHTML=`${names}`;
}


