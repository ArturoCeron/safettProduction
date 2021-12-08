/*jshint esversion: 6 */

//Módulos
const { resolveSoa } = require('dns');
const express = require('express');
const path = require('path');
const expressSession = require('express-session');
const authMid = require('../middleware/authMiddleware');
const redirectIfAuth = require('../middleware/redirectIfAuth');

//Crear objeto router
const router = express.Router();

//Exportar router
module.exports = router;

//Activación de las sesiones (cookies)
router.use(expressSession({
    secret: 'safettProject',
    resave: true,
    saveUninitialized: true
}));

// Variables Globales
router.use((req, res, next) =>{
    res.locals.loggedIn = req.session.userId || null;
    next();
});

//Página home
router.get('/', (req,res) =>{
    console.log(req.session);
    res.render('home');
});

//Metodo GET para logout
const logoutController = require('../controllers/logout');
router.get('/auth/logout', logoutController);

//Página login
const loginController = require('../controllers/login');
router.get('/auth/login', redirectIfAuth, loginController);

const loginUserController = require('../controllers/loginUser');
router.post('/users/login', redirectIfAuth, loginUserController);

//Pagina para registro de usuarios
const newUser = require('../controllers/newUser');
router.get('/users/register', redirectIfAuth, newUser);

//Post para el registro
const newUserController = require('../controllers/storeUser');
const { isBuffer } = require('util');
router.post('/users/register', redirectIfAuth, newUserController);

//Perfil de Alumno
router.get('/perfilAspirante', (req, res) => {
    res.render('applicantProfile');
});

//Perfil de Empresa
router.get('/perfilEmpresa', (req, res) => {
    res.render('companyProfile');
});

//RENDER TEMPORAL
//REGISTER COMPANY
router.get('/company/register', (req, res) => {
    res.render('companyRegister');
});

//POST REGISTER COMPANY
const newCompanyController = require('../controllers/storeCompany');
router.post('/company/register', redirectIfAuth, newCompanyController);

//Página home
router.use((req,res) =>{
    res.render('notfound');
});