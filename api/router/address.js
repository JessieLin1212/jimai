const db = require('../db/dbhelp.js')
const apiResult = require('../utils/apiResult')

const filter = require("../utils/filter.js")

module.exports={
    reg(app){
        app.post('/addAdd',async(req,res)=>{
            let username = req.body.username;
            let nickname= req.body.nickname;
            let phone = req.body.phone;
            let pro = req.body.pro;
            let city = req.body.city;
            let county = req.body.county;
            let detadd = req.body.detadd;

            let result2 = await db.insert('address',{username,nickname,phone,pro,city,county,detadd})
            res.send(apiResult(true, result2))
        })

        app.get('/getadd',async(req,res)=>{
            let username = req.query.username;
            
            let result = await db.select('address',{"username":username});
            res.send(result);
        })

    }
}