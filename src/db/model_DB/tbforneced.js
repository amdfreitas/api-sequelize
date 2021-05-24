const Sequelize = require('sequelize');

module.exports = (app) => {

    let forenConfig = {

         tabforneced: () =>{
            
            const conn = app.db.connect;
            const forneced = {

                nome:{
                    type: Sequelize.STRING,
                    allowNull: false
                },
                endereco:{
                    type: Sequelize.STRING,
                    allowNull: false
                },
                email:{
                    type: Sequelize.STRING,
                    allowNull: false
                },
                cidade:{
                    type: Sequelize.STRING,
                    allowNull: false
                }
            
            }

            const options = {
                freezeTableName: true,
                tableName:'FORNECEDOR',
                timestamp:true,
                createdAt:'datacriacao',
                updatedAt:'dataatualizacao',
                version:'versao'
            }

            return  conn.connect().define('FORNECEDOR',forneced,options);

         }
    }

    return forenConfig;

};

