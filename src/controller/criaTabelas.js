module.exports = (app) => {

    let criatabelas = {

        criatabelas: () => {
            const tables = [app.db.model_DB.tbprodut,app.db.model_DB.tbprodut];

            tables.forEach((itens) => {
                itens.tab().sync();
            });

        }


    }

    return criatabelas;
}