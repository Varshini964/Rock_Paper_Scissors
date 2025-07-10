 let Win = 0,
        Lose = 0,
        Tie = 0;
      UpdateScore();

      document.title = "Rock_Paper_Scissors";
      function ComputerMove() {
        const RandomNumber = Math.random();
        let computerMove = ``;
        if (RandomNumber >= 0 && RandomNumber <= 1 / 3) {
          computerMove = `Rock`;
        } else if (RandomNumber > 1 / 3 && RandomNumber <= 2 / 3) {
          computerMove = `Paper`;
        } else {
          computerMove = `Scissors`;
        }
        return computerMove;
      }

      function PlayerMove(playerMove) {
        const compMove = ComputerMove();
        let result = ``;
        if (playerMove === `Rock`) {
          if (compMove === `Paper`) {
            result = `Lose`;
          } else if (compMove === `Scissors`) {
            result = `Win`;
          } else {
            result = `Tie`;
          }
        } else if (playerMove === `Paper`) {
          if (compMove === `Paper`) {
            result = `Tie`;
          } else if (compMove === `Scissors`) {
            result = `Lose`;
          } else {
            result = `Win`;
          }
        } else {
          if (compMove === `Paper`) {
            result = `Win`;
          } else if (compMove === `Scissors`) {
            result = `Tie`;
          } else {
            result = `Lose`;
          }
        }
        if (result === `Win`) {
          Win++;
        } else if (result === `Lose`) {
          Lose++;
        } else {
          Tie++;
        }
        results(result);
        document.querySelector(
          ".opinion"
        ).innerHTML = `You ${playerMove} - ${compMove} Computer`;
        UpdateScore();
        alert(
          `Player Move is ${playerMove},Computer Move is ${compMove},You ${result} Wins:${Win} Losses:${Lose} Ties:${Tie}`
        );
        return result;
      }
      function UpdateScore() {
        document.querySelector(
          ".score"
        ).innerHTML = `Wins:${Win} Losses:${Lose} Ties:${Tie}`;
      }
      function resetButton() {
        Win = 0;
        Lose = 0;
        Tie = 0;
        UpdateScore();
        document.querySelector(".results").innerHTML = ``;
        document.querySelector(".opinion").innerHTML = ``;
      }
      function results(result) {
        if (result === `Tie`) {
          document.querySelector(".results").innerHTML = `It's a ${result}`;
        } else {
          document.querySelector(".results").innerHTML = `You ${result}`;
        }
      }