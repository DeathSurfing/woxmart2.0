const { MongoClient } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

async function seedDatabase() {
  try {
    await client.connect();
    const database = client.db('your_database_name');
    const products = database.collection('products');

    // Delete existing products
    await products.deleteMany({});

    // Insert new products
    const result = await products.insertMany([
      { name: 'Product 1', price: 19.99, image: '/placeholder.svg?height=200&width=200' },
      { name: 'Product 2', price: 29.99, image: '/placeholder.svg?height=200&width=200' },
      { name: 'Product 3', price: 39.99, image: '/placeholder.svg?height=200&width=200' },
      { name: 'Product 4', price: 49.99, image: '/placeholder.svg?height=200&width=200' },
    ]);

    console.log(`${result.insertedCount} products were inserted`);
  } finally {
    await client.close();
  }
}

seedDatabase().catch(console.error);