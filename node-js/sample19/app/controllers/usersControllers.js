const UserModel = require('../models/UserModel')

const usersList = (req, res, next) => {
    res.send({
        success: true,
        message: 'users list successfully created!!!'
    });
}

const addUser = async (req, res, next) => {
    try {
        const newUser = new UserModel({
            first_name: 'arash',
            last_name: 'altafi',
            mobile: 9187677641,
            email: 'arashaltafi1377@gmail.com',
            create_at: new Date(1700991496324).getTime(),
            update_at: Date.now() - 36000
        })

        const { first_name, last_name, mobile, email } = req.body;
        const newUser2 = new UserModel({
            first_name,
            last_name,
            mobile,
            email
        })

        await newUser.save()

        res.send({
            success: true,
            message: 'user added successfully.',
            newUserID: newUser._id
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    usersList, addUser
};