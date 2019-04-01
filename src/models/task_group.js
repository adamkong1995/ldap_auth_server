import { Model, Sequelize } from "sequelize/types";
const sequelize = require('src/database')


class Task_group extends sequelize.Model{}
task_group.init({
    group_id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    group_name: {
        type: Sequelize.STRING
    }
},{
    sequelize
})

module.exports = Task_group