const imageModelContructor =  require('./image-model');
const imageModel = new imageModelContructor().model;
class Image{

    async getImage(req,res){
        try {
            const product = await imageModel.find({});
            res.send(product);       
        } catch (error) {
            res.send({'Error':'Error getting products'});    
        }
     
    }

    async getProductById(req,res){
        try {
            const product = await imageModel.findById(req.params.id);
            res.send(product);       
        } catch (error) {
            res.send({'Error':'Error getting product'});    
        }     
    }


    async add(req, res){
        try {
            const product = await imageModel(req.body);
            await product.save();
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
            const product = await imageModel.update({_id:productId}, {$set:req.body});
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
            const product = await imageModel.deleteOne({_id:productId});
            res.send(product);
        }catch (e){
            res.send({'Error':'Error getting product delete'});
        }    
    }
}
module.exports = new Image();