const db = require('../db/dbhelp.js')
const apiResult = require('../utils/apiResult')

const filter = require("../utils/filter.js")

module.exports = {
    reg(app){
        app.get("/search",async(req,res)=>{
            let keyword = req.query.keyword;
            
            keyword = new RegExp(keyword);
            let result = await db.select("goods", {$or:[{fenlei:keyword},{proname: keyword}]});              
            res.send(result);
        })
        

        
    }
}