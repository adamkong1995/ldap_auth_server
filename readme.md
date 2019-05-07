# Ldap Auth Server

It is a api server that support authentication using Windows Ldap/AD.

## Available End Points
1. /auth/ldap
    - GET: A simple login page
    - POST: Verify the username and password from AD server. If  success, save the user to DB and return cookie to client.
2. /api/current_user --> Return current user object
3. /api/logout --> Logout and return the cookie.

## To Run this app
1. clone this repository
2. create a .env file and setup the following parameters
    - Postgres_URL --> URL of your PostgreSQL
    - LDAP_URL --> URL of your AD server
    - LDAP_USER --> Account to connect to AD server
    - LDAP_PASSWORD --> Password of that account
    - LDAP_SEARCHBASE --> Ldap query for verifying user account
    - LDAP_SEARCHFILTER --> Field to match the username input by user
        - Details of ldap params: https://github.com/vesse/passport-ldapauth
3. `npm install`

