let botonAvanzar = document.getElementById("avanzar");
let botonRetroceder = document.getElementById("retroceder");
let fotos = [
    "../media/img/certificat_FRONT-END.png",
    "../media/img/certificat_WEB-DEVELOPMENT.png",
    "../media/img/certificat_HTML.png",
    "../media/img/certificat_CSS.png",
    "../media/img/certificat_JS.png",
    "../media/img/certificat_JS-2.png",
];
let div = document.getElementById("divParaImg");
let img = document.createElement("img");
let posicionActual = 0;
function avanzarFoto() {
    if (posicionActual >= (fotos.length - 1)) {
        posicionActual = 0;
    }
    else {
        posicionActual = posicionActual + 1;
    }
    renderizarImagen();
}
function retrocederFoto() {
    if (posicionActual <= 0) {
        posicionActual = fotos.length - 1;
    }
    else {
        posicionActual--;
    }
    renderizarImagen();
}
function renderizarImagen() {
    img.src = fotos[posicionActual];
    div.innerHTML = '';
    div.appendChild(img);
    console.log('imagen mostrada', img.src);
}
renderizarImagen();
botonAvanzar.addEventListener("click", function(event) {
    event.preventDefault();
    avanzarFoto();
});
botonRetroceder.addEventListener("click", function(event) {
    event.preventDefault();
    retrocederFoto();
});
setInterval(avanzarFoto, 6000);