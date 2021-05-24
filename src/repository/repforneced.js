module.exports = (app) => {

    const conn = app.db.model_DB.tbforneced;

    let forneced = {

        lista : () => {
            return conn.tabforneced().findAll();
        }, 
        criaforneced : (forneced) => {
            return conn.tabforneced().create(forneced);
        }

    }

    return forneced;

};