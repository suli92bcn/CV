export function getCookie(c_name) {
    var c_value = document.cookie;
    console.log("Valor de todas las cookies:", c_value); // Agrega esto para ver todas las cookies
    var c_start = c_value.indexOf(" " + c_name + "=");
    if (c_start == -1) {
        c_start = c_value.indexOf(c_name + "=");
    }
    if (c_start == -1) {
        c_value = null;
    } else {
        c_start = c_value.indexOf("=", c_start) + 1;
        var c_end = c_value.indexOf(";", c_start);
        if (c_end == -1) {
            c_end = c_value.length;
        }
        c_value = unescape(c_value.substring(c_start, c_end));
    }
    console.log("Valor de la cookie solicitada:", c_value); // Agrega esto para ver el valor de la cookie solicitada
    return c_value;
}
export function setCookie(c_name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = c_name + "=" + c_value + ";path=/;SameSite=Lax";
    console.log("Cookie establecida:", document.cookie); // Agrega esto para confirmar que la cookie se ha establecido
}
export function checkAndShowCookieBar() {
    if (getCookie('tiendaaviso') !== "1") {
        document.getElementById("barraaceptacion").style.display = "block";
        console.log("Mostrando la barra de aceptación"); // Agrega esto para confirmar que la barra se está mostrando
    } else {
        document.getElementById("barraaceptacion").style.display = "none";
        console.log("La cookie ya está establecida, no se muestra la barra de aceptación"); // Agrega esto para confirmar que la cookie ya está establecida
    }
}
export function PonerCookie(event) {
    if (event) event.preventDefault();
    setCookie('tiendaaviso', '1', 365);
    console.log("Cookie 'tiendaaviso' establecida a 1 por 365 días"); // Agrega esto para confirmar que la cookie se ha establecido
    document.getElementById("barraaceptacion").style.display = "none";
    console.log("Ocultando la barra de aceptación"); // Agrega esto para confirmar que la barra se está ocultando
}
export function initCookieBar() {
    document.addEventListener('DOMContentLoaded', () => {
        checkAndShowCookieBar();
        document.getElementById("aceptarBtn").addEventListener('click', PonerCookie);
        console.log("Evento de click añadido al botón de aceptar"); // Agrega esto para confirmar que el evento se ha añadido
    });
}
