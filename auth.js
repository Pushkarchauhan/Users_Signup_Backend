const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const adminShema = require('./models/adminShema');


passport.use(new LocalStrategy(async(USERNAME,password,done) => {
    try {
        console.log('Received credentails:', USERNAME,password);
        const user = await adminShema.findOne({username: USERNAME});
        if(!user)
            return done(null,false,{message:'Incorrect username'});

        const isPasswordMatch = user.password === password ? true : false;

        if(isPasswordMatch){    
            return done(null,user);

        }else{
            return done(null,false, {message:'Incorrect Password.'});
        }

    } catch (error) {
        return done(error);
    }
}));

module.exports = passport;