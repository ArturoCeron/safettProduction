/*jshint esversion: 6 */

const User = require('../models/companyUser');
const Company = require('../models/empresas');
const path = require('path');

module.exports = (req, res)=>{
    let user = new User();
    user.username = req.body.username;
    user.password = req.body.password;
    user.save( (error, user) =>{
        if (error) {
            return res.redirect('/users/register');
        }
    });

    let company = new Company();

};