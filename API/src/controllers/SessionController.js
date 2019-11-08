import Usuarios from '../models/Usuarios';

module.exports = {
    async store(req, res) {
        const { usuario, senha } = req.body;
        
        const user = Usuarios.findOne({ where: { usuario, senha } });

        if (user) {
            return res.status(200).json({user: user.usuario, senha: user.senha });
        } else {
            return res.status(400).json({error: 'usuário não existe'});
        }
    }
}
