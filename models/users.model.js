module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        firstName: {
            type: Sequelize.STRING
        },
        lastname: {
            type: Sequelize.STRING
        }
    });
    return User;
};