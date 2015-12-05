/**
 * Created by Alex on 12/3/2015.
 */

module.exports = function (socket_io, gpio)
{
    return {
        init: function ()
        {
            socket_io.on('connection', function (socket)
            {
                socket.emit("news","Connection made");

                socket.on('my other event',function(data){
                console.log(data)
                });
            });
        }
    };
}
;