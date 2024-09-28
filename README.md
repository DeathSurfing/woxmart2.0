# Requirements:
- NextJS(15.0)
- MongoDBATLAS(8.0)
- NodeJS (22.1.0)
- NextAuthenticate
- NextRouter

# To run File:
create a .env.local file and input:
### MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/ecommerce?retryWrites=true&w=majority
and populate using
### npm run seed
to run
### npm run dev

incase run seed doesn't work popualte using sample data:
```[
  {
    "_id": "1",
    "name": "Dummy Product 1",
    "price": 29.99,
    "image": "https://via.placeholder.com/300?text=Product+1",
    "category": "Snacks and Drinks"
  },
  {
    "_id": "2",
    "name": "Dummy Product 2",
    "price": 19.99,
    "image": "https://via.placeholder.com/300?text=Product+2",
    "category": "Essentials"
  },
  {
    "_id": "3",
    "name": "Dummy Product 3",
    "price": 9.99,
    "image": "https://via.placeholder.com/300?text=Product+3",
    "category": "Stationery"
  }
]
```
Incase the seed and the sample data doesn't work, please check the attached pptx
