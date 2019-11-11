import Configuracoes from '../models/Configuracoes';

module.exports = {
    async index(req, res) {
        const configAtual = await Configuracoes.findAll();
        
        return res.status(200).json(configAtual[0]);
    },

    async store(req, res) {

        const qtdContainers = req.body.qtdContainers;

        if (!qtdContainers) {
            return res.status(400).json('Está faltando o atributo "qtdContainers" no corpo da requisição');
        }

        const configAtual = await Configuracoes.findAll();

        if (configAtual[0]) {
            await Configuracoes.update(
                { qtd_containers: qtdContainers },
                { where: { usuario_id: 1 } }
            );
            return res.status(200).json(`Quantidade de containers atualizada. Nova capacidade: ${qtdContainers}`);
        } else {
            await Configuracoes.create({ qtd_containers: qtdContainers, usuario_id: 1 })
            return res.status(200).json(`Quantidade de containers foi inserida. Capacidade: ${qtdContainers}`);
        }

    }
}
