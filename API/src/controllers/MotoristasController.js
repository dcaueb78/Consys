import Motoristas from '../models/Motoristas';

module.exports = {
    async index(req, res) {
        const listaDeMotoristas = await Motoristas.findAll();
        
        return res.status(200).json(listaDeMotoristas);
    },

    async store(req, res) {

        let motorista = {
            nome: req.body.nome,
            cpf: req.body.cpf,
            telefone: req.body.telefone
        }

        await Motoristas.create(motorista)

        motorista = await Motoristas.findAll();

        motorista = motorista[motorista.length -1];

        return res.status(200).json(motorista)

    },

    async delete(req, res) {
        const motoristaId = req.params.id;

        const jaExiste = await Motoristas.findOne({ where: { id: motoristaId } });

        if (!jaExiste) {
            return res.status(400).json({ status: "Id inexistente." })
        }

        const motorista = await Motoristas.findOne({ where: { id: motoristaId } });

        await Motoristas.destroy({ where: { id: motoristaId } });

        return res.status(200).json(motorista);
    }
}
