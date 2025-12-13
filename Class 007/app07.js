// Importar dependencias
const express = require('express');
const hbs = require('hbs');
const path = require('path');

// Inicializar app
const app = express();
const PORT = 3000;

// Configurar Handlebars como motor de vistas
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Ruta principal
app.get('/', (req, res) => {
    res.render('index', {
        titulo: 'Ferretería El Cóndor',
        categorias: [
            {
                nombre: 'Tuberías',
                productos: ['PVC', 'Cobre', 'Hierro Galvanizado']
            },
            {
                nombre: 'Pinturas',
                productos: ['Látex', 'Esmalte', 'Acrílica']
            },
            {
                nombre: 'Pernos',
                productos: ['Hexagonales', 'Allen', 'Rosca fina']
            },
            {
                nombre: 'Electricidad',
                productos: ['Cables', 'Interruptores', 'Tomacorrientes']
            }
        ]
    });
});

// Levantar servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
