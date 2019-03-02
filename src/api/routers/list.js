
const Router = require('koa-router');
const db = require('../db');

var ObjectId = require('mongodb').ObjectId;
const router = new Router();

router.get('/', async (ctx, next) => {
    let data = await db.find('goodslist',{});
    let res = {
        code:0,
        data:data
    }
    ctx.body = res;
});

router.post('/', async (ctx, next) => {
    let {_id} = ctx.request.body;
    let res = await db.delete('goodslist',{_id: ObjectId(_id)});
    ctx.body = res;
})


module.exports = router;