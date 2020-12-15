
function createNewPlayer()
{
    let validPlayers = {name: "abcd",pass: "1234"};
    var playerName = document.getElementById("name").value;
    var playerPassword = document.getElementById("password").value;
    
    if(playerName == validPlayers.name)
    {
        document.getElementById("nameInfo").innerHTML = "The UserName is right";
        document.getElementById("nameInfo").style.color = "green";
        document.getElementById("name").style.backgroundColor = "green";
    }
    else
    {
        document.getElementById("nameInfo").innerHTML = "Sorry the name you have intered is wrong!";
        document.getElementById("nameInfo").style.color = "red";
        document.getElementById("name").style.backgroundColor = "red";
    }
    if(playerPassword == validPlayers.pass)
    {
        document.getElementById("passInfo").innerHTML = "The password is right";
        document.getElementById("passInfo").style.color = "green";
        document.getElementById("password").style.backgroundColor = "green";
    }
    else
    {
        document.getElementById("passInfo").innerHTML = "Sorry the password you have intered is wrong!";
        document.getElementById("passInfo").style.color = "red";
        document.getElementById("password").style.backgroundColor = "red";
    }
    if(playerName == validPlayers.name && playerPassword == validPlayers.pass )
    {
            window.open("index2.html", "_self");              // Open the next page
    }
}


function chooseDifficulty(d)
{
    let difficulty = d.value;

    if(difficulty == "easy")
    {
        window.open("index3.html", "_self"); 
    }
    else if(difficulty == "medium")
    {
        window.open("index3.html", "_self");
    }
    else if(difficulty == "hard")
    {
        window.open("index3.html", "_self");
    }
}


var isMusicOn = 0;

function musicFunc()
{
    if(isMusicOn == 0)
    {
        document.getElementById("music").play();
        document.getElementById("music-on").style.visibility = "visible";
        document.getElementById("music-off").style.visibility = "hidden";
        isMusicOn = 1;
    }
    else
    {
        document.getElementById("music").pause();
        document.getElementById("music-on").style.visibility = "hidden";
        document.getElementById("music-off").style.visibility = "visible";
        isMusicOn = 0;
    }
}

var opend = 0;

function menu()
{
    if(opend == 0)
    {
    document.getElementById("about").style.display = "inline";
    document.getElementById("background").style.display = "inline";
    document.getElementById("headline").style.transform = "rotate(90deg)";
    opend = 1;
    }
    else
    {
        document.getElementById("about").style.display = "none";
        document.getElementById("background").style.display = "none";
        document.getElementById("headline").style.transform = "rotate(180deg)";
        document.getElementById("img1").style.visibility = "hidden";
        document.getElementById("img2").style.visibility = "hidden";
        document.getElementById("img3").style.visibility = "hidden";
        document.getElementById("img4").style.visibility = "hidden";
        document.getElementById("img5").style.visibility = "hidden";
        opend = 0;
    }
}


var changed = 0;

function isWantToChange()
{
    if(changed == 0)
    {
        document.getElementById("img1").style.visibility = "visible";
        document.getElementById("img2").style.visibility = "visible";
        document.getElementById("img3").style.visibility = "visible";
        document.getElementById("img4").style.visibility = "visible";
        document.getElementById("img5").style.visibility = "visible";
        changed = 1;
    }
    else{
        document.getElementById("img1").style.visibility = "hidden";
        document.getElementById("img2").style.visibility = "hidden";
        document.getElementById("img3").style.visibility = "hidden";
        document.getElementById("img4").style.visibility = "hidden";
        document.getElementById("img5").style.visibility = "hidden";
        changed = 0;
    }
};


function changeBackGround(img)
{
    pictureChosed = img.value;

    if(pictureChosed == "valley")
    {
        document.body.style.backgroundImage = "url('../valley.jpg')";
        return;
    }
    if(pictureChosed == "fall")
    {
        document.body.style.backgroundImage = "url('../fall.jpg')";
        return;
    }
    if(pictureChosed == "mountains")
    {
        document.body.style.backgroundImage = "url('../mountains.jpg')";
        return;
    }
    if(pictureChosed == "waterfall")
    {
        document.body.style.backgroundImage = "url('../waterfall.jpg')";
        return;
    }
    if(pictureChosed == "sunset")
    {
        document.body.style.backgroundImage = "url('../sunset.jpg')";
        return;
    }
}

