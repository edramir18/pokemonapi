const express = require('express');
const bodyParser = require('body-parser');

const app = express();

/**
 * Body Parser
 */
app.use(bodyParser.urlencoded({extended: true}));

/**
 * Home Route
 */
app.get('/', (_, res) => res.status(200).json({msg: 'OK'}));

/**
 * Listener
 */
const port = 3000;
app.listen(3000, _ => console.log(`Server is listening in http://localhost:${port}`));