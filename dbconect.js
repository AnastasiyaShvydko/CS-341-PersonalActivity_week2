const dotenv = require('dotenv');
dotenv.config();
const { MongoClient } = require('mongodb');
const client = new MongoClient(process.env.uri);
  
    // const newListing = {
    //     firstName : "Anastasiya",
    //     lastName: "Shvydko",
    //     email: "m.a.@yandex.ru",
    //     favoriteColor: "red",
    //     birthday: 'June 30'
    // }




// async function creatingList(client, newListing){
//     const result = await client.db("week2").collection('contacts').insertOne(newListing);
  
//     console.log(`New listing had been created eith id ${result.insertedId}`);
//     return result;
// }

//creatingList(client, newListing);

    

module.exports = { client };

