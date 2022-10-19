const app = require('../main');
const http = require('http');
const conf = require('config');

const servidor = http.createServer(app);

servidor.listen(conf.get('servidor.porta'), () => {
  console.log('servidor  esta online !!!');
});
