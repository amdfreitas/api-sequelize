
module.exports = (app) => {

   const forneced = app.model.fornecedor;
   
   app.get('/', forneced.home);
   app.get('/lista/fornecedor',forneced.listfornecedor);
   app.post('/create/fornecedor',forneced.criaforneced);
   app.get('/seacher/fornecedor/:id',forneced.seacherforneced);
   app.put('/update/fornecedor',forneced.updateforneced);
   app.delete('/delete/fornecedor/:id',forneced.deleteforneced);


};