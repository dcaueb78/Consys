import Clientes from '../models/Clientes';

module.exports = {
    async index(req, res) {
        const listaDeClientes = await Clientes.findAll();
        
        return res.status(200).json(listaDeClientes);
    },

    async store(req, res) {

        const cliente = {
            nome_fantasia: req.body.nomeFantasia,
            cnpj: req.body.cnpj,
            email: req.body.email,
            telefone: req.body.telefone
        }

        Clientes.create(cliente).then(
            () => { res.status(200).json(cliente); }
        )

    }
}
