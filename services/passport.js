const passport = require('passport');
const LdapStrategy = require('passport-ldapauth').Strategy;
const Sequelize = require('sequelize');

require('dotenv').config();

passport.serializeUser(function(user, done) {
    console.log('serializeUser');
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    console.log('deserializeUser');
    done(null, user);
});

passport.use(new LdapStrategy({
    server: {
        url: process.env.LDAP_URL,
        bindDN: process.env.LDAP_USER,
        bindCredentials: process.env.LDAP_PASSWORD,
        searchBase: 'cn=users,dc=asmhk,DC=local',
        searchFilter: '(sAMAccountName={{username}})'
    }
    }, (user, done) => {
        console.log(user.dn);
    })
);
