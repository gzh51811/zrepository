
const mongodb = require('mongodb');


async function connect() {
    let client = await mongodb.MongoClient.connect('mongodb://localhost:27017');
    let db = client.db('zhang');
    return {client, db};
}

exports.insert = async (colName, data) => {
    let {client, db} = await connect();
    let collection = db.collection(colName);
    let res;
    if(Array.isArray(data)) {
        res = collection.insertMany(data);
    } else {
        res = collection.insertOne(data);
    }

    client.close();

    return res;
}

exports.find = async (colName, data) => {
    let {client, db} = await connect();
    let collection = db.collection(colName);
    let res = await collection.find(data).toArray();

    client.close();

    return res;
}

exports.delete = async (colName, data) => {
    let {client, db} = await connect();
    let collection = db.collection(colName);

    let res = await collection.deleteMany(data)

    client.close();

    return res;
}


exports.update = async (colName, data, newData) => {
    let {client, db} = await connect();
    let collection = db.collection(colName);
    let res = await collection.updateMany(data, newData);
    client.close();


    return res;
}

