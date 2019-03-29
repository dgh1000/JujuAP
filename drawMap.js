
gridSize = 120.0;

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.closePath();
    ctx.strokeStyle = "black";
    ctx.lineWidth=4;
    ctx.stroke();
}

function drawRoomMap(r) {
    rx = r.x * gridSize;
    ry = r.y * gridSize;
    ctx.beginPath();
    ctx.moveTo(rx-gridSize/3, ry-gridSize/3);
    ctx.lineTo(rx+gridSize/3, ry-gridSize/3);
    ctx.lineTo(rx+gridSize/3, ry+gridSize/3);
    ctx.lineTo(rx-gridSize/3, ry+gridSize/3);
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
    ctx.font = "8pt 'Courier New'";
    ctx.fillText(r.name, rx, ry);
    if (r.eastDoor) {
        drawLine(rx + gridSize/3, ry, rx+2*gridSize/3, ry);
    }

    if (r.westDoor) {
        drawLine(rx - gridSize/3, ry, rx-2*gridSize/3, ry);
    }
    if (r.northDoor) {
        drawLine(rx, ry - gridSize/3, rx, ry-2*gridSize/3);
    }
    if (r.southDoor) {
        drawLine(rx, ry + gridSize/3, rx, ry+2*gridSize/3);
    }
    
}

function drawMap() {

    for (r of mapRooms) {
        drawRoomMap(r);
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
