/**
 * Created by Alex on 12/3/2015.
 */

module.exports = function (app)
{
    app.get('/resources/socket.io.js', function (req,res)
    {
        res.send("./node_modules/socket.io/socket.io-client/socket.io.js")
    });
};