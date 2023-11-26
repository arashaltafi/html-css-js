const usersList = (req, res, next) => {
    res.send({
        success: true,
        message: 'users list successfully created!!!'
    });
}

module.exports = {
    usersList
};