const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Pokemon API',
            version: '1.0.0',
            description: 'Pokemon API with Express',
            contact: {
                name: 'Eduardo Ramirez',
                url: 'https://github.com/edramir18'
            },
        }
    },
    apis: ['./docs/*.js', './routes/*.js']
};
const specs = swaggerJsdoc(options);

module.exports = specs;