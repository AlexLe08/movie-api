//Model for genres table

module.exports = ((sequelize, Sequelize) => {
    return sequelize.define('movies', {
        id: {
            type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true
        },
        genres: {
            //separate table
        },
        moviesList: {

        },
        createdAt: {
            type: Sequelize.DATE,
        },
        updatedAt: {
            type: Sequelize.DATE,
        }

    })
})