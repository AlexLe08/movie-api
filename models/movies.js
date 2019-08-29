//The model for 'movies'

module.exports = ((sequelize, Sequelize) => {
    return sequelize.define('movies', {
        id: {
            type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true
        },
        title: {
            type: Sequelize.STRING,
        },
        director: {
            type: Sequelize.STRING,
        },
        releaseDate: {
            type: Sequelize.DATE,
        },
        rating: {
            type: Sequelize.ENUM('G', 'PG', 'PG-13', 'R', 'Not Rated', 'Passed'),
        },
        runTime: {
            type: Sequelize.STRING
        },
        genres: {
            type: Sequelize.STRING
        },
        createdAt: {
            type: Sequelize.DATE,
        },
        updatedAt: {
            type: Sequelize.DATE,
        },
        deletedAt: {
            type: Sequelize.DATE,
        }

    })
})