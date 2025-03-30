import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

const apiUrl = 'https://realtor-search.p.rapidapi.com/properties/nearby-home-values?lat=40.23184&lon=-76.895774';
const apiKey = '5f65172225msh81fe62c02b89495p10d7c3jsnb0c843c64075';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/propiedades', (req, res) => {
    res.sendFile(path.join(__dirname, './public/propiedades.html'));
});

app.get('/contactos', (req, res) => {
    res.sendFile(path.join(__dirname, './public/contactos.html'));
});

app.get('/casas', async (req, res) => {
    try {
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'x-rapidapi-key': apiKey,
                'x-rapidapi-host': 'realtor-search.p.rapidapi.com'
            }
        });
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Error al obtener datos de la API' });
    }
});

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});