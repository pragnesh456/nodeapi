const prodctModelContructor =  require('./product-model');
const productModel = new prodctModelContructor().model;
const multer = require('multer');
const fs = require('fs');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })
class Product{

    async getProducts(req,res){
        try {
            const product = await productModel.find({});
            res.send(product);       
        } catch (error) {
            res.send({'Error':'Error getting products'});    
        }
     
    }

    async getProductById(req,res){
        try {
            const product = await productModel.findById(req.params.id);
            res.send(product);       
        } catch (error) {
            res.send({'Error':'Error getting product'});    
        }
     
    }

    async addProduct(req, res){
        try {
            // const product = await productModel(req.body);
            console.log(req.files,req.filename,req.file);
            console.log(req.body)
            // await product.save();
            res.send({'Successful':'product Added Successful'})    
        } catch (e) {
            res.send({'Error':'Error Added product'}); 
        }
        
    }

    async editProduct(req, res){
        const productId = req.params.id;
        try{
            if(!productId){
                res.send({'notFound':'productId Not Found'});
            }
            const product = await productModel.update({_id:productId}, {$set:req.body});
            res.send(product);
        }catch (e){
            res.send({'Error':'Error getting product update'});
        }        
    }
    
    async deleteProduct(req, res){
        const productId = req.params.id;
        try{
            if(!productId){
                res.send({'notFound':'productId Not Found'});
            }
            const product = await productModel.deleteOne({_id:productId});
            res.send(product);
        }catch (e){
            res.send({'Error':'Error getting product delete'});
        }    
    }
}
module.exports = new Product();