const express = require('express');


const router = express.Router();

router.get('/', (req, res) => {
    router.get('/', (req, res) => {
    const queryText = 'SELECT * FROM "movies"';
    pool.query(queryText)
        .then((result) => { res.send(result.rows); })
        .catch((err) => {
        console.log('Error completing SELECT plant query', err);
        res.sendStatus(500);
        });
    });
});

module.exports = router;