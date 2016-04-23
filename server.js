'use strict';

const config = require('./webpack.config');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();
const port = process.env.PORT || 3000;

const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}));
app.use(webpackHotMiddleware(compiler));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, function(err) {
  if (err) {
    console.error(err);
  } else {
    console.log('Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
  }
});
