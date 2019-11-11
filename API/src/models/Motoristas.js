import Sequelize, { Model } from 'sequelize';

class Motoristas extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        cpf: Sequelize.CHAR(11),
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
