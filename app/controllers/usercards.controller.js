const db = require('../models')
const UserCards = db.usercards




/*
//////////////////////////////
method savecardsdetails 
@params
@username strin 
@password string
@mobile string
@mobilecountry string

author : Bhagwat Gavane
Date   : 22-12-2023
///////////////////////////////
*/
const saveCardDetails = async(req, res) =>{
    try {
           const {
               userId,
               cardId,
               status,
               comment
           } = req.body;
           // Check if the user already exists
           await UserCards.findOne({ where: { cardId: cardId } })
               .then(async result => {
                   if (result) {
                       return res.status(400).json({
                           message: userexist
                       });
     
                   } else {
                       let savedata = {
                           'userId': userId,
                           'cardId': cardId,
                           'comment': comment,
                           'status':status
                       }
                       // Create a new user
                       const newUserCard = new UserCards(savedata);
                       await newUserCard.save().then(data => {
                           if (data) {
                               return res.status(200).json({
                                   message: userregistred
                               });
                           } else {
                               return res.status(400).json({
                                   message: somethingwent
                               });
                           }
                       });
                   }
     
               }).catch(error => {
                   res.status(500).json({
                       message: error
                   });
               })
       } catch (error) {
           res.status(500).json({
               message: 'Server error'
           });
       }
 }
 
 const getCardDetails = async(req, res) =>{
       const {cardId} = req.body
       await UserCards.findAll({where:{cardId:cardId},
        attributes: ['status', 'comment']
      })
       .then((result)=>{
           if(result)
           {
            res.status(200).json({
                data: result,
                message:card
            });
           }else{
            res.status(200).json({
                data: result,
                message:notcard
            });
           }
       }).catch(error => {
        res.status(500).json({
            message: error
        });
    })
 }
module.exports = {
    saveCardDetails,
    getCardDetails
}