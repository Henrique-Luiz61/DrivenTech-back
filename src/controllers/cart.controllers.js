import { db } from "../database/database.connection.js";

export async function postProdToCart(req, res) {
  console.log(req.body)
  const { image, title, description, price } = req.body;
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");

  if (!token) return res.sendStatus(401);

  try {
    const session = await db.collection("sessions").findOne({ token });
    if (!session) return res.sendStatus(401);

    await db.collection("productsCart").insertOne({
      userId: session.userId,
      image,
      title,
      description,
      price,
    });
    res.sendStatus(201)
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function getProductsCart(req, res) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");

  if (!token) return res.sendStatus(401);

  try {
    const session = await db.collection("sessions").findOne({ token });
    if (!session) return res.sendStatus(401);

    const productsCart = await db
      .collection("productsCart")
      .find({ userId: session.userId })
      .toArray();    

    res.send({ productsCart });
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function postCheckout(req, res) {
 
  try {
    const pedidoFinalizado = req.body ;
    await db.collection("saleFinished").insertOne(pedidoFinalizado);
    res.status(201).send("Compra efetuada com sucesso, obrigado e volte sempre!!");
  } catch (err) {
    return res.status(500).send(err.message);
  }
}
