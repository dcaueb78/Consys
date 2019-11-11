export default async (req, res, next) => {
    const estaLogado = req.headers.esta_logado;

    if (!estaLogado) return res.status(401).json({ error: 'Não autorizado. Entre para acessar.' });

    return next();
};