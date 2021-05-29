module.exports = (app) => {

    let produto = {

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