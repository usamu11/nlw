import knex, { ConnectionConfig } from 'knex';
import path from 'path';

const conection = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite'), 
    },
});

export default connection;