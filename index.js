let express = require('express')
let bodyParser = require('body-parser')
let models = require('./models')
let Sequelize = require('sequelize')
let port = 1337

let app = express();

//return all movies info
app.get("/movies", (request, response) => {
    models.movies.findAll().then((movies) => {
        response.send(movies)
    })
})

//returns one movie's info based on id number
app.get("/movies/:id", (request, response) => {
    models.movies.findOne({
        where: { id: request.params.id }
    }).then((movies) => {
        if (Number(id) === movies.id) {
            response.send(movies)
        }
        else {
            response.send("Error: Could not find a movie with that ID")
        }
    })
})

//accept a JSON formatted movie and add that movie to the database
app.post("/movies", (request, response) => {

})

// Returns all directors in api alongside the movies they directed
app.get("/directors", (request, response) => {
    models.directors.findAll().then((directors) => {
        response.send(directors)
    })
})

// Returns a single director from api with the movies they directed
app.get("/directors/:id", (request, response) => {

})

// Returns all movies in the associated genre
app.get("/genre", (request, respond) => {

})

app.get("/genre/:gName", (request, respond) => {

})

//Otherwise
app.all('*', (request, response) => {
    response.send("Error use /teams or /teams/:id or whatever")
})

app.listen(port, () => {
    console.log("this is my port: " + port)
});