const GoogleStrategy = require('passport-google-oauth20').Strategy;

const mongoose = require('mongoose');
const User = require('../models/User');

module.exports= 
    function(passport) {
        passport.use(new GoogleStrategy({
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: "/auth/google/callback"
            }, 
            async (accessToken, refreshToken, profile, done) => {
                // console.log(profile);      
                // SAVE In DBB  
                const newUser = {
                    googleId: profile.id,
                    displayName: profile.displayName,
                    firstName: profile.name.givenName,
                    lastName: profile.name.familyName,
                    image: profile.photos[0].value
                }
                try {
                    let user = await User.findOne({googleId: profile.id})
                    if(user) { // find user if it exists
                        done(null, user); // null for error
                    } else { // create user if not
                        user = await User.create(newUser);
                        done(null, user);
                    }
                } catch (err) {
                    console.log(err);                    
                }
                // END SAVE In DBB
            }
        ));
        passport.serializeUser(async (user, done) => {
            try {
                await done(null, user.id);
            } catch (error) {   
                console.log(error);                
            }
            
        });
        // passport.deserializeUser(async (id, done) => {
        //     try {
        //         let user = await User.findById(
        //             id, 
        //             // (err, user) => done(err, user)
        //             // await done(err, user)
        //         )    
        //     } catch (error) {
        //         console.log(error);
                
        //     }    
            
        // });
        passport.deserializeUser(async (id, done) => {
            done(null, await User.findById(id))    
        });
    

}