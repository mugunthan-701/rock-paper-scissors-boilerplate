document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll(".button1 .img1");
    var handImage = document.querySelector(".hand");
    var userScore = 0;
    var compScore = 0;
    var userScoreDisplay = document.querySelector(".user-score");
    var compScoreDisplay = document.querySelector(".comp-score");
  
    buttons.forEach(function(button) {
      button.addEventListener('click', function(event) {
        var userChoice = event.target.id;
        var compChoice = getComputerChoice();
        var winner = determineWinner(userChoice, compChoice);
  
        updateScores(winner);
        updateImages(userChoice, compChoice);
        if (userScore == 5) {
          Result("You win");
          showPlayAgainButton();
          buttonNone()
        } else if (compScore == 5) {
          Result("Better luck next time");
          showPlayAgainButton();
          buttonNone()
        }
      });
    });
  
    function getComputerChoice() {
      var choices = ['rock', 'paper', 'scissors'];
      var randomIndex = Math.floor(Math.random() * choices.length);
      return choices[randomIndex];
    }
  
    function determineWinner(userChoice, compChoice) {
      if (userChoice === compChoice) {
        return 'draw';
      } else if ((userChoice === 'rock' && compChoice === 'scissors') ||
                 (userChoice === 'paper' && compChoice === 'rock') ||
                 (userChoice === 'scissors' && compChoice === 'paper')) {
        return 'user';
      } else {
        return 'comp';
      }
    }
  
    function updateScores(winner) {
      if (winner === 'user') {
        userScore++;
      } else if (winner === 'comp') {
        compScore++;
      }
  
      userScoreDisplay.textContent = userScore;
      compScoreDisplay.textContent = compScore;
    }
    function buttonNone(){
      document.querySelector(".button1").style.visibility="hidden"
    }
  
    function showPlayAgainButton() {
      var playAgainButton = document.createElement("button");
      playAgainButton.textContent = "Play Again";
      playAgainButton.classList.add("play-again");
      playAgainButton.addEventListener("click", resetGame);
     var parentDiv = document.getElementById("resetbuttn");
      parentDiv.appendChild(playAgainButton);
      
    }
  
    function resetGame() {
      location.reload();
    }
  function display(){
    document.getElementsByClassName("button1").style.display="none"
  }
    function updateImages(userChoice, compChoice) {
      var userImage = "assets/" + userChoice + "-hand.png";
      var compImage = "assets/" + compChoice + "-hand.png";
  
      var compHand = document.querySelector(".button2");
  
      handImage.src = userImage;
      compHand.src = compImage;
    }
  
    function Result(resultText) {
      var resultDisplay = document.createElement("h2");
      resultDisplay.textContent = resultText;
      resultDisplay.classList.add("result");
     var resultt=document.getElementById("win/lose");
     resultt.appendChild(resultDisplay)
    }
  });
  
  
          
    

  
     
