const db = require('../db/dbhelp.js')
const apiResult = require('../utils/apiResult');
const jwt = require("jsonwebtoken");
const filter = require("../utils/filter.js")

module.exports={
    reg(app){
        app.post('/login',async(req,res)=>{
            // console.log(req.body)
            let username= req.body.username;
            let password = req.body.password;


            let result = await db.select('users',{username,password});
            
            if(result.status){
                //要生成 token 的主题信息,加密,设置过期事件
                let token = jwt.sign({username},'123456',{expiresIn:60*60});
                let ar = apiResult(result.status,token);
                // res.send(apiResult(true,ar));
                res.send(ar);
            }else{
                // res.send(result);
                res.send(apiResult(false));
            }
            
        })

        app.get('/users',async(req,res)=>{

            let result = await db.select('users');
            res.send(result);
        })

        app.post('/reg',async(req,res)=>{
            let username= req.body.username;
            let password = req.body.password;

            let result = await db.select('users',{username})
            if(result.status){
                res.send(apiResult(false));

            }else{
                let result2 = await db.insert('users',{username,password})
                res.send(apiResult(true, result2))
            }
        })
    }
}