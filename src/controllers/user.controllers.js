import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';
import { db } from '../database/database.connection.js';

export async function signUp(req, res){
  const {name, email, password} = req.body;

  

  try{
    const verifyEmail = await db.collection('users').findOne({ email });
    if (verifyEmail) return res.status(409).send('Email ja cadastrado');

    const hash = bcrypt.hashSync(password, 10);

    await db.collection('users').insertOne({ name, email, password: hash });
    res.sendStatus(201);
  }catch (err){
    res.status(500).send(err.message)
  }
}

export async function signIn(req, res){
    const { email, password } = req.body;
    try{
        const user = await db.collection('users').findOne({ email })
        if (!user) return res.status(404).send('Email não cadastrado');

        const correctPassword = bcrypt.compareSync(password, user.password);
        if (!correctPassword) return res.status(401).send('Senha incorreta');

        await db.collection('sessions').deleteMany({ userId: user._id });
        const token = uuid();
        await db.collection('sessions').insertOne({ token, userId: user._id });

        res.send({ user, token });
    }catch (err){
        res.status(500).send(err.message);
    }
}