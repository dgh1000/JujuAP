northX = 330;
northY = 30;
eastX = 680;
eastY = 280;
southX = 330;
southY = 500;
westX = 30;
westY = 280; 

function drawMap() {
    ctx.font = "20px 'Courier New'";
    ctx.clearRect(0, 0, cw, ch);
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, cw, ch);
    ctx.fillStyle = "black";
    ctx.fillText("north", northX, northY);
    ctx.fillText("south", southX, southY);
    ctx.fillText("east", eastX, eastY);
    ctx.fillText("west", westX, westY);
    drawRoomName(eastX - 15, eastY + 25, currentRoom.eastDoor);
    drawRoomName(northX - 30, northY + 25, currentRoom.northDoor);
    drawRoomName(westX - 30, westY + 25, currentRoom.westDoor);
    drawRoomName(southX - 30, southY + 25, currentRoom.southDoor);
}

function drawRoomName(x, y, room) {
    if(room) {
        ctx.fillText(room.name, x, y);
    } else {
        ctx.fillText("Just a wall", x, y);
    }
}

function drawFoyer() {
    drawRoom();
    ctx.fillStyle = "saddlebrown";
    ctx.strokeStyle = "saddlebrown";
    drawTable(200, 250, 30, 60, 300);
    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    drawEnvelope(250);
    ctx.fillStyle = "midnightBlue";
    drawLamp();
}

function drawLivingRoom() {
    drawRoom();
    ctx.fillStyle = "mistyRose";
    ctx.strokeStyle = "black";
    drawCouch(200, 280, 40, 45, 300);
    drawPerson();
    ctx.fillStyle = "dimGray";
    drawLamp();
}

function drawHauntedHallway() {
    drawRoom();
    drawFrame(200, 200, 60, 80);
    drawFrame(300, 200, 60, 80);
    drawFrame(400, 200, 60, 80);
    drawFrame(500, 200, 60, 80);
}

function drawKitchen() {
    drawRoom();
    ctx.fillStyle = "green";
    drawTable(200, 250, 30, 60, 300);
    ctx.fillStyle = "gold";
    drawLamp();
}

function drawUpperHallway() {
    drawRoom();
    drawFrame(370, 230, 100, 130);
    drawGG();
    ctx.fillStyle = "green";
    drawLamp();
}

function drawMainBedroom() {
    drawRoom();
    drawBed();
}

function drawBathroom() {
    drawRoom();
}

function drawRoom() {
    ctx.beginPath();
    ctx.moveTo(cw/5, ch/5);
    ctx.lineTo(cw/5, ch*4/5);
    ctx.lineTo(cw*3.85/5, ch*4/5);
    ctx.lineTo(cw*3.85/5, ch/5);
    ctx.closePath();
    ctx.strokeStyle = "green";
    ctx.stroke();
}

function drawTable(x, y, z, a, b) {
    drawSlantRect(x, y, z, a, b);
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y + 2*a);
    // ctx.closePath();
    //ctx.stroke();
    // ctx.beginPath();
    ctx.moveTo(x + z, y + a);
    ctx.lineTo(x + z, y + 3*a);
    // ctx.closePath();
    // ctx.stroke();
    // ctx.beginPath();
    ctx.moveTo(x + b, y + a);
    ctx.lineTo(x + b, y + 3*a);
    // ctx.closePath();
    //ctx.stroke();
    // ctx.beginPath();
    ctx.moveTo(x + b - z, y + a);
    ctx.lineTo(x + b - z, y + 2*a);
    ctx.stroke();
    // ctx.fillStyle = "brown";
    ctx.fill();
    ctx.closePath();
}

function drawSlantRect(x, y, z, a, b) {
    ctx.beginPath();
    ctx.moveTo(x , y);
    ctx.lineTo(x + z, y + a);
    ctx.lineTo(x + b, y + a);
    ctx.lineTo(x + b - z, y);
    ctx.closePath();
    // ctx.fillStyle = "brown";
    ctx.fill();
    // ctx.strokeStyle = "brown";
    ctx.stroke();
}

function drawEnvelope(x) { 
    drawSlantRect(x, x + 10, 15, 30, 100);
    ctx.beginPath();
    ctx.moveTo(x, x + 10);
    ctx.lineTo(x + 50, x + 25);
    ctx.lineTo(x + 90, x + 10);
    ctx.closePath();
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.strokeStyle = "black";
    ctx.stroke();
}

function drawCouch(x, y, z, a, b) {
    drawTable(x, y, z, a, b);
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y - 1.5 * a);
    ctx.lineTo(x + b - z, y - 1.5 * a);
    ctx.lineTo(x + b - z, y);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}

function drawPerson() {
    ctx.beginPath();
    ctx.arc(450, 300, 25, 0, 2 * Math.PI);
    ctx.fillStyle = "darkGrey";
    ctx.fill();
    ctx.lineWidth = 5;
    ctx.moveTo(425, 300);
    ctx.lineTo(300, 300);
    ctx.lineTo(270, 280);
    ctx.moveTo(300, 300);
    ctx.lineTo(270, 330);
    ctx.moveTo(380, 300);
    ctx.lineTo(410, 280);
    ctx.moveTo(380, 300);
    ctx.lineTo(410, 320);
    // eyes
    ctx.moveTo(470, 305);
    ctx.lineTo(460, 315);
    ctx.moveTo(470, 315);
    ctx.lineTo(460, 305);
    ctx.moveTo(470, 285);
    ctx.lineTo(460, 295);
    ctx.moveTo(460, 285);
    ctx.lineTo(470, 295);
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.lineWidth = 1; 
}

function drawFrame(x, y, a, b) {
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.fillStyle = "maroon";
    ctx.rect(x, y, a, b);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.strokeStyle = "white";
    ctx.fillStyle = "gainsboro";
    ctx.rect(x+(a/8), y+(b/8), a*2.2/3, b*2.2/3);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

function drawGG() {
    ctx.beginPath();
    
    ctx.arc(420, 280, 15, 0, 2 * Math.PI);
    ctx.moveTo(420, 295);
    ctx.lineTo(420, 340);
    ctx.moveTo(420, 325);
    ctx.lineTo(400, 310);
    ctx.moveTo(420, 325);
    ctx.lineTo(440, 310);
    
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.closePath();
}

function drawLamp() {
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(550, 120);
    ctx.lineTo(520, 200);
    ctx.lineTo(630, 200);
    ctx.lineTo(600, 120);
    ctx.closePath();
    ctx.rect(573, 200, 5, 220);
    ctx.rect(550, 420, 50, 5);
    ctx.fill();
    ctx.stroke();
}

function drawBed() {
    ctx.fillStyle = "aliceBlue";
    ctx.strokeStyle = "black";
    drawCouch(270, 180, 60, 40, 200);
    ctx.fillStyle = "midnightBlue";
    ctx.strokeStyle = "midnightBlue";
    drawSlantRect(330, 220, 60, 40, 200);
    drawSlantRect(390, 260, 60, 40, 200);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.fillStyle = "white";
    ctx.rect(300, 130, 85, 50);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
    ctx.fillStyle = "midnightBlue";
    drawSlantRect(450, 300, 0, 80, 140);
    ctx.beginPath();
    ctx.fillStyle = "midnightBlue";
    ctx.moveTo(330, 300);
    ctx.lineTo(450, 380);
    ctx.lineTo(450, 300);
    ctx.lineTo(330, 220);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.fillStyle = "aliceBlue";
    ctx.moveTo(270, 180);
    ctx.lineTo(270, 260);
    ctx.lineTo(330, 300);
    ctx.lineTo(330, 220);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
}