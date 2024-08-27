const fs = require('fs');

class ProductManager {
    constructor() {
        this.products = [];
        this.filePath = 'products.json';
    }

    addProduct(product) {
     
        const { id, title, description, price, image, stock } = product;
        if (!id || !title || !description || !price || !image || !stock) {
            throw new Error('Todos los campos son obligatorios.');
        }

       
        const productExists = this.products.some(p => p.id === id);
        if (productExists) {
            throw new Error(`El producto con id ${id} ya existe.`);
        }

        this.products.push(product);
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(p => p.id === id);
        if (!product) {
            console.error('Not found');
            return null;
        }
        return product;
    }

    writeJSON() {
        fs.writeFileSync(this.filePath, JSON.stringify(this.products, null, 2), 'utf-8');
        console.log(`Productos escritos en ${this.filePath}`);
    }

    readJSON() {
        if (fs.existsSync(this.filePath)) {
            const data = fs.readFileSync(this.filePath, 'utf-8');
            this.products = JSON.parse(data);
            console.log(`Productos cargados desde ${this.filePath}`);
        } else {
            console.log(`El archivo ${this.filePath} no existe.`);
        }
    }
}

module.exports = ProductManager;
