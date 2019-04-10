const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const passport = require('passport');

const sequelize = require('./services/sequelize');
require('./models/Users')(sequelize);

require('./services/passport');

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


require('./routes/authRoutes')(app);

app.listen(3000); 