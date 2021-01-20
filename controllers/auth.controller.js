const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../models/Users')
const errorHandler = require('../utils/errorHandler')

module.exports.auth = async (req, res) => {
    const { password } = req.body;
    const candidate = await Users.findOne({login: 'admin'});

    if(candidate) {
        const passwordResult = bcrypt.compareSync(password, candidate.password) 
        if(passwordResult) {
            const token = jwt.sign({
                id: candidate._id
            }, process.env.JWT, {expiresIn: 3600})

            res.status(200).json({token: `Bearer ${token}`})
        } else {
            res.status(404).json('Не верный пароль')
        }

    } else {
        res.status(404).json('Не верный пароль')
    }
}