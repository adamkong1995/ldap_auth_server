const path = require('path')
const express = require('express')

const app = express()
console.log(__dirname)
app.use(express.static(path.join(__dirname, '../public/stylesheets')));
app.use(express.static(path.join(__dirname, '../public/javascript')));

const publicDirectoryPath = [path.join(__dirname, '../public/templates'),
                             path.join(__dirname, '../public/templates/webpage/weekly_updates'),
                             path.join(__dirname, '../public/templates/webpage/manage_task'),
                             path.join(__dirname, '../public/templates/webpage/report'),
                             path.join(__dirname, '../public/templates/webpage/admin')]

app.set('views', publicDirectoryPath)
app.set('view engine', 'ejs')

module.exports = app