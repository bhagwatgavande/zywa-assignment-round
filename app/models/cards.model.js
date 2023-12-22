
module.exports = (sequelize,Sequelize) =>{
    const Cards = sequelize.define('cards',{
        id:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNUll:false
        },
        status:{
            type:Sequelize.INTEGER,
            comment:'1-ative, 2-inactive'
        },
        createdAt:{
            type:Sequelize.DATE,
        },
        updatedAt:{
            type:Sequelize.DATE,
        },
    });
    Cards.sync({alter:true});
    return Cards
}
