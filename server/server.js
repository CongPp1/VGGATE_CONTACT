const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.port || 8007;
const routes = require('./routes');
const db = require('./models/index');



app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}))
app.use('/api', routes);


app.get('/', (req, res) => {
    res.json({ message: 'Hello World' });
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

const testDatabase = async () => {
    try {
        await db.sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};
testDatabase();

module.exports = app;

