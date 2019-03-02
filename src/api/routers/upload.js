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
    console.log(file);
    const reader = fs.createReadStream(file.path);    // 创建可读流
    console.log(file.path);
    
    const ext = file.name.split('.').pop();        // 获取上传文件扩展名
    
    console.log(file.path)
    const upStream = fs.createWriteStream(`upload/${Date.now()}.${ext}`);        // 创建可写流
    reader.pipe(upStream);    // 可读流通过管道写入可写流
    return ctx.body = '上传成功';
})

    
    module.exports = router;
