const conf = require('config');
module.exports = (app) => {

   const forneced = app.model.fornecedor;
   
   
   app.get('/', forneced.home);
   app.get(conf.get('fornecedor.listaAll'),forneced.listfornecedor);
   app.post(conf.get('fornecedor.criar'),forneced.criaforneced);
   app.get(conf.get('fornecedor.seacherId'),forneced.seacherforneced);
   app.put(conf.get('fornecedor.update'),forneced.updateforneced);
   app.delete(conf.get('fornecedor.delete'),forneced.deleteforneced);
  


};