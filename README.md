# HackedCar

Inital Commit

app.get('/commands',function(req, res){
   var cmd = req.body;
    switch (cmd)
    {
        case "W":
            //function
            route_io_pins.forward();
            break;
        case "A":
        	route_io_pins.turnLeft();
        	break;
        case "S":
        	route_io_pins.backwards();
        	break;
        case "D":
        	route_io_pins.turnRight();
        	break;

    }
});
