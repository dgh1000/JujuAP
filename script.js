function grayOut() {
    var g = document.getElementById("left");
    g.style = "color: lightSteelBlue";
    var xs = document.getElementsByClassName("choice-button");
    console.log(xs);
    for (var i = 0; i < xs.length; ++i) {
        xs.item(i).style = "background-color: lightSlateGray";
    }
}

function unGrayOut() {
    var g = document.getElementById("left");
    g.style = "";
}

function refresh() {
    if(remainingLives <= 0) {
        refreshDead();
    } else {
        refreshStillAlive();
    }
}

function refreshDead() {
    // hideMainStuff();
    // var r = document.getElementById("result-die");
    // r.style = "display: block";
    // var result = document.getElementById("result-div");
    // result.style = "display: none";
}

function refreshStillAlive() {
    // var s = "";
    // s += currentRoom.description + "<br>";
    // s += "name: " + currentRoom.name + "<br>";
    // s += "You are facing " + currentDirection + "<br>";
    var s2 = "";
    s2 += "<h1>" + currentRoom.name + "</h1>";
    s2 += "<p id='lives-left'>" + "Lives Left: " + remainingLives + "</p>";
    s2 += "<p>" + currentRoom.description + "</p>";
    var rd = document.getElementById("room-display");
    rd.innerHTML = s2;
    // $("#button-1").get(0).value = room.doorA;
    refreshChoices();
    var result = document.getElementById("result-div");
    result.style = "display: none";
    unGrayOut();

    sb = document.getElementById("switch-button");
    if (currentView == "map") {
      sb.setAttribute("value", "switch to room");
    } else {
      sb.setAttribute("value", "switch to map");
    }

    ctx.font = "20px 'Courier New'";
    ctx.clearRect(0, 0, cw, ch);
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, cw, ch);
    ctx.fillStyle = "black";

    if (currentView == "room") {
        if (currentRoom["draw"]) {
            currentRoom.draw();
        }
    } else {
        drawMap();
    }
}


function switchView() {
    if (currentView == "map") {
        currentView = "room";
    } else {
        currentView = "map";
    }
    refresh();
}


function refreshChoices() {
    var d = document.getElementById("choice-display");
    d.innerHTML = "";
    currentRoom.choices.forEach(function(theChoice) {
        var p = document.createElement("p");
        p.setAttribute("class", "choice");
        p.innerHTML = theChoice.long;
        d.appendChild(p);
        var i = document.createElement("input");
        i.setAttribute("type", "button");
        i.setAttribute("value", theChoice.short);
        i.setAttribute("onclick", theChoice.result + "()");
        i.setAttribute("class", "choice-button");
        d.appendChild(i);
        var p2 = document.createElement("p");
        p2.innerHTML = "If you do not want to " + currentRoom.answer + ", you must click " +
        "on one of the rectangular buttons on the bottom of the screen. ";
        d.appendChild(p2);
    });
}

function move(direction) {
    nextRoom = currentRoom[direction + "Door"];
    if (nextRoom) {
        currentRoom = nextRoom;
        refresh();
    } else {
        alert("Can't Go That Way");
    }
}




refresh();
