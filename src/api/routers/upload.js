const koaBody = require('koa-body');
const router = require('koa-router')();
const koa = require('koa');
const app = new koa();
app.use(koaBody({
    multipart: true,
    formidable: {
        maxFileSize: 2000*1024*1024    // 设置上传文件大小最大限制，默认2M
    }
}));
const fs = require('fs');
const path = require('path');

router.post('/', async (ctx)=>{
    // console.log(ctx.request.files)
    const file = ctx.request.files.file;    // 获取上传文件
    // console.log(file);
    const reader = fs.createReadStream(file.path);    // 创建可读流
    
    const ext = file.name.split('.').pop();        // 获取上传文件扩展名
    let name = `upload/${Date.now()}.${ext}`
    const upStream = fs.createWriteStream(name);        // 创建可写流
    // console.log(name);
    reader.pipe(upStream);    // 可读流通过管道写入可写流
    return ctx.body = {
        code:0,
        src:name
    };
    
})

    
    module.exports = router;
