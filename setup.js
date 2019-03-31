canv = document.getElementById("canvas");
ctx = canv.getContext("2d");
cw = canv.width;
ch = canv.height;

function hideMainStuff() {
    var h = document.getElementById("outer");
    h.style = "display: none";
    var r = document.getElementById("result-div");
    r.style = "display: block";
}

function showMainStuff() {
    var h = document.getElementById("outer");
    h.style = "display: block";
    var r = document.getElementById("result-div");
    r.style = "display: none";
}

function lostLifeMessage() {
    if (remainingLives > 0) {
        return "You lose a life. Only " + remainingLives + " lives left!";
    } else {
        hideMainStuff();
        yl = document.getElementById("you-lose");
        yl.style = "display: block";
        cb = document.getElementById("continue-button");
        cb.style = "display: none";
        return "You lose a life. No lives left!";
    }
}


function notLostLifeMessage() {
    return "You still have " + remainingLives + " lives left.";
}

function resultOfOpenTheLetter() {
    var r = document.getElementById("result-div");
    r.style = "display: block;";
    var p = document.getElementById("result");
    p.innerHTML = "Now that you have opened the letter, you read it and " +
        "it says, 'You will be surprised at what helps you win'. " + 
        notLostLifeMessage();
    hideMainStuff();
}

function resultOfPokeHim() {
    var p = document.getElementById("result");
    remainingLives -= 1; 
    p.innerHTML = "The corpse has gangrene that quickly spreads to you. " + 
        lostLifeMessage();
    hideMainStuff();
}

function resultOfWipeDust() {
    var p = document.getElementById("result");
    remainingLives -= 1; 
    p.innerHTML = "You inhale the dust and choke. " + lostLifeMessage();
    hideMainStuff();
}

function resultOfEatIt() {
    var p = document.getElementById("result");
    p.innerHTML = "The cake is filled with vegetables, which gives you " +
    "the strength to break out of the house. YOU ESCAPE!";
    haveWon = true;
    hideMainStuff();
}

function resultOfTouchIt() {
    remainingLives -= 1;
    var p = document.getElementById("result");
    p.innerHTML = "Leeches were hidden inside the picture and they " +
    "start sucking your blood. " + lostLifeMessage();
    hideMainStuff();
}

function resultOfSleepNow() {
    remainingLives -= 1;
    var p = document.getElementById("result");
    p.innerHTML = "You wake up and a clown is sleeping next to you, " +
        "a knife in its hand. " + lostLifeMessage();
    hideMainStuff();
}

function resultOfTalk() {
    var p = document.getElementById("result");
    p.innerHTML = "She flushes you down the toilet and YOU ESCAPE!";
    yw = document.getElementById("you-win");
    yw.style = "display:block";    
    cb = document.getElementById("continue-button");
    cb.style = "display: none";
    hideMainStuff();
}

openTheLetter = 
    {long: "Do you open the letter?", short: "open the letter", 
    result: "resultOfOpenTheLetter"};

pokeHim =
    {long: "Do you poke him?", short: "poke him", 
    result: "resultOfPokeHim"};

wipeDust =
    {long: "Do you wipe off the dust? ", short: "wipe dust",
    result: "resultOfWipeDust"};

eatIt = 
    {long: "Do you eat it?", short: "eat it", 
    result: "resultOfEatIt"};

touchIt =
    {long: "Do you touch it?", short: "touch it",
    result: "resultOfTouchIt"};

sleepNow =
    {long: "Do you sleep in it?", short: "sleep now",
    result: "resultOfSleepNow"};

talk =
    {long: "Do you talk to her?", short: "talk", 
    result: "resultOfTalk"};

outside = 
    {name: "outside", color: "", description: "", choices: [], northDoor:null};

foyer = 
    {name: "foyer", color: "FireBrick", 
    description: "The foyer has a small table with a letter on it " +
    "from your dead great grandma.", choices: [openTheLetter],
    draw: drawFoyer, answer: "open the letter",
    eastDoor : null, westDoor : null, northDoor : null, southDoor : null,
    x: 2, y: 4};

livingRoom = 
    {name: "living room", color: "MidnightBlue", 
    description: "A body is lying on the couch. He seems to be breathing, " +
    "but his whole body is sallow gray. ", choices: [pokeHim],
    draw: drawLivingRoom, answer: "poke him", 
    eastDoor : null, westDoor : null, northDoor : null, southDoor : null,
    x: 3, y: 4};
hauntedHallway = 
    {name: "haunted hallway", color: "Black", 
    description: "There are a bunch of picture frames. Your great-grandma's portrait " +
    "is very dusty. ", choices: [wipeDust],
    draw: drawHauntedHallway, answer: "wipe the dust", 
    eastDoor : null, westDoor : null, northDoor : null, southDoor : null,
    x: 4, y: 4};
kitchen = 
    {name: "kitchen", color: "LemonChiffon", 
    description: "You see an old cake on the counter and are starving. " +
    "The cake looks questionable. ", choices: [eatIt],
    draw: drawKitchen, answer: "eat the cake", 
    eastDoor : null, westDoor : null, northDoor : null, southDoor : null,
    x:4, y: 3};
upperHallway =  
    {name: "upper hallway", color: "Crimson", 
    description: "A photograph of your great-grandma is hanging on the wall. ",
    choices: [touchIt], draw: drawUpperHallway, answer: "touch it", 
    eastDoor : null, westDoor : null, northDoor : null, southDoor : null,
    x:2, y:3};
mainBedroom = 
    {name: "main bedroom", color: "DarkGreen", 
    description: "There is a bed. ", choices: [sleepNow],
    draw: drawMainBedroom, answer: "sleep now", 
    eastDoor : null, westDoor : null, northDoor : null, southDoor : null,
    x:2, y:2};
bathroom = 
    {name: "bathroom", color: "Azure", 
    description: "There's someone near the toilet. ",
    choices: [talk], draw: drawBathroom, answer: "talk to her", 
    eastDoor : null, westDoor : null, northDoor : null, southDoor : null,
    x:3, y:2};

foyer.southDoor = outside;
foyer.eastDoor = livingRoom;
foyer.northDoor = upperHallway;
livingRoom.westDoor = foyer;
livingRoom.eastDoor = hauntedHallway;
hauntedHallway.westDoor = livingRoom;
hauntedHallway.northDoor = kitchen;
kitchen.southDoor = hauntedHallway;
upperHallway.southDoor = foyer;
upperHallway.northDoor = mainBedroom;
mainBedroom.southDoor = upperHallway;
mainBedroom.eastDoor = bathroom;
bathroom.westDoor = mainBedroom;

mapRooms = [foyer, livingRoom, hauntedHallway, upperHallway, kitchen, 
            mainBedroom, bathroom];

currentRoom = foyer;
remainingLives = 2;
currentView = "room";
haveWon = false;
