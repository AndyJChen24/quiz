const axios = require('axios');
const router = require('express').Router();

router.route('/questions')
    .get((req, res) => {
        axios.get('https://quizapi.io/api/v1/questions/?apiKey=33eUP8yNjSV8IGEZTFQca6p6V1y258Yrm6YGX4SW&limit=10')
        .then((response) => {            
            for (const question in response.data) {
                // Build an answerArray of objects that include the answer name (answer_a, etc),
                // the answerValue ("Foo") and the correctness (boolean)
                const answerArray = [];

                for (const answerName in response.data[question].answers) {
                    const answerValue = response.data[question].answers[answerName];
                    const answerCorrect = response.data[question].correct_answers[`${answerName}_correct`];
                    if (answerValue !== null) { // don't save unused answer slots
                        const thisAnswer = {
                            answerName,
                            answerValue,
                            answerCorrect
                        };
                        // console.log(thisAnswer)
                        answerArray.push(thisAnswer);
                    }
                }
                question.answerArray = answerArray;
            }

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