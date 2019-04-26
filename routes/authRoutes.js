const passport = require('passport');


module.exports = app => {
    app.get('/auth/ldap', (req, res) => {
        console.log(req.headers.referer)
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

    // app.post('/auth/ldap', passport.authenticate('ldapauth', {session:true, successRedirect: '/auth/success', failureRedirect: '/auth/fail'}));


    app.post('/auth/ldap', passport.authenticate('ldapauth', {session:true}), (req, res) => {
        console.log({
            status: 'ok',
            user: req.user
        })
        res.json({user: req.user});
    });


    app.get('/api/logout', (req, res) => {
        req.logout();
        res.send(req.user);
    });

    app.get('/api/current_user', (req, res) => {
        res.json({user: req.user});
    });
}