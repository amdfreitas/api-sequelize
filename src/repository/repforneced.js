module.exports = (app) => {

    const conn = app.db.model_DB.tbforneced;

    let forneced = {

        lista : () => {
            return conn.tabforneced().findAll();
        }, 
        criaforneced : (forneced) => {
            return conn.tabforneced().create(forneced);
        },
        seacherforneced : (id) => {
            return new Promise(async (resolve, reject) => {

                const result = await conn.tabforneced().findOne({
                    where:{
                        id: id
                    }
                });

                if(!result){
                    reject({'err':'Usuario nao  foi localizado !!!'});
                }else{
                    resolve(result);
                }


            })
            
            
           
        },
        updateforneced: (forneced) => {
            return  new Promise(async (resolve, reject) => {

                const numer = await conn.tabforneced().update(forneced , 
                                    {where: {id: forneced.id}});
                  
                 if(numer[0] === 0){
                    reject({'err': 'Não foi posivel  atualizar !!!!'});
                 }else{
                     resolve({'sucess':'Atualizado com sucesso !!!!'});
                 }  


            });
            
            
        },
        deleteforneced: (id) => {
            return  new Promise(async (resolve, reject) =>{ 
                const numer = await conn.tabforneced().destroy( {where: {id: id}});
  
                    if(numer === 0){
                        reject({'err': 'Não foi posivel  removel !!!!'});
                    }else{
                        resolve({'sucess':'Removido com sucesso !!!!'});
                    }  
            });
        }

    }

    return forneced;

};