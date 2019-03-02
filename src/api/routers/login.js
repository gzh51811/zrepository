


const Router = require('koa-router');
const db = require('../db');

const router = new Router();

router.post('/', async (ctx, next) => {
    
    // console.log(ctx.request.body);

    let {login: username, pwd: password} = ctx.request.body;
    
    let res = await db.find('admin', {username, password});

    res = res[0];

    if(res) {
        ctx.body = 1;
    } else {
        ctx.body = 0;
    }
});

module.exports = router;