const Sequelize = require('sequelize');

module.exports = sequelize => {
    class User extends Sequelize.Model {}
    User.init({
        user_dn: {
            type: Sequelize.STRING,
            allowNull: false
        },
        user_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        user_email: {
            type: Sequelize.STRING
        }
    }, {
        sequelize,
        modelName: 'users'
    });
    User.sync()
}