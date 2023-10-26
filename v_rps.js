let computerMove="";
let win=0;
let lose=0;
let tie=0;
function pickComputerMove(){
    let randomNum = Math.random();
    if(randomNum>=0 && randomNum<1/3){
        computerMove="rock";
    }
    else if(randomNum>=1/3 && randomNum<2/3){
        computerMove="paper";
    }
    else if(randomNum>=2/3 && randomNum<1){
        computerMove="scissor";
    }
    return computerMove;
}




function playGame(playerMove){
    if(playerMove==="rock"){
        pickComputerMove();
        if(computerMove==="rock"){
            tie+=1;
        }
        else if(computerMove==="paper"){
            lose+=1;
        }
        else if(computerMove==="scissor"){
            win+=1;
        }
    }
    else if(playerMove==="paper"){
        pickComputerMove();
        if(computerMove==="rock"){
            win+=1;

        }
        else if(computerMove==="paper"){
            tie+=1;

        }
        else if(computerMove==="scissor"){
            lose+=1;

        }
    }
    else if(playerMove==="scissor"){
        pickComputerMove();
        if(computerMove==="scissor"){
            tie+=1;

        }
        else if(computerMove==="rock"){
            lose+=1;

        }
        else if(computerMove==="paper"){
            win+=1;

        }
    }

   




    const scores = document.querySelector(".displayScores");
    scores.innerHTML=`wins : ${win} , losses : ${lose} , ties : ${tie}`;


    const moves = document.querySelector(".displayMoves");
    moves.innerHTML=`Your move : ${playerMove} , Computer move : ${computerMove} `;


    
}











function resetScores(){
    win=0;
    lose=0;
    tie=0;
    const scores = document.querySelector(".displayScores");
    scores.innerHTML=`wins : ${win} , losses : ${lose} , ties : ${tie}`;


    const moves = document.querySelector(".displayMoves");
    moves.innerHTML="Start your Game";
    
}



    










