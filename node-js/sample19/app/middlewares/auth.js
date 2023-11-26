module.exports = (req, res, next) => {
    if (!('authorization' in req.headers)) {
        return res.status(401).send({
            status: 'error',
            code: 401,
            message: "your are not authorized!"
        });
    }

    next()
}