


// const Koa = require('koa');
const Router = require('koa-router');
const koaBody = require('koa-body');

const router = new Router();

// const db = require('../db');

const loginRouter = require('./login');
const listRouter = require('./list');
const addgoodsRouter = require('./addgoods');
const uploadRouter = require('./upload');
router.use(koaBody({
    // 支持formdata
    multipart:true,

    // 文件支持
    formidable:{
        // 指定保存路径
        uploadDir:'./uploads',
        keepExtensions:true,
        // 改文件名
        onFileBegin(filename,file){
            // filename: 上传文件的原始名
            // file:文件信息对象
            //   * path:

            // file.path = './uploads/'+filename
        }
    }
}));


router.use('/login', loginRouter.routes());
router.use('/list', listRouter.routes());
router.use('/addgoods', addgoodsRouter.routes());
router.use('/upload', uploadRouter.routes());
module.exports = router;