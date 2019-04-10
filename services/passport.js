const passport = require('passport');
const LdapStrategy = require('passport-ldapauth').Strategy;
const sequelize = require('./sequelize');
const Users = sequelize.models.users;

require('dotenv').config();

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    Users.findByPk(id)
        .then(user => {
            done(null, user);
        });
});

passport.use(new LdapStrategy({
    server: {
        url: process.env.LDAP_URL,
        bindDN: process.env.LDAP_USER,
        bindCredentials: process.env.LDAP_PASSWORD,
        searchBase: process.env.LDAP_SEARCHBASE,
        searchFilter: process.env.LDAP_SEARCHFILTER
    }
    }, (user, done) => {
        Users.findOne({where: {user_dn: user.dn}})
            .then(existingUser => {
                if (existingUser) {
                    done(null, existingUser);
                } else {
                    new Users({user_dn: user.dn})
                    .save()
                    .then(user => done(null, user));
                }
            })
    })
);
