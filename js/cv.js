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
const imgContainer = document.createElement("div");
imgContainer.style.display = "flex";
imgContainer.style.transition = "transform 0.5s ease";
imgContainer.style.width = `${fotos.length * 100}%`;
fotos.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.style.width = `${100 / fotos.length}%`;
    imgContainer.appendChild(img);
});
document.getElementById("divParaImg").appendChild(imgContainer);
let posicionActual = 0;
let intervalId = setInterval(() => cambiarFoto(1), 6000);
const cambiarFoto = (avance) => {
    posicionActual = (posicionActual + avance + fotos.length) % fotos.length;
    imgContainer.style.transform = `translateX(-${(posicionActual * 100) / fotos.length}%)`;
    
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