'use strict';
var passport = require('passport');

var passportConfig = function(server){

    server.use(passport.initialize());
    server.use(passport.session());

    passport.serializeUser(function (user, done){
        done(null, user); //req.user tiene todos los datos del usuario
    });

    passport.deserializeUser(function (user, done){
        done(null, user);
    });

    require('./local')(server);

};

module.exports = passportConfig;