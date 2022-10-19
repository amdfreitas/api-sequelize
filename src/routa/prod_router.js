const conf = require('config');
module.exports = (app) => {
  const prod = app.model.produto;

  app.get(conf.get('produto.listaAll'), prod.listaprodut);
  app.post(conf.get('produto.criar'), prod.criaprodut);
  app.get(conf.get('produto.listafornecedid'), prod.listafornid);
  app.delete(conf.get('produto.delete'), prod.deleteprodut);
};
