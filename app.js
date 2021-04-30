"use strict";
exports.__esModule = true;
var koa_1 = require("koa");
var koa_router_1 = require("koa-router");
var app = new koa_1["default"]();
var router = new koa_router_1["default"]();
router.get('/', function (ctx) {
    ctx.body = "hello world!";
});
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(5000, function () {
    console.log('Koa is Running');
});
