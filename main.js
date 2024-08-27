const ProductManager = require('./ProductManager');

const manager = new ProductManager();

try {
    manager.addProduct({
        id: 1,
        title: 'Teclado',
        description: 'Teclado Mecánico',
        price: 25000,
        image: 'teclado.jpg',
        stock: 25
    });

    manager.addProduct({
        id: 2,
        title: 'Mouse',
        description: 'Mouse Inalámbrico',
        price: 15000,
        image: 'mouse.jpg',
        stock: 15
    });

 
    manager.writeJSON();

   
    manager.readJSON();


    console.log('Todos los productos después de leer desde el JSON:', manager.getProducts());


    console.log('Producto con ID 1:', manager.getProductById(1));

} catch (error) {
    console.error(error.message);
}


manager.getProductById(3);
