import Sequelize, { Model } from 'sequelize';

class Configuracoes extends Model {
  static init(sequelize) {
    super.init(
      {
        qtd_containers: Sequelize.INTEGER,
        usuario_id: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
    return this;
  }
  static associate(models) {
    this.belongsTo(models.Usuarios, { foreignKey: 'usuario_id', as: 'usuario' });
  }
}

export default Configuracoes;
