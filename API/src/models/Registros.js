import Sequelize, { Model } from 'sequelize';

class Registros extends Model {
  static init(sequelize) {
    super.init(
      {
        data_entrada: Sequelize.DATE,
        motorista_id: Sequelize.INTEGER,
        cliente_id: Sequelize.INTEGER,
        usuario_id: Sequelize.INTEGER,
        data_saida: Sequelize.DATE,
        status: Sequelize.INTEGER,
        previsao_dias: Sequelize.INTEGER,
        localizacao: Sequelize.STRING,
        valor_locacao: Sequelize.INTEGER,
        container_pes: Sequelize.INTEGER,
        nivel: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
    return this;
  }
  static associate(models) {
    this.belongsTo(models.Motoristas, { foreignKey: 'motorista_id', as: 'motorista' });
    this.belongsTo(models.Clientes, { foreignKey: 'cliente_id', as: 'cliente' });
    this.belongsTo(models.Usuarios, { foreignKey: 'usuario_id', as: 'usuario' });
  }
}

export default Registros;
