const config = require('../config/db.config');
const Sequelize = require('sequelize')
const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
          host:config.HOST,
          dialect:config.dialect,
          operatorsAliases:0,
          pool:{
            max:config.pool.max,
            min:config.pool.min,
            acquire:config.pool.acquire,
            idle:config.pool.idle
          },
        logging:false
    }
);

const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.users = require('../models/users.model')(sequelize,Sequelize);
db.usercards = require('../models/usercards.model')(sequelize,Sequelize);
db.cards = require('../models/cards.model')(sequelize,Sequelize);
db.usercards.belongsTo(db.users, { foreignKey: 'userId' }); // Define the association if needed
db.usercards.belongsTo(db.cards, { foreignKey: 'cardId' }); // Define the association if needed

module.exports = db