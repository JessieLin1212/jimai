const db = require('../db/dbhelp.js')
const apiResult = require('../utils/apiResult')

const filter = require("../utils/filter.js")

module.exports={
    reg(app){
        
        app.get('/goods',async(req,res)=>{

            let result = await db.select('goods');
            res.send(result);
        }),
        app.get('/detail',async(req,res)=>{
            let sid = db.objectid(req.query.sid);
            
            let result = await db.select('goods',{"_id":sid});
            res.send(result);
        }),
        app.get('/class',async(req,res)=>{
            let sclass = req.query.classify;
            console.log(sclass);
            let result = await db.select('goods',{"fenlei":sclass});
            res.send(result);
        }),
        app.post('/delItem',async(req,res)=>{
            
            let sid = db.objectid(req.body.sid);
            console.log(sid);   
            let result = await db.delete('goods',{_id:sid});
            console.log(result);    
            
            
        })


        
    }
}