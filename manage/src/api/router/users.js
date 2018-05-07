const db = require("../db/mongodb.js")
const jwt = require("jsonwebtoken");
module.exports = {
    register(app){
        app.post('/login', async (req, res) => {
            let username = req.body.username;
            let password = req.body.password;
            let result = await db.select('users', {username, password});  
            if(result.status){
                let user = {
                    username
                }
                //这是加密的 key（密钥）
                let secret = '12345';
                //生成 Token
                let token = jwt.sign(user, secret, {
                    'expiresIn': 60*60*24 // 设置过期时间, 24 小时
                })      
    
            }
            res.send(result);         
        })
    }
}