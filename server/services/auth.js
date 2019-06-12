const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const namespace = 'http://localhost:3000/';

// MIDDLEWARE
exports.checkJWT = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 50,
    jwksUri: 'https://dev-jzvx0lts.auth0.com/.well-known/jwks.json'
  }),
  audience: 'FTWZ5h3c1LOxUncuwSV8pA7nck4Xl4Eu',
  issuer: 'https://dev-jzvx0lts.auth0.com/',
  algorithms: ['RS256']
}) 

exports.checkRole = role => (req, res, next) => {
  const user = req.user;

  if (user && (user[namespace + 'role'] === role)) {
    next();
  } else {
    return res.status(401).send({title: 'Not Authorized', details: 'You are not authorized to access this data.'})
  }
}