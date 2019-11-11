import Sequelize, { Model } from 'sequelize';

class Usuarios extends Model {
  static init(sequelize) {
    super.init(
      {
        usuario: Sequelize.CHAR(50),
        senha: Sequelize.CHAR(10),
      },
      {
        sequelize,
      }
    );
    return this;
  }
  
}

export default Usuarios;