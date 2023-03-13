const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Score')
}
const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Score')
}
// const p1Button = document.querySelector('#p1Button');
// const p2Button = document.querySelector('#p2Button');
const reserButton = document.querySelector('#reset');
const totalRounds = document.querySelector('#rounds');

const p1Display = document.querySelector('#p1Score');
const p2Display = document.querySelector('#p2Score');

let p1Score=0;
let p2Score=0;
let winningScore = 3;
let isGameOver = false;

function updatesScores(player, opponent){
    if(!isGameOver){
        player.score++;
        if(player.score === winningScore){
            isGameOver = true;
            player.display.classList.add('winner');
            opponent.display.classList.add('loser');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

p1.button.addEventListener('click' , function() {
    updatesScores(p1,p2)
    // if(!isGameOver){
    //     p1Score++;
    //     if(p1Score === winningScore){
    //         isGameOver = true;
    //         p1Display.classList.add('winner');
    //         p2Display.classList.add('loser');
    //     }
    //     p1Display.textContent = p1Score;
    // }
})

p2.button.addEventListener('click' , function() {
    updatesScores(p2,p1)
    // if(!isGameOver){
    //     p2Score++;
    //     if(p2Score === winningScore){
    //         isGameOver = true;
    //         p2Display.classList.add('winner');
    //         p1Display.classList.add('loser');
    //     }
    //     p2Display.textContent = p2Score;
    // }
})

totalRounds.addEventListener('change', function(){
    winningScore = parseInt(this.value);
    reset();
})

reserButton.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    p1.score = 0;
    p2.score = 0;
    p1.display.textContent = p1.score;
    p2.display.textContent = p2.score;
    p1.display.classList.remove('winner', 'loser');
    p2.display.classList.remove('loser', 'winner');
    p1.button.disabled = false;
    p2.button.disabled = false;
}
