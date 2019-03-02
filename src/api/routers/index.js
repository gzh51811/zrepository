


// const Koa = require('koa');
const Router = require('koa-router');
const koaBody = require('koa-body');

const router = new Router();

// const db = require('../db');

const loginRouter = require('./login');
<<<<<<< HEAD
const listRouter = require('./list');
const addgoodsRouter = require('./addgoods');
const uploadRouter = require('./upload');
=======
const userRouter = require('./user');
const orderRouter = require('./order');


>>>>>>> 6048de1727f93530f5fc40782836461c0e7cb7c8
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
<<<<<<< HEAD
router.use('/list', listRouter.routes());
router.use('/addgoods', addgoodsRouter.routes());
router.use('/upload', uploadRouter.routes());
=======
router.use('/user', userRouter.routes());
router.use('/order', orderRouter.routes());

>>>>>>> 6048de1727f93530f5fc40782836461c0e7cb7c8
module.exports = router;