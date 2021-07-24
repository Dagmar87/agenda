var knex = require('knex') ({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: 'dagmar87',
        database: 'agenda'
    }
});

module.exports = knex