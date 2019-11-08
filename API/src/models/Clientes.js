import Sequelize, { Model } from 'sequelize';

class Clientes extends Model {
  static init(sequelize) {
    super.init(
      {
        id: Sequelize.INTEGER,
        nome_fantasia: Sequelize.STRING,
        cnpj: Sequelize.CHAR(16),
        email: Sequelize.STRING,
        telefone: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}

export default Clientes;
