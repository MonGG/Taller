
//se muestra el 

    window.onload = init;
function init() {
var view = document.getElementById('view');
var area = document.getElementById('area');
view.onclick = edit;
document.onkeydown = function(e) {
e = e || event;
// validación de teclas
if(e.keyCode == 27) {
cancel();
return false;
}
if ((e.ctrlKey && e.keyCode == 'E'.charCodeAt(0)) && !area.offsetHeight) {
edit();


return false;
}
if((e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)) && area.offsetHeight) {
save();
return false;
}
}
//función para editar el textarea
function edit() {
//Ocultar el elemento div
view.style.display = 'none';
//Dibujar el campo textarea y ponerle estilos
area.value = view.innerHTML;
area.style.display = 'block';
area.style.height = '80px';
area.style.padding = '6px';
area.style.width = '444px';
area.focus();
}
//función para guadar el comentario
function save() {
area.style.display = 'none';
view.innerHTML = area.value;
view.style.display = 'block';
view.style.letterSpacing = '1.2px';
}
//función para cancelar el comentario
function cancel() {
area.style.display = 'none';
view.style.display = 'block';

}
}