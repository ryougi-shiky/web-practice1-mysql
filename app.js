const express = require('express');
const fs = require('fs');
const mysql = require('mysql');
const path = require('path');

const app = express();



const utils = require('utils.js');


app.get('/', (req, resp) => {
    const pool = mysql.createPool({
        database: 'blog',
        user: 'root',
        password: 'root'
    })
    pool.getConnection((err, connection) => {
        if (!err){
            const sql = 'select * from '
            connection.query(sql, sqlParams, (e, results) => {
                if (!e){
                    console.log(results);
                    resp.send(results);
                }
            })
        } else {
            console.log(err);
        }
    })
    fs.readFile('public/home.html', (err, data) => {
        if (!err){
            resp.end(data);
        } else {
            console.log(err);
        }
    })
})

app.get('/login', (req, resp) => {
    fs.readFile('public/login.html', (err, data) => {
        if (!err){
            resp.end(data);
        } else {
            console.log(err);
        }
    })
})

app.listen(3000, () => {
  console.log("server starts");
})
/*
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fs = require('fs')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', indexRouter);
app.get('/', (req, resp) => {
	fs.readFile('public/home.html', (err,data) => {
		if (!err){
			resp.end(data);
		} else {
			console.log(err);
		}
	})
})

app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
*/