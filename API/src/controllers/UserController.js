const User = require('../models/User');
const session = require('express-session');;

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

    async signIn(req, res) {
        const { login, password } = req.body;
        let jsonResponse = {userLogin: login, signIn: false};

        const user = await User.findOne({ login, password }, { login: 1, name: 1});

        if(user) {
            jsonResponse.signIn = true;
        }

        return res.json(jsonResponse);
    }
}
