// Originally based on public domain code by Josh Streger https://github.com/jdstregz/secure-starter
const proxy = require('http-proxy-middleware').createProxyMiddleware;

module.exports = function (app) {
    app.use(proxy(`/api/**`, { target: 'http://localhost:8080' }));
};