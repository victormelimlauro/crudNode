var mongoClient = require("mongodb").MongoClient;
var ObjectId = require('mongodb').ObjectID;

mongoClient.connect("mongodb://localhost:27017")
    .then(conn => global.conn = conn.db("senac"))
    .catch(err => console.log(err))

function findAll(callback){
    global.conn.collection("alunos").find({}).toArray(callback);
}
function findAlunos(id, callback){
    global.conn.collection("alunos").findOne({_id:ObjectId(id)}, callback);
}
function deleteAlunos(id, callback){
    global.conn.collection("alunos").remove({_id: ObjectId(id) }, callback)
}

function insertAlunos(alunos, callback){
    global.conn.collection("alunos").insert(alunos, callback);
}

function updateAlunos(id, alunos, callback){
        global.conn.collection("alunos").update({_id:ObjectId(id)}, alunos, callback)
}

module.exports={findAll, findAlunos, deleteAlunos, insertAlunos, updateAlunos};
