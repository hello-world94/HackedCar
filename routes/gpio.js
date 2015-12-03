/**
 * Created by Alex on 12/3/2015.
 */

/**
 This File Will Have To Be Debugged At The Event
 */

var io = require("pi-gpio");

//open required pins
//pins.open() --ect
module.exports = function ()
{
    return {
        //car control
        forward: function(){},
        backwards: function(){},
        turnLeft: function(){},
        turnRight: function(){},
        setSpeed: function(speed){}
        //camera control

    };
};