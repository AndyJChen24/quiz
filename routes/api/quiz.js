const axios = require('axios');
const router = require('express').Router();

router.route('/questions')
    .get((req, res) => {
        axios.get('https://quizapi.io/api/v1/questions/?apiKey=33eUP8yNjSV8IGEZTFQca6p6V1y258Yrm6YGX4SW&limit=10')
        .then((response) => {
            console.log(response)
            res.json(response.data);
            
        })
        .catch((err) => {
            console.log('backend axios error getting title');
            res.status(err.response.status).send(err.response.statusText);
        });
    });
    router.route('/random')
    .get((req, res) => {
        console.log('fsasfsdfs')
    });

module.exports = router;