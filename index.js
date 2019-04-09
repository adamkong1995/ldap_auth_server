const express = require('express');
const Sequelize = require('sequelize');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const passport = require('passport');

require('./services/passport');
require('dotenv').config();

const sequelize = new Sequelize(process.env.Postgres_URL);
require('./models/Users')(sequelize);

const app = express();

// cookie will be store for 30 days
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: ["Test"]
    })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(passport.initialize());
app.use(passport.session());

const User = sequelize.models.users;
console.log(`${User}`);

require('./routes/authRoutes')(app);

app.listen(3000); 