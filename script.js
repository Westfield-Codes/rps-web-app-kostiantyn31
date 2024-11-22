function getName(){
    let myName = document.getElementById("myName").value;
    alert("Hi, "+ myName);
}


function setRounds(rounds) {
    alert("Let's play "+ rounds + " rounds.");
    localStorage.setItem("rounds", rounds);
    window.location.replace("second.html");
}

function cpuTurn(u) {
    let moves = ["r", "p", "s"];
    let choice = Math.floor(Math.random()*3);
    let c = moves[choice];
    findWinner(u,c);
 }

 function findWinner(u, c) {
    let winArray = [
       ["r", "p", "player"],["r", "s", "cpu"],
       ["p", "s", "player"],["p", "r", "cpu"],
       ["s", "r", "player"],["s", "p", "cpu"]
    ];
    turns = u + c;
    for (let i = 0; i < winArray.length; i++) {
       match = winArray[i][0] + winArray[i][1];
       if (match == turns) {
          winner = winArray[i][2];
          alert("You pick " + u + " CPU pick " + c + ". " + winner + " win");
          return winner;
       }
    }
 }
