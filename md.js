var Box = document.createElement("div");
Box.style.width = "1200px";
Box.style.height = "600px";
Box.style.position = "absolute";
Box.style.background = "Red";
Box.style.outline = "1px solid black";
document.body.appendChild(Box);

var MoveLR = 0;
var MoveUD = 0;
function Move(press)
{
    if(press.keyCode==37 || press.keyCode==65) 
    {
        if(MoveLR>0)
        {
        MoveLR -=5;
        BoxCollision.style.left = MoveLR + 'px';
        }
    }

    if(press.keyCode==39 || press.keyCode==68) 
    {
        if(MoveLR<1250)
        {
            MoveLR +=5;
            BoxCollision.style.left = MoveLR + 'px';
        }
    }

    if(press.keyCode==40 || press.keyCode==83)  // Move Down 
    {
        if(MoveUD>-510)
        {
            MoveUD -=5;
            BoxCollision.style.bottom =    MoveUD + 'px';
        }
    }

    if(press.keyCode==38 || press.keyCode==87) 
    {
        if(MoveUD<0)
        {
            MoveUD +=5;
            BoxCollision.style.bottom = MoveUD + 'px';
        }
    }
}
document.onkeydown = Move