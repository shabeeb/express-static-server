const express = require('express');
const morgan = require('morgan');
const path = require('path');
const helmet = require('helmet')
const app = express();
app.use(helmet({
  frameguard: {
    action: 'deny'
  }
}))
console.log('__dirname', __dirname);
// logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
// app.use(express.static('../images'));
app.use('/images', express.static(path.join(__dirname, '..' , '/images')))

// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
// });

module.exports = app;