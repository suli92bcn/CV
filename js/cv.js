import * as cookies from './cookies.js';
cookies.initCookieBar();

const fotos = [
    "media/img/certificat_FRONT-END.png",
    "media/img/certificat_WEB-DEVELOPMENT.png",
    "media/img/certificat_HTML.png",
    "media/img/certificat_CSS.png",
    "media/img/certificat_JS.png",
    "media/img/certificat_JS-2.png",
];
const img = document.createElement("img");
document.getElementById("divParaImg").appendChild(img);
let posicionActual = 0;
let intervalId = setInterval(() => cambiarFoto(1), 6000);
const cambiarFoto = (avance) => {
    posicionActual = (posicionActual + avance + fotos.length) % fotos.length;
    img.src = fotos[posicionActual];
    clearInterval(intervalId);
    intervalId = setInterval(() => cambiarFoto(1), 6000);
};
['avanzar', 'retroceder'].forEach((id, i) => 
    document.getElementById(id).addEventListener("click", (e) => {
        e.preventDefault();
        cambiarFoto(i === 0 ? 1 : -1);
    })
);
cambiarFoto(0);
