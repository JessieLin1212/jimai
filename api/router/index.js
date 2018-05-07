const express = require('express');
const bp = require('body-parser');
const app = express();

app.use(bp.urlencoded({extended: false}))

// 设置跨域
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, auth, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") {
      res.send(200);/*让options请求快速返回*/
    } else{
      next();
    }
});

const user = require('./user.js')
const goodlist = require("./goodlist.js")
const car =require("./car.js")
const address =require("./address.js")
const search = require("./search.js")
    
module.exports={
    start(_port = 88){
        user.reg(app);
        goodlist.reg(app);
        car.reg(app);
        address.reg(app);
        search.reg(app);
        app.listen(_port)
    }
}