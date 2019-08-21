//The model for directors table

module.exports = ((sequelize, Sequelize) => {
    return sequelize.define('directors', {
        id: {
            type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
        },
        moviesList: {
            //Separate table
        },
        createdAt: {
            type: Sequelize.DATE,
        },
        updatedAt: {
            type: Sequelize.DATE,
        }

    })
})