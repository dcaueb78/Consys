const Container = require('../models/Container');

module.exports = {
  //lista todos os containers
  async index(req, res) {
    const containers = await Container.find();

    return res.json(containers);
  },

  //cria um novo container
  async store(req, res) {
    const { motoristName, type, size } = req.body;
    const { _creator } = req.headers;

    const container = await Container.create({
      //_creator é o usuário que cadastrou o container.
      _creator,
      motoristName,
      type,
      size   
    });
    
    return res.json(container);
  }
}