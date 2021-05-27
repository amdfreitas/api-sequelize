module.exports = (app) => {

    let produto = {

        createTable:() => {
            const prod = app.db.model_DB.tbprodut;
            prod.tabprodut()
                        .sync()
                        .then(data => console.log(data))
                        .catch(error => console.log(error));
        },
        listaprodut:() => {
            const prod = app.repository.repprodut;
            return prod.listaprodut();

        },
        listafornid: (idform) =>{
            const prod = app.repository.repprodut;
            return prod.listafornid(idform);
        },
        criaprodut: (produt) => {
            const prod = app.repository.repprodut;
            return prod.criaprodut(produt);
        },
        deleteprodut: (idprodut) =>{
            const prod = app.repository.repprodut;
            return prod.deleteprodut(idprodut);
        }
    }
     return produto;
}