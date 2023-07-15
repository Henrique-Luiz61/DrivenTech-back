import { ObjectId } from "mongodb";
import { db } from "../database/database.connection.js";

export async function getProducts(req, res) {
  try {
    const products = await db.collection("products").find().toArray();
    res.send(products);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function postProducts(req, res) {
  const { image, title, description, price } = req.body;

  try {
    const product = { image, title, description, price };
    await db.collection("products").insertOne(product);
    res.sendStatus(201);
  } catch (err) {
    return res.status(500).send(err.message);
  }
}

export async function deleteProducts(req, res) {
  const { id } = req.body;
  console.log(id);

  try {
    const product = await db
      .collection("products")
      .deleteOne({ _id: new ObjectId(id) });
    if (product.deletedCount === 0) return res.sendStatus(404);
    res.send(200);
  } catch (err) {
    return res.status(500).send(err.message);
  }
}
