const express = require('express');
const winston = require('winston');
const chalk = require('chalk');
const path = require('path');
const serveWebpackClient = require('serve-webpack-client');

const app = express();
const PORT = process.env.PORT || 3000;

// Proxying to 3rd-party backend APIs:
// If you need to develop against a remote server, and are having
// problems with CORS, this is a simple way to resolve it for
// development mode: proxy calls to the remote API through our
// node server.
//
// Note that in production it's better to either 
// 1. deploy the app on the same domain as the API,
// 2. get the API to expose an x-allow-origin header, or
// 3. use a dedicated reverse proxy (e.g. Nginx) to do this instead.
/*
const httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer()
  .on('error', function (e) {
    console.error(JSON.stringify(e, null, ' '));
  });

// Everything after /api/ will route to google.com.
app.use('/api', (req, res) => {
    req.url = req.url.replace('/api', '');
    proxy.web(req, res, {
    target: 'http://www.example.com',
    changeOrigin: true
  });
});
*/

app.use(serveWebpackClient({
  distPath: path.join(__dirname, 'dist'),
  indexFileName: 'index.html',
  webpackConfig: require('./webpack.config')
}));


app.listen(PORT, (err) => {
  if (err) {
    winston.error(err);
    return;
  }

  winston.info(`Listening on port ${ chalk.yellow(PORT) }`);
});
