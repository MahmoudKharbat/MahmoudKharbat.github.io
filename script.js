//localStorage.clear();

function createNewPlayer()
{
debugger;
    if(JSON.parse(localStorage.getItem("Array")) == null) // If the localStorge was empty then save the first player and go to the next page
    {
        let newElement = {name:document.getElementById("nameIn").value,pass:document.getElementById("passwordIn").value};
        localStorage.setItem("Array",JSON.stringify([newElement]));  // Transform from an array format to a localStorge format
        window.open("index2.html", "_self");  // Open the next page
    }

    playersList = JSON.parse(localStorage.getItem("Array")); // Transform from a localStorge format to an array
    for(let i = 0; i<playersList.length;i++)       // Removing the non player elements
        if(playersList[i].name == "")
            playersList.splice(i);

    let index;
    let newElement = {};
    var playerName = document.getElementById("nameIn").value;
    var playerPassword = document.getElementById("passwordIn").value;
    
    for(index = 0 ;index <= playersList.length;index++) // Run at the array that holds the players 
    {
        if(playerName == "")
        {
            document.getElementById("nameInfo").innerHTML = "Sorry! the UserName is invalid, try again!";
            document.getElementById("nameInfo").style.color = "red";
            document.getElementById("nameIn").style.backgroundColor = "red";
            break;
        }
        if(playerName.length > 20)
        {
            document.getElementById("nameInfo").innerHTML = "Sorry! the UserName is too long, try again";
            document.getElementById("nameInfo").style.color = "red";
            document.getElementById("nameIn").style.backgroundColor = "red";
            break;
        }
        if(playersList[index].name != playerName && index == playersList.length-1) // assuring that the player is not exist in the array 
        {
            newElement.name = playerName;
            newElement.pass = playerPassword;
            playersList.push(newElement);
            localStorage.setItem("Array",JSON.stringify(playersList)); // Adding the player to the localStorge
            window.open("index2.html", "_self");                      // Open the next page
            break;
        }
        else if(playersList[index].name == playerName)
        {
            document.getElementById("nameInfo").innerHTML = "Valid UserName ";
            document.getElementById("nameInfo").style.color = "green";
            document.getElementById("nameIn").style.backgroundColor = "green";

            if(playersList[index].pass == playerPassword)
            {
                document.getElementById("passInfo").style.color = "green";
                document.getElementById("passwordIn").style.backgroundColor = "green";
                window.open("index2.html", "_self");  // Open the next page
                break; 
            }
            else
            {
                document.getElementById("passInfo").innerHTML = "Sorry! the password is wrong, try again!";
                document.getElementById("passInfo").style.color = "red";
                document.getElementById("passwordIn").style.backgroundColor = "red";
                break;
            }
        }
    }
}

/*
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

*/
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

