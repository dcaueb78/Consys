const User = require('../models/User');

module.exports = {
  async store(req, res) {
    const { name, login, password } = req.body;

    const user = await User.create({
      name,
      login,
      password
    });

    return res.json(user);
  },
}