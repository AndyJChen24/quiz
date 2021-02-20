const csurf = require('csurf');
const express = require('express');
const helmet = require('helmet');
const hpp = require('hpp');
const path = require('path');
const rateLimit= require('express-rate-limit')
const session = require('cookie-session');

const routes = require('./routes');

/* dotenv config */
// const dotenv = require('dotenv');
// dotenv.config({path: path.resolve(__dirname, '.env')});

const app = express();

/* security config */
// app.use(helmet());
// app.use(hpp());

/* cookies config */
// app.use(
//     session({
//         name: 'session',
//         secret: process.env.COOKIE_SECRET,
//         expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours
//     })
// );
// app.use(csurf());

/* Rate Limiter */
// const limiter = rateLimit({
//     windowMs: 15 * 60 * 1000,
//     max: 100,
// });
// app.use(limiter);

/* passport config */
// const passport = require('./middlewares/passport');
// app.use(passport.initialize());

app.use(routes);

app.listen(8080, () => {
    console.log("Express server running on port 8080");
});

module.exports = app;