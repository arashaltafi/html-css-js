const userRouter = require('./users');
const sessionRouter = require('./session');
const auth = require('../middlewares/auth')

module.exports = (app) => {
    app.use('/api/v1/users', [auth], userRouter);
    app.use('/api/v1/session', sessionRouter);
}