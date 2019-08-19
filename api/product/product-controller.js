const product = require('./product');
const multer = require('multer');
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './uploads')
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now())
    }
});
var upload = multer({storage: storage});

class ProductController{
    constructor(router){
        router.get('/api/v1/getproducts',product.getProducts);
        router.get('/api/v1/getproduct/:id',product.getProductById);
        router.post('/api/v1/addproduct',upload.single('images'),product.addProduct);
        router.put('/api/v1/editproduct/:id',product.editProduct);
        router.delete('/api/v1/editproduct/:id',product.deleteProduct)
    }
}
module.exports = ProductController;