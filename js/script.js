document .addEventListener('DOMContentLoaded',function(){
    var boton = document.getElementById('miBoton');
    boton.addEventListener('click',cambiarContenido);
});

function cambiarContenido(){
    var parrafo=document.getElementById('Parrafo');
    parrafo.innerHTML="El contenido ha sido cambiado";
    parrafo.style.color="red"
}