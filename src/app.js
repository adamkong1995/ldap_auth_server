const app = require('./config')
const sequelize = require('./database')

let passport = require('passport');
let LdapStrategy = require('passport-ldapauth').Strategy;
const bodyParser = require('body-parser');

require('dotenv').config();

let OPTS = {
    server: {
        url: process.env.LDAP_URL,
        bindDN: process.env.LDAP_USER,
        bindCredentials: process.env.LDAP_PASSWORD,
        searchBase: 'cn=users,dc=asmhk,DC=local',
        searchFilter: '(sAMAccountName={{username}})'
    }
};

passport.use(new LdapStrategy(OPTS));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(passport.initialize());

app.use(passport.session());



passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

app.get('/', (req, res) => {
    res.render("manage_task");
})


app.get('/auth', (req, res) => {
    res.render('auth')
})

// app.post('/auth', passport.authenticate('ldapauth', {
//     successRedirect: '/auth/success', failureRedirect: '/auth/fail'
// }));

app.post('/auth', (req, res, next) => {
    var date = new Date()
    passport.authenticate('ldapauth', (err, user, info) => {
        console.log(`err ${err}`);
        console.log(user);
        console.log(info);
    })(req, res, next);
});

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
    // sequelize.sync();
    // sequelize
    //    .authenticate()
    //    .then(() => {
    //        console.log('Connection has been established successfully.');
    //    })
    //    .catch(err => {
    //        console.error('Unable to connect to the database:', err);
    //    });
})