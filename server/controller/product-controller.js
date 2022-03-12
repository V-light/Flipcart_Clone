import Product from '../model/productSchema.js';

export const getProducts = async (req, res) => {

    try{
        const products = await Product.find({});

        return res.status(200).json(products);
    }catch(err){
        console.log("Error :" ,err);
    }
};

export const getProductById = async (req, res) => {

    try{
        const product = await Product.findOne({'_id': req.params.id});

        return res.status(200).json(product);
    }catch(err){
        console.log("Error :" ,err);
    }
};

