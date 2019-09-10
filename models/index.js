const Sequelize = require('sequelize')
const allConfigs = require('../config/sequelize')
const moviesModel = require('./movies')
const directorsModel = require('./directors')

const config = allConfigs['development']

const connection = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect,
})

const movies = moviesModel(connection, Sequelize)
const directors = directorsModel(connection, Sequelize, movies)



module.exports = {
    movies,
    directors,
}