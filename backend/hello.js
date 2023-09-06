
const express = require('express');
const mongodb = require('mongodb');
const app = express();
const client = new mongodb.MongoClient('mongodb+srv://sinchu_123:sinchu799@cluster0.f31nj7z.mongodb.net/?retryWrites=true&w=majority');
console.log("hello");
app.use(express.json());

app.get('/api/fictionBooks', async (req, res) => {
  try {
    await client.connect();
    const db = client.db('MY_LIBRARY');
    const collection = db.collection('FICTION');
    const books = await collection.find().toArray();
    res.status(200).json(books);
  } catch (err) {
    console.error(err);
    res.status(500).send('An error occurred');
  }
});
app.get('/api/poetryBooks', async (req, res) => {
  try {
    await client.connect();
    const db = client.db('MY_LIBRARY');
    const collection = db.collection('POETRY');
    const books = await collection.find().toArray();
    res.status(200).json(books);
  } catch (err) {
    console.error(err);
    res.status(500).send('An error occurred');
  }
});


app.post('/api/fictionBooks', async (req, res) => {
  try {
    const book = req.body;
    await client.connect();
    const db = client.db('MY_LIBRARY');
    const collection = db.collection('FICTION');
    await collection.insertOne(book);
    res.status(201).send();
  } catch (err) {
    console.error(err);
    res.status(500).send('An error occurred');
  }
});

app.post('/api/poetryBooks', async (req, res) => {
  try {
    const book = req.body;
    await client.connect();
    const db = client.db('MY_LIBRARY');
    const collection = db.collection('POETRY');
    await collection.insertOne(book);
    res.status(201).send();
  } catch (err) {
    console.error(err);
    res.status(500).send('An error occurred');
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
