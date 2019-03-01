


const Router = require('koa-router');
const db = require('../db');
const ObjectId = require('mongodb').ObjectId

const router = new Router();

router.post('/', async (ctx, next) => {
    try {
        var {method} = ctx.request.body;
        if(method == 'update') {
            var {_id, orderstate} = ctx.request.body;
            var res = await db.update('orderlist', {_id: ObjectId(_id)}, {$set: {orderstate: orderstate}});

            ctx.body = res;
        }
    } catch(err) {
        // console.log(err);
        let {_id} = ctx.request.body;
        let res = await db.delete('orderlist', {_id: ObjectId(_id)});
    
        ctx.body = res;
    } 
});

router.get('/', async (ctx, next) => {
    let data = await db.find('orderlist');
    
    for(var i = 0; i < data.length; i++) {
        data[i].totalprice = data[i].number * data[i].price;
        data[i].orderprice = data[i].totalprice + data[i].freightprice;
    }

    // console.log(data);


    let res = {
        code : 0,
        data : data
    }
    
    ctx.body = res;
});


module.exports = router;