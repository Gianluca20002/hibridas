const http = require('http');
const ProductManager = require('./ProductManager'); 
const manager = new ProductManager(); 

manager.readJSON();

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Bienvenido a la API de Productos');
    }

    else if (req.url === '/products' && req.method === 'GET') {
        res.writeHead(200);
        res.end(JSON.stringify(manager.getProducts()));
    }
    
    else if (req.url.startsWith('/products/') && req.method === 'GET') {
        const id = parseInt(req.url.split('/')[2]); 
        const product = manager.getProductById(id);

        if (product) {
            res.writeHead(200);
            res.end(JSON.stringify(product));
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Producto no encontrado');
        }
    }
    
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Ruta no encontrada');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
