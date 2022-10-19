const conf = require('config');
const Sequelize = require('sequelize');

module.exports = (app) => {
  conexao = {
    connect: () => {
      return new Sequelize(
        conf.get('mysql.banco_dados'),
        conf.get('mysql.user'),
        conf.get('mysql.pass'),
        {
          host: conf.get('mysql.host'),
          dialect: conf.get('mysql.dialect'),
        }
      );
    },
  };

  return conexao;
};
