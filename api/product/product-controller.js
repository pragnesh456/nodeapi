const product = require('./product');
const multer = require('multer');
class ProductController{
    constructor(router){
        router.get('/api/v1/getproducts',product.getProducts);
        router.get('/api/v1/getproduct/:id',product.getProductById);
        router.post('/api/v1/addproduct',global.Multer.single('files'),product.addProduct);
        router.put('/api/v1/editproduct/:id',product.editProduct);
        router.delete('/api/v1/editproduct/:id',product.deleteProduct)
    }
}
module.exports = ProductController;