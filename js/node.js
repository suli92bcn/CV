const crypto = require('crypto');

// Función para generar un nonce aleatorio
function generateNonce(length = 16) {
    return crypto.randomBytes(length).toString('base64url'); // Genera un nonce en base64url
}

// Ejemplo de uso
const nonce = generateNonce();
console.log(`Nonce generado: ${nonce}`);