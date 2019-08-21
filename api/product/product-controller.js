const product = require('./product');

class ProductController{
    constructor(router){
        router.get('/api/v1/getproducts',product.getProducts);
        router.get('/api/v1/getproduct/:id',product.getProductById);
        router.post('/api/v1/product/add',global.upload.any(),product.addProduct);
        router.put('/api/v1/product/updateSegment/:id',product.updateProduct);
        router.delete('/api/v1/editproduct/:id',product.deleteProduct)
    }
}
module.exports = ProductController;