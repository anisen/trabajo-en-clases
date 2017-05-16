function principal(){
	var ultimo=document.querySelector("#menuPrincipal ul li:last-child");
	ultimo.addEventListener("mouseover", function(){
      alert("hola es el menu");
	});
}
principal();