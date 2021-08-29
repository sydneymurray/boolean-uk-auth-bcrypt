// var express = require('express');
import express from "express"
import usersRouter from "./resources/users/routes"
import authRouter from "./resources/auth/routes"

var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

// view engine setup

app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());

app.use(authRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.all("*", (req, res)=>{
  res.status(404).json("Route not found")
})

module.exports = app;
