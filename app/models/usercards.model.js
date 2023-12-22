
module.exports = (sequelize,Sequelize) =>{
    const UserCards = sequelize.define('usercards',{
        id:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNUll:false
        },
        userId:{
            type:Sequelize.INTEGER,
            allowNull: false,
        },
        cardId:{
            type:Sequelize.INTEGER,
        },
        status:{
            type:Sequelize.INTEGER,
            comment:'1-deliverd, 2-return, 3-pickup,4-other'
        },
        comment:{
            type:Sequelize.STRING,
        },
        createdAt:{
            type:Sequelize.DATE,
        },
        updatedAt:{
            type:Sequelize.DATE,
        },
    });
    UserCards.sync({alter:true});
    return UserCards
}
