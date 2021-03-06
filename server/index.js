const express = require('express');
const next = require('next');
const routes = require('../routes')

// SERVICE
const authService = require('./services/auth');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handler = routes.getRequestHandler(app)


const secretData = [
  {
    title: 'SecretData 1',
    description: 'Plans for spaceship'
  },
  {
    title: 'SecretData 2',
    description: 'My secret passwords'
  }
]

app
  .prepare()
  .then(() => {
    const server = new express();

    server.get('/api/v1/secret', authService.checkJWT, (req, res) => {
      return res.json(secretData);
    });

    server.get('/api/v1/onlysiteowner', authService.checkJWT, authService.checkRole('siteOwner'), (req, res) => {
      return res.json(secretData);
    });

    server.use(function (err, req, res, next) {
      if (err.name === 'UnauthorizedError') {
        res.status(401).send({title: 'Unauthorized', detail: 'Unauthorized Access!'});
      }
    });

    server.get('*', (req, res) => {
      return handler(req, res);
    });

    server.use(handler).listen(3000, err => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
