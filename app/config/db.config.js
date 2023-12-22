require('dotenv').config()

console.log(process.env.HOST)
if(process.env.NODE_ENV.trim() == 'dev')
{
  var env_dev ={
    HOST:process.env.HOST,
    USER:process.env.USER,
    PASSWORD:process.env.PASSWORD,
    DB:process.env.DB,
    dialect:"mysql",
    pool:{
      max:5,
      min:0,
      acquire:30000,
      idle:10000
    },
    logoing:false
  }
  
}
else if(process.env.NODE_ENV().trim() == 'prod')
{
  var env_prod ={
    HOST:process.env.HOST,
    USER:process.env.USER,
    PASSWORD:process.env.PASSWORD,
    DB:process.env.DB,
    dialect:"mysql",
    pool:{
      max:5,
      min:0,
      acquire:30000,
      idle:10000
    },
    logoing:false
  }
}

module.exports = env_dev