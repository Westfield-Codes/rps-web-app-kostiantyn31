var round = 1;
var rounds = 0;
localStorage.setItem("round", round);

function getRounds() {
   let rounds = document.getElementById("rounds").value;
   setRounds(rounds);
}

function setRounds(rounds) {
    alert("Let's play "+ rounds + " rounds.");
    localStorage.setItem("rounds", rounds);
    window.location.href = "second.html";
}

function showRound() {
   let statBox = document.getElementById("statsBox");
   let message = "Round " + round + " of " + rounds;
   statBox.innerHTML = message;
}

function cpuTurn(u) {
    let moves = ["r", "p", "s"];
    let choice = Math.floor(Math.random()*3);
    let c = moves[choice];
    findWinner(u, c, rounds);
}

function findWinner(u, c, rounds) {
   if (u == c) {
      alert("we bolt pick" + u);
      return;
   }
   else {
      round++;
      let winner = ""; 
      let winArray = [
      ["r", "p", "player"],["r", "s", "cpu"],
      ["p", "s", "player"],["p", "r", "cpu"],
      ["s", "r", "player"],["s", "p", "cpu"],
      ];

      for (let i = 0; i < winArray.length; i++) {
         if (winArray[i][0] == u && winArray[i][1] == c) {
            winner = winArray[i][2];
         }
      }
   }
   alert("You pick " + u + " CPU pick " + c + ". " + winner + " win");
   
   showRound();
   return winner;
}
