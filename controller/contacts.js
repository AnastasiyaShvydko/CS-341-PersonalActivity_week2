const { ObjectId } = require('mongodb');
const client = require('../dbconect');

//!!!!!!!!!!!!!!!!!!!!!!!!!
const clientDb = client.client;
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const  db = async (req,res) =>{
    await clientDb.connect();
    const data = await clientDb.db().admin().listDatabases();
    //return data;
    res.send(data);
}

const allContacts = async (req,res) =>{
    await clientDb.connect();
    const result =  clientDb.db("week2").collection("contacts").find();
    dataArray = await result.toArray();
    res.send(dataArray);
}

const oneContact = async (req,res) =>{
    await clientDb.connect();
    const result = clientDb.db("week2").collection("contacts").find({_id :new ObjectId("650dd38b45d3ca74e03796ed")});
    dataArray = await result.toArray();
    res.send(dataArray[0]);
}

const postContact = async (req,res) => {

    //  const newListing = {
    //     firstName : "ROSA",
    //     lastName: "None",
    //     email: "m.a.@yandex.ru",
    //     favoriteColor: "red",
    //     birthday: 'June 30'
    // }

    
const newListing = req.body;
const postOne = await clientDb.db("week2").collection('contacts').insertOne(newListing);
res.status(201).send(`Status: ${res.statusCode}.New listing had been created eith id ${postOne.insertedId}`);
}

const putContact = async (req,res) =>{
    const userId = new ObjectId(req.params.id);
//     const contact = {
// //         "firstName": "LISA",
// //         "lastName": "MONO",
// //         "email": "nn@ii.com",
// //         "favoriteColor": "red",
// //         "birthday": "20/06/1985"
// };

    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
      };
    await clientDb.connect();
    const result = await clientDb.db("week2").collection("contacts").replaceOne({ _id: userId}, contact);
    res.status(204).send('ok');
    
}

const deleteContact = async (req,res) =>{
    const userId = new ObjectId(req.params.id);
    await clientDb.connect();
    const result = clientDb.db("week2").collection("contacts").deleteOne({ _id: userId});
    res.send(`Status: ${res.statusCode}. Contasct with ID ${userId} was deleted `)
}




module.exports = { db, allContacts, oneContact, postContact, putContact, deleteContact};