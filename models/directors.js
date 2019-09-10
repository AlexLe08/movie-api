//The model for directors

module.exports = ((sequelize, Sequelize, Movies) => {
    return sequelize.define('directors', {
        id: {
            type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
        },
        movieID: {
            type: Sequelize.INTEGER, reference: { model: Movies, key: 'id' }
        },
        moviesDirected: {
            type: Sequelize.STRING,
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