'use strict'


let randomNum = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highScore = 0;



function checkScore(){
    if(score >= 0){
        score--;
        document.querySelector('.score').textContent = score;
    }else{
        document.querySelector('.message').textContent = 'You lose :(';
    }
}
document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    randomNum = Math.trunc(Math.random()*20) + 1;
    document.querySelector('.message').textContent = 'Start Guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#686A4E';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';

})

document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    // Scenario 1 - no guess
    // console prints out 0
    if(!guess){

        document.querySelector('.message').textContent = 'No number!';
    }
    // Scenario 2 - if guess is equal to the random Number
    else if(guess === randomNum){
        highScore = Math.max(highScore,score);
        document.querySelector('.highscore').textContent = highScore;
        document.querySelector('.number').textContent = randomNum;
        document.querySelector('.message').textContent = 'Correct Number!';
        document.querySelector('body').style.backgroundColor = '#CDA67A';
        document.querySelector('.number').style.width = '30rem';
    }
    // Scenario 3 - if guess is greater than the random number
    else if(guess > randomNum){
        document.querySelector('.message').textContent = 'Too high!'
       checkScore();
    }
    // Scenario 4 - if guess is smaller than the random number
    else if(guess < randomNum){
        document.querySelector('.message').textContent = 'Too low!'
        checkScore();
    }
    
})

