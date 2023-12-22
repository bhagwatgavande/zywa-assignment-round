//const {authJwt} = require('../middlwares')
const usercontrollers = require('../controllers/user.controller')
const usercardscontrollers = require('../controllers/usercards.controller')
const authJwt = require("../middlwares/authJwt")


module.exports = function (app , io){
    app.use(function (req , res,next){
        res.header(
            'Access-Control-Allow-Headers',
            'x-access-token , Origin, Content-Type,Accept'
        )
       req.io = app;
        next();
    })
   app.post('/user', usercontrollers.UsersignUp)
   app.post('/login', usercontrollers.login)
   app.post('/savecardsdetails', usercardscontrollers.saveCardDetails)
   app.get('/get_card_status', usercardscontrollers.getCardDetails)

}