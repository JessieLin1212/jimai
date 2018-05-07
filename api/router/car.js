const db = require('../db/dbhelp.js')
const apiResult = require('../utils/apiResult')

const filter = require("../utils/filter.js")

module.exports={
    reg(app){
        app.post('/addcar',async(req,res)=>{
            var username = req.body.username;
            var shopid = req.body.sid;
            var newqty = req.body.qty*1;
            
            var result = await db.select("car",{shopid,username});
            
            
            
            
            if(result.status){
                let oldqty =result.data[0].qty*1;
                
                let qty = newqty +oldqty;
               
                let result1 = await db.update("car",{shopid,username},{username,shopid,qty})
                res.send(result1);
            }else{
                
                var result2 =await db.insert("car",{shopid,username,qty:newqty});
                res.send(result2);
            }
        }),
        app.get("/getcar",async(req,res)=>{
            let username = req.query.username;
            let result = await db.select("car",{username});
            let num = result.data.length;   
            
            let data=[];
            for(var i=0 ; i<num; i++){
                let sid = db.objectid(result.data[i].shopid)
                let qty = result.data[i].qty;
                
                let results = await db.select("goods",{_id:sid});
                let obj = {};
                obj.data=results.data;
                obj.qty=qty;
                
                data.push(obj);
            }
            res.send(data);
            
        }),
        app.post("/changecar",async (req,res)=>{
            let username = req.body.username;
            let shopid = req.body.shopid;
            let qty = req.body.qty ;
            let result = await db.update("car",{shopid,username},{username,shopid,qty});
            res.send(result);
        }),
        app.post("/removecar",async(req,res)=>{
            console.log(req.body.username)
            let username = req.body.username;
            let shopid = req.body.shopid;
            let result = await db.delete("car",{shopid,username});
            console.log(result);
        })

        
    }
}