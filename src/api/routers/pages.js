const Router = require('koa-router');
const db = require('../db');



const router = new Router();


router.get('/',async(ctx,next)=>{
    // console.log(ctx.request.query)
    let {page,limit} = ctx.request.query;
    // // let page = 1;
    // // let limit = 10;
    let data2 = await db.find('goodslist',{});
    let data = await db.find('goodslist',{},page*1,limit*1);
    let count = data2.length;

    ctx.body = {
        code:0,
        count,
        data
    }
   
})


module.exports = router;