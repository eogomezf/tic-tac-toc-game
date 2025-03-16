//init variables
let player1Turn = false;
let player2Turn = false;
let started = false;
let selectedPlayer1 = [];
let selectedPlayer2 = [];
let moveMade = 0;

let scorePlayer1 = 0;
let scorePlayer2 = 0;

const allSolutions = [
	['1', '2', '3'],
	['4', '5', '6'],
	['7', '8', '9'],
	['1', '4', '7'],
	['2', '5', '8'],
	['3', '6', '9'],
	['1', '5', '9'],
	['3', '5', '7'],
];

//wait start event
const starGame = document.getElementById('start');
const cancelGame = document.getElementById('cancel');

starGame.addEventListener('click', event => {
    player1Turn = true;
    started = true;
    event.target.style.display = "none";
    cancelGame.style.display="block";

    //change message
    changeMessage('X turn, please move');

});

cancelGame.addEventListener('click', event => {

    //Restart variables
    player1Turn = false;
    player2Turn = false;
    started = false;
    selectedPlayer1 = [];
    selectedPlayer2 = [];

    event.target.style.display = "none";
    starGame.style.display="block";

    //change message
    changeMessage('Ready, press start button!!');
    //erease data
    ereaseData();
});


const cell1 = document.getElementById('cell1');
const cell2 = document.getElementById('cell2');
const cell3 = document.getElementById('cell3');
const cell4 = document.getElementById('cell4');
const cell5 = document.getElementById('cell5');
const cell6 = document.getElementById('cell6');
const cell7 = document.getElementById('cell7');
const cell8 = document.getElementById('cell8');
const cell9 = document.getElementById('cell9');

cell1.addEventListener('click', chooseCell);
cell2.addEventListener('click', chooseCell);
cell3.addEventListener('click', chooseCell);
cell4.addEventListener('click', chooseCell);
cell5.addEventListener('click', chooseCell);
cell6.addEventListener('click', chooseCell);
cell7.addEventListener('click', chooseCell);
cell8.addEventListener('click', chooseCell);
cell9.addEventListener('click', chooseCell);


// cell1.addEventListener('mouseover', event => { console.log('Mouse is over the cell 1: ', player2Turn)});
// cell2.addEventListener('mouseover', event => { console.log('Mouse is over the cell 2: ')});
// cell3.addEventListener('mouseover', event => { console.log('Mouse is over the cell 3: ')});
// cell4.addEventListener('mouseover', event => { console.log('Mouse is over the cell 4: ')});
// cell5.addEventListener('mouseover', event => { console.log('Mouse is over the cell 5: ')});
// cell6.addEventListener('mouseover', event => { console.log('Mouse is over the cell 6: ')});
// cell7.addEventListener('mouseover', event => { console.log('Mouse is over the cell 7: ')});
// cell8.addEventListener('mouseover', event => { console.log('Mouse is over the cell 8: ')});
// cell9.addEventListener('mouseover', event => { console.log('Mouse is over the cell 9: ')});



function chooseCell(event){
    
    let valMatrix = event.target.id.split('')[4];
    let value = event.target.getAttribute('valueCell');

    if (started && value === '0'){
        let turn;
        if(player1Turn){
            turn = "X";
            selectedPlayer1.push(valMatrix);
            changeMessage('0 turn, please move');
        }else{
            turn = "0";
            selectedPlayer2.push(valMatrix);
            changeMessage('X turn, please move');
        }
        let newValue = event.target.setAttribute('valueCell','1');
     
        //insert option
        insertImg(event.target.id, turn);

        moveMade++;
  
        //validate win options
        if(selectedPlayer1.length >=3 && turn === "X") {
 
            const result = validateWin(selectedPlayer1, turn);

         if(result){

            changeMessage('Player 1 wins');
            scorePlayer1++;
            started = false;
            moveMade = 0;
            showScore('player1-score', 'player1-score-show', scorePlayer1);
         }else if(moveMade > 8 ){
 
            changeMessage('draw');
            started = false;
            moveMade = 0;
        }

        }
        
        if(selectedPlayer2.length >=3  && turn === "0") {

            const result = validateWin(selectedPlayer2, turn);
            if(result){
                changeMessage('Player 2 wins');
                started = false;
                scorePlayer2++;
                moveMade = 0;
                showScore('player2-score', 'player2-score-show', scorePlayer2);
             }else if(moveMade > 8 ){
                    changeMessage('draw');
                    started = false;
                    moveMade = 0;             
             }
        }        
    }
}

function insertImg(idParent, turn){
  
    //alternate player
    if(player1Turn){
        player2Turn = true;
        player1Turn = false;
    }else{
        player2Turn = false;
        player1Turn = true;
    }
 
    const urlImg = turn === "X" ? 'https://i.ibb.co/Fb38TtKF/x.png' :'https://i.ibb.co/fdtXdBL7/image.png';
    document.getElementById(idParent).insertAdjacentHTML('beforeend', `<img id="img-${idParent}" width="90" src=${urlImg} alt="computer-choice">`);
}

function changeMessage(message){

    let idMes = 'result';
    let eliminate = document.getElementById(idMes);
    eliminate.parentNode.removeChild(eliminate);
    document.getElementById('message').insertAdjacentHTML('beforeend', `<h2 id=${idMes}  class="result" >${message} </h2>`);
}

function ereaseData(){
    for(let i = 1; i <= 9; i++){
        let img = document.getElementById(`img-cell${i}`);
        if(img){
            img.parentNode.removeChild(img);
        }
        let celltem = document.getElementById(`cell${i}`);
        celltem.setAttribute('valueCell','0');      
    }
}

function validateWin(selectedPlayer,turn){
    let solution = false;
    for(let i = 0; i< allSolutions.length; i++){
        solution = allSolutions[i].every(el => selectedPlayer.includes(el));
        if(solution){
            return solution;
        }
    }

    return solution;
}

function showScore(idParent, idMes, score){
    let eliminate = document.getElementById(idMes);
    eliminate.parentNode.removeChild(eliminate);
    document.getElementById(idParent).insertAdjacentHTML('beforeend', `<p id=${idMes}  class="score" >${score} </p>`);
}