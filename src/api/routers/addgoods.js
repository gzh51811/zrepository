const Router = require('koa-router');

const db = require('../db');

const router = new Router();

router.post('/',async (ctx,next)=>{
    let data = ctx.request.body;
    // console.log(data);

    ctx.body = 200;
});

module.exports = router;