const route = require('express').Router();

const { Router } = require('express');
const userController = require('../controller/userController')

route.get('/register', userController.createUser)

route.get('/Login', userController.LoginUser)

module.exports = route;