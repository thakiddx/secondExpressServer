const express = require('express');

const app = express();

const movies = [ { id: 1, title: "Inception", director: "Christopher Nolan", year: 2010 },
 { id: 2, title: "Interstellar", director: "Christopher Nolan", year: 2014 },
  { id: 3, title: "Parasite", director: "Bong Joon-ho", year: 2019 },
 { id: 4, title: "The Matrix", director: "The Wachowskis", year: 1999 } ];

app.get('/', (req, res) => {
    res.send('Welcome to my movie api! Use /info for guidance.');
});

app.get('/info', (req, res) => {
   res.send('To fetch all movies, use Get/movies To add a new movie, use POST/movies. To update or delete a movie, use PUT or DELET on /movies/:id respectively.'); 
});

app.get('/movies', (req, res) => {
    res.send(movies);
});

app.get('/movies/:id', (req, res) => {
    res.send(movies.find(movie => movie.id === parseInt(req.params.id)));
});

app.delete('/movies/:id', (req, res) => {
    const movieId = parseInt(req.params.id);
    const index = movies.findIndex(movie => movie.id === movieId);
    if (index > -1) {
        movies.splice(index, 1);      
        res.status(200).send(`Movie with ID ${movieId} has been deleted.`);
    } else {
        res.status(404).send('Movie not found');
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

