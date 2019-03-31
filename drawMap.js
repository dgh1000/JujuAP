
gridW = 300.0;
gridH = 100.0;

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.closePath();
    ctx.strokeStyle = "black";
    ctx.lineWidth=4;
    ctx.stroke();
}

function drawRoomMap(r, offX, offY) {
    rx = (r.x - offX) * gridW + cw/2;
    ry = (r.y - offY) * gridH + ch/2;
    ctx.beginPath();
    ctx.moveTo(rx-gridW/3, ry-gridH/3);
    ctx.lineTo(rx+gridW/3, ry-gridH/3);
    ctx.lineTo(rx+gridW/3, ry+gridH/3);
    ctx.lineTo(rx-gridW/3, ry+gridH/3);
    ctx.closePath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    ctx.stroke();
    if (r.name == currentRoom.name) {
        ctx.fillStyle = "yellow";
        ctx.fill();
    }
    ctx.textAlign = "center";
    ctx.fillStyle = "black";
    ctx.font = "16pt 'Courier New'";
    ctx.fillText(r.name, rx, ry);
    if (r.eastDoor) {
        drawLine(rx + gridW/3, ry, rx+2*gridW/3, ry);
    }

    if (r.westDoor) {
        drawLine(rx - gridW/3, ry, rx-2*gridW/3, ry);
    }
    if (r.northDoor) {
        drawLine(rx, ry - gridH/3, rx, ry-2*gridH/3);
    }
    if (r.southDoor) {
        drawLine(rx, ry + gridH/3, rx, ry+2*gridH/3);
    }
    
}

function drawMap() {

    for (r of mapRooms) {
        drawRoomMap(r, currentRoom.x, currentRoom.y);
    }
    /*
    ctx.fillText("north", northX, northY);
    ctx.fillText("south", southX, southY);
    ctx.fillText("east", eastX, eastY);
    ctx.fillText("west", westX, westY);
    drawRoomName(eastX - 15, eastY + 25, currentRoom.eastDoor);
    drawRoomName(northX - 30, northY + 25, currentRoom.northDoor);
    drawRoomName(westX - 30, westY + 25, currentRoom.westDoor);
    drawRoomName(southX - 30, southY + 25, currentRoom.southDoor);
    */
}
