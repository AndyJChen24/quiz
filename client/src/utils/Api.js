/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
export default {
    getQuestions() {
        return axios.get(`/api/quiz/random`);
    },
};