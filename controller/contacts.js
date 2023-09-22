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
    //console.log(dataArray)
    res.send(dataArray);
    //console.log(result);
}

const oneContact = async (req,res) =>{
    await clientDb.connect();
    const result = clientDb.db("week2").collection("contacts").find({_id :new ObjectId("650dd38b45d3ca74e03796ed")});
    dataArray = await result.toArray();
    //console.log(dataArray)
    res.send(dataArray[0]);
    console.log('hoho', dataArray[0]);
    //res.send(result[0]);
}

async function getData(){
    const result =  await clientDb.db("week2").collection("clients").find();
}

module.exports = { db, allContacts, oneContact};