const app = require('./config')
const sequelize = require('./database')

app.get('/', (req, res) => {
    res.render("task_update.ejs");
})

app.listen(5000, () => {
    console.log('Servers is up on port 5000');
    sequelize
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        });
})