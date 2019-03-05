// const koaBody = require('koa-body');
const router = require('koa-router')();
// const koa = require('koa');
// const app = new koa();

// const multer = require('koa-multer');

const fs = require('fs');
// const path = require('path');


router.post('/', async (ctx)=>{
    // console.log(ctx.request.files)
    const file = ctx.request.files.images;    // 获取上传文件
    // console.log(file);
    const reader = fs.createReadStream(file.path).path;    // 创建可读流
    // console.log(reader);
    
    let imagename = reader.split('/').pop();
    // console.log(imagename);
    // const ext = file.name.split('.').pop();        // 获取上传文件扩展名
    
    // // console.log(file.path)
    // const upStream = fs.createWriteStream(`uploads/${Date.now()}.${ext}`);        // 创建可写流
    // reader.pipe(upStream);    // 可读流通过管道写入可写流
    ctx.body = {
        code: 0,
        imagename: imagename,
        msg: '上传成功'
    };
})

    
module.exports = router;
