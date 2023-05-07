let score=JSON.parse(localStorage.getItem('score'));
        //console.log(localStorage.getItem('score')); // to output message stored in local storgae and convert this to js obj using json.parse()//
        // variable type const to let change kiya as value reassign ki//
        if(score=== null){
            score={
                wins:0,
                loose:0,
                ties:0
            };
        }

        updateScoreElement();


      function playGame(playerMove) {
        const computerMove = pickComputerMove();

        let result = '';

        if (playerMove === 'scissors') {
          if (computerMove === 'rock') {
            result = 'You lose.';
          } 
          else if (computerMove === 'paper') {
            result = 'You win.';
          } 
          else if (computerMove === 'scissors') {
            result = 'Tie.';
          }

        } 
        else if (playerMove === 'paper') {
          if (computerMove === 'rock') {
            result = 'You win.';
          } 
          else if (computerMove === 'paper') {
            result = 'Tie.';
          } 
          else if (computerMove === 'scissors') {
            result = 'You lose.';
          }
          
        } else if (playerMove === 'rock') {
          if (computerMove === 'rock') {
            result = 'Tie.';
          } else if (computerMove === 'paper') {
            result = 'You lose.';
          } else if (computerMove === 'scissors') {
            result = 'You win.';
          }
        }
        if(result==='You Win.'){/*using attributes of objects to increase the score*/
            score.wins+=1;
        }
        else if(result==='You lose.'){
            score.loose+=1;
        }
        else if(result==='Tie.'){
            score.ties+=1;
        }

        localStorage.setItem('score',JSON.stringify(score));
        updateScoreElement();

        document.querySelector('.js-result').innerHTML=result;
        document.querySelector('.js-moves').innerHTML=`You
      <img src="${computerMove}.png" class=" move-icon">
      <img src="${playerMove}.png"  class="move-icon">
    Computer`;
//         alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
// wins:${score.wins},loose:${score.loose},ties:${score.ties}`);/* iska indent isiliye hatya taki alert me space na aaye ye line core pront karegi*/
      }


      function updateScoreElement(){
        document.querySelector('.js-score').innerHTML=`wins:${score.wins},loose:${score.loose},ties:${score.ties}`;

      }

      function pickComputerMove() {
        const randomNumber = Math.random();

        let computerMove = '';

        if (randomNumber >= 0 && randomNumber < 1 / 3) {
          computerMove = 'rock';
        } 
        else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
          computerMove = 'paper';
        } 
        else if (randomNumber >= 2 / 3 && randomNumber < 1) {
          computerMove = 'scissors';
        }

        return computerMove;
      }