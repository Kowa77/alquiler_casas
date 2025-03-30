const express = require('express');
const path = require('path');
fs = require('fs-extra');

const app = express();
const port = 3000;

app.use(express.json());

app.use(express.static('public'));

const Casas = require('./public/js/casa');
const casas = new Casas();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/propiedades', (req, res) => {
    res.sendFile(path.join(__dirname, './public/propiedades.html'));
});

app.get('/contactos', (req, res) => {
    res.sendFile(path.join(__dirname, './public/contactos.html'));
});

// Ruta para obtener la lista de casas (cambiado a /casas)
app.get('/casas', async (req, res) => {
    try {
        const datos = await casas.listar();
        res.json(datos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener las casas' });
    }
});

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});