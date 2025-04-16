const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('¡Hola Mundo desde Docker!'));
app.get('/health', (req, res) => res.send({ status: 'ok' }));

// Provocar fallo en ESLint por `console.log()`
console.log('Este es un log que no debería estar en producción');

if (require.main === module) {
    app.listen(PORT, () => console.log(`App corriendo en puerto ${PORT}`));
}

module.exports = app;
//// Para ejecutar el servidor, usa el siguiente comando:

