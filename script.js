
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
        return;
    } else {
        refreshStillAlive();
    }
}

function refreshDead() {
    hideMainStuff();
    yl = document.getElementById("you-lose");
    yl.style = "display: block";
    // var r = document.getElementById("result-die");
    // r.style = "display: block";
    // var result = document.getElementById("result-div");
    // result.style = "display: none";
}

function refreshStillAlive() {
    showMainStuff();
    var s2 = "";
    s2 += "<span id='header-message'> You are in the " + 
        currentRoom.name + "</span>";
    s2 += "<span id='lives-left'>" + "Lives Left: " + 
        remainingLives + "</span>";
    s2 += "<p>" + currentRoom.description + "</p>";
    var rd = document.getElementById("header");
    rd.innerHTML = s2;
    refreshChoices();
    // var result = document.getElementById("result-div");
    // result.style = "display: none";
    // unGrayOut();

    sb1 = document.getElementById("see-move");
    sb2 = document.getElementById("see-room");
    if (currentView == "map") {
        sb1.style = "display:none";
        sb2.style = "display:block";
    } else {
        sb1.style = "display:block";
        sb2.style = "display:none";
    }

    ctx.font = "20px 'Source Sans Pro'";
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, cw, ch);
    if (currentView == "room") {
        var g = ctx.createRadialGradient(cw/2, ch/2, 200.0, cw/2, ch/2, 1200); 
        g.addColorStop(0, "white");
        g.addColorStop(1, "darkslategray");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, cw, ch);
        currentRoom.draw();
    } else {
        drawMap();
    }
}


function handleWin() {
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
    var d = document.getElementById("choice-list");
    d.innerHTML = "";
    currentRoom.choices.forEach(function(theChoice) {
        /*
        var p = document.createElement("p");
        p.setAttribute("class", "choice");
        p.innerHTML = theChoice.long;
        d.appendChild(p);
        */
        var i = document.createElement("input");
        i.setAttribute("type", "button");
        i.setAttribute("value", theChoice.short);
        i.setAttribute("onclick", theChoice.result + "()");
        i.setAttribute("class", "choice-button");
        d.appendChild(i);
        /* 
        var p2 = document.createElement("p");
        p2.innerHTML = "If you do not want to " + currentRoom.answer + ", you must click " +
        "on one of the rectangular buttons on the bottom of the screen. ";
        d.appendChild(p2);
        */
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
