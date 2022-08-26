let scoreTextPlayer1 = document.getElementById('player1Score')
let P1score = 0
scoreTextPlayer1.innerText = 'Home score: 0'
function addoneP1(){
  P1score += 1
  scoreTextPlayer1.innerText = 'Home score: ' + P1score
}
function addtwoP1(){
  P1score += 2
  scoreTextPlayer1.innerText = 'Home score: ' + P1score
}
function addthreeP1(){
  P1score += 3
  scoreTextPlayer1.innerText = 'Home score: ' + P1score
}



let scoreTextPlayer2 = document.getElementById('player2Score')
let P2score = 0
scoreTextPlayer2.innerText = 'Guest score: 0'
function addoneP2(){
  P2score += 1
  scoreTextPlayer2.innerText = 'Guest score: ' + P2score
}
function addtwoP2(){
  P2score += 2
  scoreTextPlayer2.innerText = 'Guest score: ' + P2score
}
function addthreeP2(){
  P2score += 3
  scoreTextPlayer2.innerText = 'Guest score: ' + P2score
}


function resetall(){
  scoreTextPlayer1.innerText ='Home score: 0'
  scoreTextPlayer2.innerText = 'Guest score: 0'
  P2score = 0
  P1score = 0
}

function hej(){
alert('hej')
  
}