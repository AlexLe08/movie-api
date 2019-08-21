//The model for 'movies'

module.exports = ((sequelize, Sequelize) => {
    return sequelize.define('movies', {
        id: {
            type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true
        },
        title: {
            type: Sequelize.STRING,
        },
        directors: {
            //Separate table
        },
        releaseDate: {
            type: Sequelize.DATE
        },
        rating: {
            type: Sequelize.ENUM('G', 'PG', 'PG-13', 'R', 'Not Rated', 'Passed')
        },
        runTime: {
            type: Sequelize.STRING
        },
        genres: {
            //separate table
        },
        createdAt: {
            type: Sequelize.DATE,
        },
        updatedAt: {
            type: Sequelize.DATE,
        }

    })
})