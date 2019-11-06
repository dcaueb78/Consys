const Container = require("../models/Container");

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
  },

  async update(req, res) {
    const { id } = req.params;
    const { type, size, motoristName } = req.body;

    const container = await Container.findById(id);

    if (!container) {
      return res.status(400).json({ error: "Container does not exists" });
    }

    await container.updateOne({
      $set: {
        type,
        size,
        motoristName
      }
    });

    return res.json({
      id,
      type,
      size,
      motoristName
    });
  },

  async delete(req, res) {
    const { id } = req.params;

    const container = await Container.findById(id);

    if (!container) {
      return res.status(400).json({ error: "Container does not exists" });
    }

    await container.remove();

    return res.json({ success: "Container has been deleted!" });
  }
};
