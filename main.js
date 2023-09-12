

function diceRoll(){  
    document.getElementById("btn").innerText="Refresh"
    let rNumber= Math.floor(Math.random()*6)+1
    let rNumber2= Math.floor(Math.random()*6)+1
//first dice

    let image1=document.querySelectorAll("img")[0]
    let randomDiceImage="dice"+rNumber+".png"
    let randomDiceSource="images/"+randomDiceImage
    image1.setAttribute("src",randomDiceSource)

//second dice

    let image2=document.querySelectorAll("img")[1]
    let randomDiceImage2="dice"+rNumber2+".png"
    let randomDiceSource2="images/"+randomDiceImage2
    image2.setAttribute("src",randomDiceSource2)

    if(rNumber>rNumber2)
    {
        document.getElementById("verdict").innerText="Player1 wins!"
    }
    else if(rNumber<rNumber2)
    {
        document.getElementById("verdict").innerText="Player2 wins!"
    }
    else{
        document.getElementById("verdict").innerText="Draw"
    } 
    document.getElementById("btn").innerText="Play again"
    diceRoll()
    }

    