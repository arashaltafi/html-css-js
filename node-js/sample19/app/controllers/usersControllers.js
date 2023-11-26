const UserModel = require('../models/UserModel')

const usersList = async (req, res, next) => {
    try {
        let projection = {};
        if (req.query.fields) {
            projection = req.query.fields.split(",").reduce((total, current) => {
                return { [current]: 1, ...total }
            }, {})
        }

        const users = await UserModel.find({}, projection);
        res.status(200).send({
            success: true,
            message: 'users list successfully created!!!',
            data: {
                users
            }
        });
    } catch (error) {
        next(error)
    }
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
        if (first_name == undefined || first_name == "" || last_name == undefined || last_name == "") {
            return res.status(422).send({
                error: true,
                message: 'data input is not valid!'
            })
        }

        const newUser2 = new UserModel({
            first_name,
            last_name,
            mobile,
            email
        })

        await newUser.save()

        res.status(201).send({
            success: true,
            message: 'user added successfully.',
            newUser
        })
    } catch (error) {
        next(error)
    }
}

const getUser = async (req, res, next) => {
    try {
        const { id } = req.params
        if (id) {
            const user = await UserModel.findOne({ _id: id })
            if (!user) {
                res.status(404).send({
                    error: true,
                    message: 'user not found!'
                });
            } else {
                res.status(200).send({
                    success: true,
                    data: {
                        user
                    }
                });
            }
        } else {
            res.status(404).send({
                error: true,
                message: 'user not found!'
            });
        }
    } catch (error) {
        next(error)
    }
}

module.exports = {
    usersList, addUser, getUser
};