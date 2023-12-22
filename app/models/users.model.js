
module.exports = (sequelize,Sequelize) =>{
    const User = sequelize.define('users',{
        id:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNUll:false
        },
        username:{
            type:Sequelize.STRING,
           // unique: true,
        },
        password:{
            type:Sequelize.STRING
        },
        mobile:{
            type:Sequelize.STRING,
            unique: true,
        },
        mobilecountry:{
            type:Sequelize.STRING,
            //unique: true,
        },
        createdAt:{
            type:Sequelize.DATE,
        },
        updatedAt:{
            type:Sequelize.DATE,
        },
    });
    User.sync({alter:true});
    return User
}