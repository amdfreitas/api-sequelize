
module.exports = (app) => {

   const forneced = app.model.fornecedor;
   
   app.get('/', forneced.home);
   app.get('/lista/fornecedor',forneced.listfornecedor)
   app.post('/create/fornecedor',forneced.criaforneced)


};