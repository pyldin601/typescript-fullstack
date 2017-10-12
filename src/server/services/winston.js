"use strict";
exports.__esModule = true;
var winston = require("winston");
winston.configure({
    transports: [
        new winston.transports.Console(),
    ]
});
exports["default"] = winston;
