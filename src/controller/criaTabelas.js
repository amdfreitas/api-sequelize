module.exports = (app) => {

    let criatabelas = {

        criatabelas: () => {
            const tables = [app.db.model_DB.tbforneced,app.db.model_DB.tbprodut];

            tables.forEach((iten) => {
                iten.tab().sync();
            });

        }


    }

    return criatabelas;
}