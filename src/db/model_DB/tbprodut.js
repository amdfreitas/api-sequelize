const Sequelize = require('sequelize');

module.exports = (app) => {
  let configProdut = {
    tabprodut: () => {
      const conn = app.db.connect;
      const produt = {
        nome: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        descricao: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        preco: {
          type: Sequelize.FLOAT,
          allowNull: false,
        },
        estoque: {
          type: Sequelize.INTEGER,
          allowNull: false,
          defaultValue: 0,
        },
        fornecedor: {
          type: Sequelize.INTEGER,
          allowNull: false,
          reference: {
            model: require('../model_DB/tbforneced'),
            key: 'id',
          },
        },
      };

      const options = {
        freezeTableName: true,
        tableName: 'PRODUTO',
        timestamp: true,
        createdAt: 'datacriacao',
        updatedAt: 'dataatualizacao',
        version: 'versao',
      };

      return conn.connect().define('PRODUTO', produt, options);
    },
    tab: () => {
      const conn = app.db.connect;
      const produt = {
        nome: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        descricao: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        preco: {
          type: Sequelize.FLOAT,
          allowNull: false,
        },
        estoque: {
          type: Sequelize.INTEGER,
          allowNull: false,
          defaultValue: 0,
        },
        fornecedor: {
          type: Sequelize.INTEGER,
          allowNull: false,
          reference: {
            model: require('../model_DB/tbforneced'),
            key: 'id',
          },
        },
      };

      const options = {
        freezeTableName: true,
        tableName: 'PRODUTO',
        timestamp: true,
        createdAt: 'datacriacao',
        updatedAt: 'dataatualizacao',
        version: 'versao',
      };

      return conn.connect().define('PRODUTO', produt, options);
    },
  };

  return configProdut;
};
