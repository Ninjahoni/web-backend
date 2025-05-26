const route = require('express').Router();

const productContoller = require('../controller/productContoller')

route.get('/product1', productContoller.product1);

route.get('/product2', productContoller.product2)

module.exports = route;