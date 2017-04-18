var imgTotales = document.getElementsByClassName('img');
var eliminarElem = document.getElementsByClassName('x');

for (var i = 0; i < eliminarElem.length; i++) {
  imgTotales[i].addEventListener("click",ocultarImagen);
}
function ocultarImagen() {
  this.style.display = "none";
}

var botonRestaurar = document.getElementById('restaurando');
botonRestaurar.addEventListener("click",restaurar);

function restaurar(){
  for(var i=0; i < eliminarElem.length;i++){
      imgTotales[i].style.display="inline-block";
    }
}
