// console.log('hellow world')
const hand = ['rock','paper','scissor']
const winningHand = ['rock-scissor','paper-rock','scissor-paper']
const losingHand = ['scissor-rock','rock-paper','paper-scissor']

// console.log(winningHand)
function computerPlay(){
    let randomNo = Math.floor(Math.random() * 3);
    return hand[randomNo];
}

function roshambo(playerSelection, computerSelection){
    let result = 'Lose'
    if(playerSelection == computerSelection) result = 'Draw'
    if(winningHand.includes(playerSelection+'-'+computerSelection)) result = 'Win'
    if(losingHand.includes(playerSelection+'-'+computerSelection)) result = 'Lose'

    return result
}

// console.log('scissor')
// console.log(roshambo('scissor', computerPlay()))

function game(){
    let myScore = 0
    let comScore = 0
    const resultCont = document.querySelector('.resultCont')
    const scoreCont = document.querySelector('.resultCont')

    for(let i=1; i<=5; i++){
        let myHand = window.prompt('select a hand (rock, paper, scissor)','')

        if(myHand == null) return alert('Game Cancelled.')

        let comHand = computerPlay()
        let result = roshambo(myHand.toLowerCase(), comHand)
        
        resultCont.innerHTML += 'Round '+i+' '

        if(result == 'Draw'){
            // alert('Draw')
            resultCont.innerHTML += 'Draw! '+myHand+' == '+comHand
        }else if(result == 'Win'){
            myScore++
            // alert('You '+result+'! '+myHand+' beats '+comHand)
            resultCont.innerHTML += 'You '+result+'! '+myHand+' beats '+comHand+'<br>'
        }else{
            comScore++
            // alert('You '+result+'! '+comHand+' beats '+myHand)
            resultCont.innerHTML += 'You '+result+'! '+comHand+' beats '+myHand+'<br>'
        }
    }

    resultCont.innerHTML += '<br>Final Score<br> You:'+myScore+'<br>Computer:'+comScore

    if(myScore > comScore){
        resultCont.innerHTML += '<br><br>WINNER: YOU';
    }else{
        resultCont.innerHTML += '<br><br>WINNER: COMPUTER';
    }
}

game()