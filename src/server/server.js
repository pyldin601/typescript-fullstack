"use strict";
exports.__esModule = true;
var Koa = require("koa");
var koaBetterStatic = require("koa-better-static");
var koaViews = require("koa-views");
var config_1 = require("./config");
var winston_1 = require("./services/winston");
var routes_1 = require("./routes");
var app = new Koa();
app.use(koaBetterStatic('public'));
app.use(koaViews('views'));
app.use(routes_1["default"].routes());
app.use(routes_1["default"].allowedMethods());
app.listen(config_1["default"].SERVER_PORT, function () {
    winston_1["default"].info("Service is listening at port " + config_1["default"].SERVER_PORT);
});
