module.exports = (app) => {

    const prod = app.db.model_DB.tbprodut;
    let produt = {

           listaprodut: () => {
                return prod.tabprodut().findAll({raw:true});
            },
            listafornid: (idforn) => {
                return prod.tabprodut().findAll(
                    {
                        raw:true,
                        where: {
                            fornecedor:idforn
                        }
                    }
                    );
            },
            deleteprodut: (idprodut) => {
                return prod.tabprodut().destroy({
                    where: {
                        id:idprodut
                    }
                });
            },
            criaprodut:(produt) => {
                return prod.tabprodut().create(produt);
            }
    }

    return produt;
}