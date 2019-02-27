

const Koa = require('koa');
const static = require('Koa-static');

// 路由
const routers = require('./api/routers');

const app = new Koa();

// 静态服务器
app.use(static('./'));

app.use(routers.routes());

// 连接
app.listen(8000, () => {
    console.log('server is running on port 8000 ~');
});