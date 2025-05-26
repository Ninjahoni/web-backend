const route = require('express').Router();

const { Router } = require('express');
const orderController = require('../controller/orderController')

route.get('/orderI', orderController.orderI)

route.get('/orderII', orderController.orderII)

module.exports = route;