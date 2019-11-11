import Clientes from '../models/Clientes';

module.exports = {
    async index(req, res) {
        const listaDeClientes = await Clientes.findAll();
        
        return res.status(200).json(listaDeClientes);
    },

    async store(req, res) {

        let cliente = {
            nome_fantasia: req.body.nomeFantasia,
            cnpj: req.body.cnpj,
            email: req.body.email,
            telefone: req.body.telefone
        }

        await Clientes.create(cliente)

        cliente = await Clientes.findAll();

        cliente = cliente[cliente.length - 1];

        return res.status(200).json(cliente)

    },

    async delete(req, res) {

        const clienteId = req.params.id;
        
        const jaExiste = await Clientes.findOne({ where: { id: clienteId } });

        if (!jaExiste) {
            return res.status(400).json({ status: "Id inexistente." })
        }


        const cliente = await Clientes.findOne({ where: { id: clienteId } });

        await Clientes.destroy({ where: { id: clienteId } });

        return res.status(200).json(cliente);
    }
}
