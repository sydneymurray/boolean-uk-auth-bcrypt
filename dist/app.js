"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// var express = require('express');
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./resources/users/routes"));
const routes_2 = __importDefault(require("./resources/auth/routes"));
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express_1.default();
// view engine setup
app.use(logger('dev'));
app.use(express_1.default.json());
app.use(cookieParser());
app.use(routes_2.default);
app.use('/users', routes_1.default);
// catch 404 and forward to error handler
app.all("*", (req, res) => {
    res.status(404).json("Route not found");
});
module.exports = app;
