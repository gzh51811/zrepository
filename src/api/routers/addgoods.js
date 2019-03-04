const Router = require('koa-router');

const db = require('../db');
var ObjectId = require('mongodb').ObjectId;
const router = new Router();

router.post('/',async (ctx,next)=>{
    let data = ctx.request.body;
    // console.log(data);
    let time1 = new Date();
    let year = time1.getFullYear();
    let month = time1.getMonth()+1;
    let day = time1.getDate();
    data.time = `${year}-${month}-${day}`;
    // console.log(data);

    let res = await db.insert('goodslist',data);

    ctx.body = {
        code:200,
        data:res
    };

});


router.get('/', async (ctx,next)=>{
   
    let {id} = ctx.request.query;
    
    let res = await db.find('goodslist',{_id: ObjectId(id)});
    ctx.body = res;
    console.log(res);
})




module.exports = router;