import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

// models
import Clientes from '../models/Clientes';
import Configuracoes from '../models/Configuracoes';
import Motoristas from '../models/Motoristas';
import Registros from '../models/Registros';
import Usuarios from '../models/Usuarios';

const models = [
    Clientes,
    Configuracoes,
    Motoristas,
    Registros,
    Usuarios,
]

class Database {
    constructor() {
      this.init();
    }
  
    init() {
      this.connection = new Sequelize(databaseConfig);
      models
        .map(model => model.init(this.connection))
        .map(model => model.associate && model.associate(this.connection.models));
    }
  }
  
  export default new Database();