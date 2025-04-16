import express from 'express';  // Error si estás usando 'require' y 'import'
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('¡Hola Mundo desde Docker! 1'));
app.get('/health', (req, res) => res.send({ status: 'ok' }));

console.log('Este es un log que no debería estar en producción'); // Error por `console.log()`

const unusedVariable = 'Esta variable nunca se usa'; // Error por variable no utilizada

if (require.main === module) {
    app.listen(PORT, () => console.log(`App corriendo en puerto ${PORT}`));
}
module.exports = app;  // Puede generar un error si estás usando ES Modules y 'module.exports'
