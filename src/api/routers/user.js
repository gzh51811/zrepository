

// 对请求进行判断
const Router = require('koa-router');
const db = require('../db');
const ObjectId = require('mongodb').ObjectId;

const router = new Router();

router.post('/', async (ctx, next) => {
    
    // console.log(ctx.request.body);
    let method = ctx.request.body.method;

    switch(method) {
        case 'find':
            let {username} = ctx.request.body;
            var res = await db.find('userlist', {username});
            res = res[0];
            if(res) {
                ctx.body = 1;
            } else {
                ctx.body = 0;
            }
            break;
        case 'insert':
            var obj = ctx.request.body;
            // console.log(obj.username);
            delete obj.method;
            var res = await db.insert('userlist', obj);
            // console.log(res);
            ctx.body = res;
            break;
        case 'delete':
            var {_id} = ctx.request.body;
            var res = await db.delete('userlist', {_id: ObjectId(_id)});
            ctx.body = res;
            break;
        case 'update':
            var obj = ctx.request.body;
            var _id = obj._id;
            delete obj._id;
            delete obj.method;
            var res = await db.update('userlist', {_id: ObjectId(_id)}, {$set: obj});
            ctx.body = res;
            break;
        case 'findall':
            var {_id} = ctx.request.body;
            var res = await db.find('userlist', {_id: ObjectId(_id)});
            // console.log(res);
            ctx.body = res;
            break;
    }   
});

router.get('/', async (ctx, next) => {
    let data = await db.find('userlist');

    let res = {
        code : 0,
        data : data
    }
    
    ctx.body = res;
});


module.exports = router;