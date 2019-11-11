import Motoristas from '../models/Motoristas';

module.exports = {
    async index(req, res) {
        const listaDeMotoristas = await Motoristas.findAll();
        
        return res.status(200).json(listaDeMotoristas);
    },

    async store(req, res) {

        const motorista = {
            nome: req.body.nome,
            cpf: req.body.cpf,
            telefone: req.body.telefone
        }

        Motoristas.create(motorista).then(
            () => { res.status(200).json(motorista); }
        )

    }
}
