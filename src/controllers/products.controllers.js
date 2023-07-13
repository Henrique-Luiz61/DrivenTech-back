import { db } from '../database/database.connection.js';

export async function getProducts(req, res){

    try{
        const products = await db.collection('products').find().toArray();
        res.send(products)
    }catch (err){
        res.status(500).send(err.message)
    }
}
