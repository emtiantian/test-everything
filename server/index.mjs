import koa2 from 'koa2'
import route from 'koa-route'
import serve from 'koa-static'
import path from 'path'

// 与__dirname 相同
const url = import.meta.url.replace("file://","")
const app = new koa2()
// 1.主页静态网页 把静态页统一放到html中管理
// es6 中没有路径处理函数？ 用node的path函数
console.log(path.join(url,"../../src/html/"))
const home   = serve(path.join(url,"../../src/html/"));
// 2.hello接口
const hello = ctx => {
  ctx.response.body = 'Hello World';
};
// 3.分配路由
app.use(home);
app.use(route.get('/'),hello);
app.listen(3000);