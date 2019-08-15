let express = require('express')
let bodyParser = require('body-parser')
let models = require('./models')
let Sequelize = require('sequelize')
let port = 1337

let app = express();