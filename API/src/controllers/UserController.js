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
        console.log(req);
        const { login, password } = req.body;
        const reqLogin = login;
        const reqPassword = password; 

        let jsonResp = {
            userLogin: reqLogin,
            signIn: null,
        };

        let entry = await User.find({
           login: reqLogin,
        });

        if (entry[0]) {
            jsonResp.signIn = false;
            let pass = await User.find({
                login: reqLogin,
                password: reqPassword,
            });
            if(pass[0]) {
                jsonResp.signIn = true;
                jsonResp.userName = pass[0].name;
            }
        }

        return res.json(jsonResp)
    }
}
