const path = require('path')
const express = require('express')

const app = express()
console.log(__dirname)
app.use(express.static(path.join(__dirname, '../public/stylesheets')));
app.use(express.static(path.join(__dirname, '../public/javascript')));

const publicDirectoryPath = [path.join(__dirname, '../public/templates'),
                             path.join(__dirname, '../public/templates/webpage/task_update'),
                             path.join(__dirname, '../public/templates/webpage/manage_task'),
                             path.join(__dirname, '../public/templates/webpage/updatePage'),
                             path.join(__dirname, '../public/templates/webpage/reportPage'),
                             path.join(__dirname, '../public/templates/webpage/administration')]

app.set('views', publicDirectoryPath)
app.set('view engine', 'ejs')

module.exports = app