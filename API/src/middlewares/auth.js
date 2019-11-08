import Usuarios from '../models/Usuarios';

export default async (req, res, next) => {
    const userId = req.headers.user_id;

    if (!userId) return res.status(401).json({ error: 'Usuário não informado.' });

    try {
        const user = Usuarios.findOne({ where: { id: userId } });
        console.log(user);
        req.userId = userId;
        return next();
    } catch (err) {
        console.log(err);
        return res.status(400).json({ error: 'Usuário inexistente' });
    }
};