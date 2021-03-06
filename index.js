let express = require('express')
let bodyParser = require('body-parser')
let models = require('./models')

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

app.use(bodyParser.json())
//accept a JSON formatted movie and add that movie to the database
app.post("/movies", (request, response) => {
    const { title, directors, releaseDate, rating, runTime, genres } = request.body
    if (!title || !directors || !releaseDate || !rating || !runTime || !genres) {
        response.status(400).send('You need the movie\'s: title, directors, release date, rating, run time, and genres')
    }
    models.movies.create({ title, directors, releaseDate, rating, runTime, genres }).then((newMovie) => {
        response.status(201).send(newMovie)
    })
})

// Returns a single director from api with the movies they directed
app.get("/directors/:id", (request, response) => {
    models.directors.findOne({
        where: { id: request.params.id }
    }).then((director) => {
        if (Number(id) === director.id) {
            response.send(director)
        }
        else {
            response.send("Error: Could not find a director with that ID")
        }
    })
})


//Returns all movies based on the genre given as gName
app.get("/genre/:gName", (request, response) => {
    models.movies.findOne({
        where: { gName: request.params.genres }
    }).then((genre) => {
        if (genre) {
            response.send(genre)
        } else {
            response.sendStatus(404)
        }
    })
})

//Otherwise
app.all('*', (request, response) => {
    response.send("Error use /teams or /teams/:id or whatever")
})

app.listen(port, () => {
    console.log("this is my port: " + port)
});