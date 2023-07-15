import { db } from "../database/database.connection";

export async function postProdToCart(req, res) {
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

    let subTotal = 0;

    for (let i = 0; i < productsCart.length; i++) {
      subTotal += Number(productsCart[i].price);
    }

    res.send({ productsCart, subTotal });
  } catch (err) {
    res.status(500).send(err.message);
  }
}
