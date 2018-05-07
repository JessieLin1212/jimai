const mc = require('mongodb').MongoClient;
const ar = require('../utils/apiResult.js')
const ObjectID = require("mongodb").ObjectID;
// const db;
var db=null;

// mc.connect('mongodb://localhost:27017/gz1801',(_error,_db)=>{
//     db=_db;
// })
mc.connect('mongodb://localhost:27017',(error,client)=>{
    db=client.db('jimai');
})

module.exports={
    async select(_collection,_condition={}){
        var result = await db.collection(_collection).find(_condition).toArray();
        return ar(result.length>0,result);
    },
    async insert(_collection,_condition={}){
        var result = await db.collection(_collection).insert(_condition);
        return ar(result.length>0,result);
    },
    async delete(_collection,_condition){
        var result = await db.collection(_collection).remove(_condition);
        return ar(result.length>0,result.result)
    },
    async update(_collection,_condition={},_data){
        var result = await db.collection(_collection).update(_condition,{$set:_data});
        return ar(result.result.nModified,result.result);
    },
    objectid: (_id) => {
        return _id ? new ObjectID(_id) : new ObjectID();
    }

}