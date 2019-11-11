import Registros from '../models/Registros';

module.exports = {
    async index(req, res) {
        const listaDeRegistros = await Registros.findAll();
        
        return res.status(200).json(listaDeRegistros);
    },

    async entrada(req, res) {
        //Obs: Na entrada, os campos de data_saida e valor_locacao ficarao nulos
        //Obs2: status 0 = somente entreou, status 1 = já saiu 
        const registro = {
            data_entrada: req.body.dataEntrada,
            motorista_id: req.body.motoristaId,
            cliente_id: req.body.clienteId,
            status: 0,
            previsao_dias: req.body.previsao,
            localizacao: req.body.localizacao,
            container_pes: req.body.containerPes,
            usuario_id: 1,
            nivel: req.body.nivel
        }

        await Registros.create(registro);
        const registros = await Registros.findAll();

        
        return res.status(200).json(registros[registros.length - 1]);

    },

    async saida(req, res) {
        //Obs: Na entrada, os campos de data_saida e valor_locacao ficarao nulos
        //Obs2: status 0 = somente entreou, status 1 = já saiu 
        const registro = {
            id: req.body.id,
            data_saida: req.body.dataEntrada,
            valor_locacao: req.body.valorLocacao
        }
        console.log(registro);
        await Registros.update(
            { data_saida: registro.data_saida, valor_locacao: registro.valor_locacao },
            { where: { id: registro.id } }
        );
        const reg = await Registros.findOne({ where: { id: registro.id } });

        
        return res.status(200).json(reg);

    }
}
