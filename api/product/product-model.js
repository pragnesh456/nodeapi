class ProductModel {
    constructor(){
        try{
            this.model = global.mongoose.model('product');
        }catch(e){
            const ProductSchema = new global.mongoose.Schema({
                product_id:{
                    type:String
                },
                segment_id:{
                    type:String
                },
                video_url:{
                    type:String
                },
                thumbnails_url:{
                    type:String
                },
                start_time:{
                    type:String
                },
                stop_time:{
                    type:String
                },
                isReady:{
                    type:Boolean
                },
                sequance_id:{
                    type:String
                }
            },{
                collection:'product',
                versionKey: false
            });
            this.model = global.mongoose.model('product',ProductSchema);
        }
    }
}
module.exports =  ProductModel;