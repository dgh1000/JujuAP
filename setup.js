canv = document.getElementById("canvas");
ctx = canv.getContext("2d");
cw = canv.width;
ch = canv.height;

function hideMainStuff() {
    // var h = document.getElementById("hide");
    // h.style = "display: none";
}

function showMainStuff() {
    // var h = document.getElementById("hide");
    // h.style = "display: block";
}

function resultOfOpenTheLetter() {
    // alert("result of open the letter, you open the letter and worms crawl out.");
    var r = document.getElementById("result-div");
    r.style = "display: block;";
    var p = document.getElementById("result");
    p.innerHTML = "Now that you have opened the letter, you read it and it says, 'You will be surprised at what helps you win'. ";
    grayOut();
}

function resultOfPokeHim() {
    // alert("result of poke him, ")
    var r = document.getElementById("result-div");
    r.style = "display: block;";
    var p = document.getElementById("result");
    p.innerHTML = "The corpse has gangrene that quickly spreads to you. You lose a life.";
    remainingLives -= 1; 
    grayOut();
}

function resultOfWipeDust() {
    var r = document.getElementById("result-div");
    r.style = "display: inline;";
    var p = document.getElementById("result");
    p.innerHTML = "You inhale the dust and choke. You lose a life.";
    remainingLives -= 1; 
    hideMainStuff();
    grayOut();
}

function resultOfEatIt() {
    var r = document.getElementById("result-div");
    r.style = "display: inline;";
    var p = document.getElementById("result");
    p.innerHTML = "The cake is filled with vegetables, which gives you " +
    "the strength to break out of the house. YOU ESCAPE!";
    hideMainStuff();
    grayOut();
}

function resultOfTouchIt() {
    var r = document.getElementById("result-div");
    r.style = "display: inline;";
    var p = document.getElementById("result");
    p.innerHTML = "Leeches were hidden inside the picture and they " +
    "start sucking your blood. You lose a life.";
    remainingLives -= 1;
    hideMainStuff();
    grayOut();
}

function resultOfSleepNow() {
    var r = document.getElementById("result-div");
    r.style = "display: inline;";
    var p = document.getElementById("result");
    p.innerHTML = "You wake up and a clown is sleeping next to you, " +
    "a knife in its hand. You lose a life.";
    remainingLives -= 1;
    hideMainStuff();
    grayOut();
}

function resultOfTalk() {
    var r = document.getElementById("result-div");
    r.style = "display: inline;";
    var p = document.getElementById("result");
    p.innerHTML = "She flushes you down the toilet and YOU ESCAPE!";
    hideMainStuff();
    grayOut();
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
    {name: "outside", color: "", description: "", choices: [], northDoor:null}
foyer = 
    {name: "foyer", color: "FireBrick", 
    description: "You are in the foyer. It has a small table with a letter on it " +
    "from your dead great grandma. To your north is a door to the upper hallway, " +
    "to the east is a door to the living room, and to the south is a door that connects to " +
    "the outside. Beware of the outside. ", choices: [openTheLetter],
    draw: drawFoyer, answer: "open the letter",
    eastDoor : null, westDoor : null, northDoor : null, southDoor : null};
livingRoom = 
    {name: "living room", color: "MidnightBlue", 
    description: "A body is lying on the couch. He seems to be breathing, " +
    "but his whole body is sallow gray. ", choices: [pokeHim],
    draw: drawLivingRoom, answer: "poke him", 
    eastDoor : null, westDoor : null, northDoor : null, southDoor : null};
hauntedHallway = 
    {name: "haunted hallway", color: "Black", 
    description: "There are a bunch of picture frames. Your great-grandma's portrait " +
    "is very dusty. ", choices: [wipeDust],
    draw: drawHauntedHallway, answer: "wipe the dust", 
    eastDoor : null, westDoor : null, northDoor : null, southDoor : null};
kitchen = 
    {name: "kitchen", color: "LemonChiffon", 
    description: "You see an old cake on the counter and are starving. " +
    "The cake looks questionable. ", choices: [eatIt],
    draw: drawKitchen, answer: "eat the cake", 
    eastDoor : null, westDoor : null, northDoor : null, southDoor : null};
upperHallway =  
    {name: "upper hallway", color: "Crimson", 
    description: "A photograph of your great-grandma is hanging on the wall. ",
    choices: [touchIt], draw: drawUpperHallway, answer: "touch it", 
    eastDoor : null, westDoor : null, northDoor : null, southDoor : null};
mainBedroom = 
    {name: "main bedroom", color: "DarkGreen", 
    description: "There is a bed. ", choices: [sleepNow],
    draw: drawMainBedroom, answer: "sleep now", 
    eastDoor : null, westDoor : null, northDoor : null, southDoor : null};
bathroom = 
    {name: "bathroom", color: "Azure", 
    description: "There's someone near the toilet. ",
    choices: [talk], draw: drawBathroom, answer: "talk to her", 
    eastDoor : null, westDoor : null, northDoor : null, southDoor : null};

foyer.southDoor = outside;
foyer.eastDoor = livingRoom;
foyer.northDoor = upperHallway;
livingRoom.westDoor = foyer;
livingRoom.northDoor = hauntedHallway;
hauntedHallway.southDoor = livingRoom;
hauntedHallway.westDoor = kitchen;
kitchen.eastDoor = hauntedHallway;
upperHallway.southDoor = foyer;
upperHallway.northDoor = mainBedroom;
mainBedroom.southDoor = upperHallway;
mainBedroom.eastDoor = bathroom;
bathroom.westDoor = mainBedroom;

currentRoom = foyer;
// currentDirection = "north";
remainingLives = 5;

