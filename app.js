var scores,roundScores,activePlayer,dice,gamePlaying;

// This is what happnes when you click new game
init();





// If we roll the dice
document.querySelector('.btn-roll').addEventListener('click', function(){
// What to do when the button is clicked

if(gamePlaying){
    

// 1. get random number from 1 - 6
 var dice = Math.floor(Math.random() * 6) + 1;

 // 2. display the result
 var diceDOM = document.querySelector('.dice');
 diceDOM.style.display = 'block';
 diceDOM.src = 'dice-' + dice + '.png';
 
 
 // 3. Update the round score if the rolled number was not a 1
     if(dice !== 1){
         // Update roundScore
         roundScores+=dice;
         
         // display the round score
         document.querySelector('#current-' + activePlayer).textContent = roundScores;
     }else{
         nextPlayer();
     }

}


});


// this is for the hold button
document.querySelector('.btn-hold').addEventListener('click', function(){

    if(gamePlaying){
        
    // add current score to global score
    scores[activePlayer] += roundScores;

    // Update the UI 
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];


    // Check if player won the game
    if(scores[activePlayer]>= 100){
        document.querySelector('#name-' + activePlayer).textContent = 'Winner';
        // hides the dice after the player wins
        document.querySelector('.dice').style.display = 'none';

        // adding winner
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        // then making it active
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

        // Player has won
        gamePlaying = false;

    }else{
        nextPlayer();
      }

    }

});


// starting a new game function
document.querySelector('.btn-new').addEventListener('click', init);

// function called when we start application
function init (){
    scores = [0,0];
    roundScores = 0;
    activePlayer = 0;

    
document.querySelector('.dice').style.display = 'none';

// dont use css style here
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.getElementById('name-0').textContent = 'Player 1';
document.getElementById('name-1').textContent = 'Player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');






    }


function nextPlayer(){

        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        // set round score back to 0
        roundScores = 0;

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        // This will toggle when we change players
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        document.querySelector('.dice').style.display = 'none';
}




