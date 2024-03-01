var pedido = [];

function mostrarpedidos(el){
  display= document.getElementById(el).style.display;
  if(display=="none"){
    document.getElementById(el).style.display=`block`;
  }
  else{
    document.getElementById(el).style.display=`none`;
  }
}

function requisitarItens(nome, preco) {
   pedido.push({nome:nome, preco: preco});
   alert("Você adicionou " + nome + " por " + preco + " dbrs" + " ao seu pedido.");
   mostrarPedido();
 }

 function mostrarPedido() {
   var lista = document.getElementById("lista");
   var total = document.getElementById("total");
   
   // Limpando a lista anterior
   lista.innerHTML = "";
   
   // Calculando o total do pedido
   var soma = 0;
   
   // Criando os elementos li para cada item do pedido
   for (var i = 0; i < pedido.length; i++) {
    var li = document.createElement("li");
    li.textContent = pedido[i].nome + " - " + pedido[i].preco +" bdrs";
    lista.appendChild(li);
    soma += pedido[i].preco;
    
    // Adicionando um botão de remover para cada item
    var botao = document.createElement("button");
    botao.textContent = "Remover";
    lista.appendChild(botao)
    
    // Adicionando um evento de clique ao botão de remover
    botao.addEventListener("click", function() {
      
      // Removendo o item do pedido
      var index = pedido.indexOf(pedido[i]);
      pedido.splice(index,1);
      
      // Atualizando a lista e o total
      mostrarPedido();
      
    });
    
  
  }
  
  // Atualizando o total
  total.textContent = "Total: " + soma + " dobras";
}

 
 
  

 


   


