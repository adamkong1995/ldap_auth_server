const passport = require('passport');


module.exports = app => {
    app.get('/auth/ldap', (req, res) => {
        res.send(`<!DOCTYPE html>
        <html>
            <head>
            </head>
            <body>
                <form method='post' action='/auth/ldap'>
                    <input type='text' name='username' id='username'/>
                    <input type='password' name='password' id='password'/>
                    <button type='submit'>Submit</button>
                </form>
            </body>
        </html>`)
    })
    
    app.post('/auth/ldap',  passport.authenticate('ldapauth', {session:false},
        (req, res) => console.log(res))
    );

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.send(req.user);
    });

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });
}