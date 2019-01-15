const Koa = require('koa');
const app = new Koa();
const config = require('./config');

const views = require('koa-views');
const json = require('koa-json');
const bodyparser = require('koa-bodyparser');

app.use(bodyparser({
    enableTypes: ['json', 'form', 'text']
}));
app.use(json());
app.use(require('koa-static')(__dirname + '/dist'));

app.use(views(__dirname + '/views', {
    extension: 'html'
}));

app.use(async ctx => {
    await ctx.render('index');
});

app.listen(config.PORT || 4005);
