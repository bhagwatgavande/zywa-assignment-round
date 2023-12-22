const db = require('../models')
const Users = db.users
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require("jsonwebtoken")
require('dotenv').config();
const PRIVATEKEY = process.env.PRIVATEKEY;
const global  = require("../constant/globalvar")


/*
//////////////////////////////
 UsersignUp 
@params
@username strin 
@password string
@mobile string
@mobilecountry string

author : Bhagwat Gavane
Date   : 21-12-2023
///////////////////////////////
*/
const UsersignUp = async(req, res) =>{
    try {
          const {
              username,
              password,
              mobile,
              mobilecountry
          } = req.body;
          // Check if the user already exists
          await Users.findOne({ where: { username: username } })
              .then(async result => {
                  if (result) {
                      return res.status(400).json({
                          message: userexist
                      });
    
                  } else {
                      const hashedPassword = await bcrypt.hash(password, saltRounds);
                      let savedata = {
                          'username': username,
                          'password': hashedPassword,
                          'mobile': mobile,
                          'mobilecountry':mobilecountry
                      }
                      // Create a new user
                      const newUser = new Users(savedata);
                      await newUser.save().then(data => {
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

/*
//////////////////////////////
user login 
@params
@username strin 
@password string

author : Bhagwat Gavane
Date   : 21-12-2023
///////////////////////////////
*/
const login = async (req, res) => {

    if (!req.body.username) {
        return res.status(401).send({
            message: credentials
        });
    }
    if (!req.body.password) {
        return res.status(401).send({
            message: credentials
        });
    }
    const {
        username,
        password
    } = req.body;
    // Validate the user's credentials
    const user = await Users.findOne({where:{username:username}});
    if (user) {
        const check = await bcrypt.compare(password, user.password)
        if (check) {
            // Generate a JWT
            const token = jwt.sign({
              user: user
            }, process.env.JWT_SECRET, {expiresIn: '24h'} );
            // Return the JWT to the client
            res.status(200).json({
                token,
                message: userlogged
            });
        } else {
            res.status(401).send({
                message: credent
            });
        }
    } else {
        return res.status(200).json({
            message: usernot
        });
    }
  }

  module.exports ={
    UsersignUp,
    login
  }