module.exports = (app) => {

    let contfornec = {

            createTable: () => {

                const forn = app.db.model_DB.tbforneced;
                forn.tabforneced()
                            .sync()
                            .then(data => console.log(data))
                            .catch(error => console.log(error));
            }, 
            listarFornecedords: () => {
                const forn = app.repository.repforneced;
                return forn.lista();
            }, 
            criarforneced: (forrneced) => {
                const forn = app.repository.repforneced;
                return forn.criaforneced(forrneced);
            }

    }

    return contfornec;

};