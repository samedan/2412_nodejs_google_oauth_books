const express = require('express')
const passport = require('passport');
const router = express.Router()


// @desc  Auth with Google
// @route GET /auth/google
router.get("/google", passport.authenticate('google', {
    scope: [ 'email', 'profile' ] 
}));

// @desc  Google auth Callback
// @route GET /auth/google/callback
router.get("/google/callback", passport.authenticate('google', {
    failureRedirect: '/' // if failed
}), (req, res) => {
    res.redirect('dashboard');  // iff Success
})


module.exports = router;