const mongodb = require('mongodb');
const apiReulst = require('../utils/apiResult.js')
const mc = mongodb.MongoClient;
const ObjectID = mongodb.ObjectID;

var db = null;

mc.connect('mongodb://localhost:27017', (error, client) => {
    db = client.db('jimai');
})

module.exports = {
    async select(_collection, _condition = {} ){
        try{
            let items =  await db.collection(_collection).find(_condition).toArray();
            let result = apiReulst(items.length > 0, items);
            return result;
        } catch(error){
            return apiReulst(false, error);
        }
    },
    async insert(_collection,__data){
        try{
            let items = await db.collection(_collection).insert(__data);
            return apiReulst(result.insertedCount > 0, result.result);
        }catch(error){
            return apiResult(false,error);
        }

    },
    async update(_collection,_condition,newdefine){
        try{
            let items = await db.collection(_collection).update(_condition,{$set:newdefine});
            return apiResult(true,items);
        }catch(error){
            return apiResult(false,error);
        }
    },
    async delete(_collection,_condition){
        try{
            let items = await db.collection(_collection).update(_condition).remove(_condition);
            return apiResult(true,items);
        }catch(error){
            return apiResult(false,error);
        }
    },
    objectid: (_id) => {
        return _id ? new ObjectID(_id) : new ObjectID();
    }
    
}