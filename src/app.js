const app = require('./config')
//const sequelize = require('./database')

app.get('/', (req, res) => {
    res.render("manage_task");
})


app.get('/weekly_updates', (req, res) => {
    res.render('weekly_updates')
})


app.get('/show_report', (req, res) => {
    res.render('report')
})


app.get('/admin_group', (req, res) => {
    res.render('admin_group')
})


app.get('/admin_subgroup', (req, res) => {
    res.render('admin_subgroup')
})


app.get('/admin_freq', (req, res) => {
    res.render('admin_freq')
})


app.get('/admin_updatetype', (req, res) => {
    res.render('admin_updatetype')
})


app.listen(5000, () => {
    console.log('Servers is up on port 5000');
    //sequelize
    //    .authenticate()
    //    .then(() => {
    //        console.log('Connection has been established successfully.');
    //    })
    //    .catch(err => {
    //        console.error('Unable to connect to the database:', err);
    //    });
})