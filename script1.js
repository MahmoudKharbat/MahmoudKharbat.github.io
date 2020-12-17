
//localStorage.removeItem('Array');


function createNewPlayer()
{
    debugger;
    if(JSON.parse(localStorage.getItem("Array")) == null) // If the localStorge was empty then save the first player and go to the next page
    {
        let newElement = {name:document.getElementById("name").value,pass:document.getElementById("password").value};
        localStorage.setItem("Array",JSON.stringify([newElement]));  // Transform from an array format to a localStorge format
        window.open("../Page2/index2.html", "_self");  // Open the next page
    }

    playersList = JSON.parse(localStorage.getItem("Array")); // Transform from a localStorge format to an array
    for(let i = 0; i<playersList.length;i++)       // Removing the non player elements
        if(playersList[i].name == "")
            playersList.splice(i);

    let index;
    let newElement = {};
    var playerName = document.getElementById("name").value;
    var playerPassword = document.getElementById("password").value;
    
    for(index = 0 ;index <= playersList.length;index++) // Run at the array that holds the players 
    {
        if(playerName == "")
        {
            alert('Sorry! the UserName is invalid type a valid UserName to start the game...');
            break;
        }
        if(playerName.length > 20)
        {
            alert('Sorry! the UserName is longer than 20 characters please try again!');
            break;
        }
        if(playersList[index].name != playerName && index == playersList.length-1) // assuring that the player is not exist in the array 
        {
            newElement.name = playerName;
            newElement.pass = playerPassword;
            playersList.push(newElement);
            localStorage.setItem("Array",JSON.stringify(playersList)); // Adding the player to the localStorge
            window.open("../Page2/index2.html", "_self");              // Open the next page
            break;
        }
        else if(playersList[index].name == playerName)
        {
            if(playersList[index].pass == playerPassword)
            {
                window.open("../Page2/index2.html", "_self");  // Open the next page
                break; 
            }
            else
            {
                alert('Sorry! the password is wrong please try agin');
                break;
            }
        }
    }
}


function chooseDifficulty(d)
{
    let difficulty = d.value;

    if(difficulty == "easy")
    {
        window.open("../Page3/index3.html", "_self"); 
    }
    else if(difficulty == "medium")
    {
        window.open("../Page3/index3.html", "_self");
    }
    else if(difficulty == "hard")
    {
        window.open("../Page3/index3.html", "_self");
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
        isMusicOn = 0;
        document.getElementById("music-on").style.visibility = "hidden";
        document.getElementById("music-off").style.visibility = "visible";
    }
}

var opend = 0;
function headLineManipulation()
{
    if(opend == 0)
    {
    document.getElementById("headline").style.transform = "rotate(90deg)";
    document.getElementById("headline").style.transition.property = "all";
    document.getElementById("headline").style.transition.duration = "3s";
    document.getElementById("headline").style.transitionTimingFunction = "linear";
    opend = 1;
    }
    else
    {
        document.getElementById("headline").style.transform = "rotate(180deg)";
        document.getElementById("headline").style.transition.property = "all";
        document.getElementById("headline").style.transition.duration = "1.5s";
        document.getElementById("headline").style.animation.timing = "ease";
        opend = 0;
    }
}




/*function forgetPassword()
{
    debugger;
    let id = prompt("write your ID to recover you'r password !");

    if(id == 315155770)
    {
        alert('your password is' + playerDetails.pass);
    }
    else{
        alert('Sorry! your ID is wrong');
    }
}*/
