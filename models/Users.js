const Sequelize = require('sequelize');

module.exports = sequelize => {
    class User extends Sequelize.Model {}
    User.init({
        user_dn: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'users'
    });
    User.sync()
}