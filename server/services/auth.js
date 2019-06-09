const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

// MIDDLEWARE
exports.checkJWT = jwt({ 
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 15,
    jwksUri: 'https://dev-jzvx0lts.auth0.com/.well-known/jwks.json'
  }),
  audience: 'FTWZ5h3c1LOxUncuwSV8pA7nck4Xl4Eu',
  issuer: 'https://dev-jzvx0lts.auth0.com/',
  algorithms: ['RS256']
});