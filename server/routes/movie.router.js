const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "movies"
    ORDER BY "id" ASC;`
    
    pool.query(queryText)
        .then((result) => { 
            res.send(result.rows); })
        .catch((err) => {
            console.log('Error completing SELECT movies query', err);
            res.sendStatus(500);
        });
});

router.post('/', (req, res) => {
    console.log(req.body);
    
    const queryText = `
    UPDATE "movies"
    SET "title"='${req.body.title}', "description"='${req.body.description}'
    WHERE "id"='${req.body.id}';`

    pool.query(queryText)
    .then((result)=> {
        res.sendStatus(200);
    }).catch((error)=> {
        console.log('Error completing POST movies query',error);
        res.sendStatus(500);
    });
});

router.get('/genres', (req,res) => {
    const queryText=`
    SELECT "movies".id, "genres".name from "movies"
    JOIN "movies_genres" ON "movies_genres".movie_id="movies".id
    JOIN "genres" ON "movies_genres".genre_id="genres".id;`
    pool.query(queryText)
    .then((result) => {
        res.send(result.rows); })
    .catch((err) => {
        console.log('Error completing SELECT genres query', err);
        res.sendStatus(500);
    });
});

module.exports = router;