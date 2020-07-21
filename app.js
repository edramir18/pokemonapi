const express = require('express');
const bodyParser = require('body-parser');

const app = express();

/**
 * Body Parser
 */
app.use(bodyParser.urlencoded({extended: true}));

/**
 * Swagger API
 */
const swaggerJSDoc = require('./swagger');
const swaggerUI = require('swagger-ui-express');
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerJSDoc));

/**
 * Home Route
 */
app.get('/', (_, res) => res.status(200).json({msg: 'OK'}));

/**
 * Routes
 */
const pokemon = require('./routes/pokemon');
app.use('/pokemon', pokemon);

/**
 * Listener
 */
const port = 3000;
app.listen(3000, _ => console.log(`Server is listening in http://localhost:${port}`));