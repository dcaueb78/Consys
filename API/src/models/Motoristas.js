import Sequelize, { Model } from 'sequelize';

class Motoristas extends Model {
  static init(sequelize) {
    super.init(
      {
        id: Sequelize.INTEGER,
        nome: Sequelize.STRING,
        cpf: Sequelize.CHAR(11),
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

export default Motoristas;
