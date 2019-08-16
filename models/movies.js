//The model for 'movies'

module.exports = ((sequelize, Sequelize) => {
    return sequelize.define('movies', {
        id: {

        },
        title: {

        },
        directors: {

        },
        releaseDate: {

        },
        rating: {

        },
        runTime: {

        },
        genres: {

        },
        createdAt: {
            type: Sequelize.DATE,
        },
        updatedAt: {
            type: Sequelize.DATE,
        }
        
    })
})