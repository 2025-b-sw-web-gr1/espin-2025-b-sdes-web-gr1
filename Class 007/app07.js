const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Configuración Handlebars
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Página principal
app.get('/', (req, res) => {
    res.render('index07', {
        titulo: 'Ferretería El Cóndor',
        categorias: [
            { nombre: 'Tuberías', ruta: 'tuberias' },
            { nombre: 'Pinturas', ruta: 'pinturas' },
            { nombre: 'Pernos', ruta: 'pernos' },
            { nombre: 'Electricidad', ruta: 'electricidad' }
        ]
    });
});

// Página por categoría
app.get('/categoria/:tipo', (req, res) => {
    const data = {
        tuberias: {
            titulo: 'Tuberías',
            descripcion: 'Materiales utilizados para conducción de agua y gas.',
            materiales: ['PVC', 'Cobre', 'Hierro Galvanizado'],
            imagen: '/tuberias.jpg'
        },
        pinturas: {
            titulo: 'Pinturas',
            descripcion: 'Pinturas para interiores y exteriores.',
            materiales: ['Látex', 'Esmalte', 'Acrílica'],
            imagen: '/pinturas.jpg'
        },
        pernos: {
            titulo: 'Pernos',
            descripcion: 'Elementos de fijación para distintas aplicaciones.',
            materiales: ['Hexagonales', 'Allen', 'Rosca fina'],
            imagen: '/pernos.jpg'
        },
        electricidad: {
            titulo: 'Electricidad',
            descripcion: 'Materiales eléctricos para instalaciones.',
            materiales: ['Cables', 'Interruptores', 'Tomacorrientes'],
            imagen: '/electricidad.jpg'
        }
    };

    const categoria = data[req.params.tipo];

    if (!categoria) {
        return res.send('Categoría no encontrada');
    }

    res.render('categoria07', categoria);
});

app.listen(PORT, () => {
    console.log(`Servidor activo en http://localhost:${PORT}`);
});
