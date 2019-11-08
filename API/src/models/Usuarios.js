import Sequelize, { Model } from 'sequelize';

class Usuarios extends Model {
  static init(sequelize) {
    super.init(
      {
        id: Sequelize.INTEGER,
        cliente_id: Sequelize.INTEGER,
        usuario: Sequelize.CHAR(50),
        senha: Sequelize.CHAR(10),
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Clientes, { foreignKey: 'cliente_id', as: 'cliente' });
  }
}

export default Usuarios;
