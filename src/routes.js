const express = require('express')
const controllers = require('./app/controllers')
const routes = express.Router()

routes.get('/', controllers.UserController.list)

module.exports = routes
