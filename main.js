//init variables
let player1Turn = false;
let player2Turn = false;

//wait start event
const starGame = document.getElementById('start');
const cancelGame = document.getElementById('cancel');
starGame.addEventListener('click', event => {
    player1Turn = true;
   // event.target.style.backgroundColor = "green";
   // event.target.textContent = "Restart Game";
    event.target.id = 'reStart';
    event.target.style.display = "none";
    cancelGame.style.display="block"
    console.log('Mouse is over the cell type: ', event.type)

    //change message
    const message = 'X turn, please choose cell'
    let idMes = 'result';
    let eliminate = document.getElementById(idMes);
    console.log(eliminate)
    eliminate.parentNode.removeChild(eliminate);
    document.getElementById('message').insertAdjacentHTML('beforeend', `<h2 id=${idMes}  class="result" >${message} </h2>`);
});

cancelGame.addEventListener('click', event => {

    //Restart variables
    player1Turn = false;
    player2Turn = false;

    event.target.id = 'start';
    event.target.style.display = "none";
    starGame.style.display="block"

    //change message
    const message = 'Ready, press start button!!'
    let idMes = 'result';
    let eliminate = document.getElementById(idMes);
    console.log(eliminate)
    eliminate.parentNode.removeChild(eliminate);
    document.getElementById('message').insertAdjacentHTML('beforeend', `<h2 id=${idMes}  class="result" >${message} </h2>`);
});





const cell1 = document.getElementById('cell1')
const cell2 = document.getElementById('cell2')
const cell3 = document.getElementById('cell3')
const cell4 = document.getElementById('cell4')
const cell5 = document.getElementById('cell5')
const cell6 = document.getElementById('cell6')
const cell7 = document.getElementById('cell7')
const cell8 = document.getElementById('cell8')
const cell9 = document.getElementById('cell9')

cell1.addEventListener('click', chooseCell);
cell2.addEventListener('click', chooseCell);
cell3.addEventListener('click', chooseCell);
cell4.addEventListener('click', chooseCell);
cell5.addEventListener('click', chooseCell);
cell6.addEventListener('click', chooseCell);
cell7.addEventListener('click', chooseCell);
cell8.addEventListener('click', chooseCell);
cell9.addEventListener('click', chooseCell);


cell1.addEventListener('mouseover', event => { console.log('Mouse is over the cell 1: ', player2Turn)});
cell2.addEventListener('mouseover', event => { console.log('Mouse is over the cell 2: ')});
cell3.addEventListener('mouseover', event => { console.log('Mouse is over the cell 3: ')});
cell4.addEventListener('mouseover', event => { console.log('Mouse is over the cell 4: ')});
cell5.addEventListener('mouseover', event => { console.log('Mouse is over the cell 5: ')});
cell6.addEventListener('mouseover', event => { console.log('Mouse is over the cell 6: ')});
cell7.addEventListener('mouseover', event => { console.log('Mouse is over the cell 7: ')});
cell8.addEventListener('mouseover', event => { console.log('Mouse is over the cell 8: ')});
cell9.addEventListener('mouseover', event => { console.log('Mouse is over the cell 9: ')});

// cell1.addEventListener('mouseout', event => {
//     event.target.style.backgroundColor = "antiquewhite";
//     event.target.textContent = ""
//     console.log('Mouse is over the cell type: ', event.type)
// });

function chooseCell(event){
    console.log(event.target.id)
   const turn = player1Turn ? "X" : "0";
   //insert option
   insertImg(event.target.id, turn)
   //change message
   changeMessage(turn)
}

function insertImg(idParent, turn){
    console.log('its turn on : ',  player1Turn)
    if(player1Turn){
        player2Turn = true;
        player1Turn = false
    }else{
        player2Turn = false;
        player1Turn = true
    }

    const urlImg = turn === "X" ? 'img/X.png' :'img/0.png';
        // let eliminate = document.getElementById(idImg);
        // eliminate.parentNode.removeChild(eliminate);
        document.getElementById(idParent).insertAdjacentHTML('beforeend', `<img id="img-${idParent}" width="100" src=${urlImg} alt="computer-choice">`);
}

function changeMessage(turn){

    const message = turn === "X" ? '0 turn, please choose cell' :'X turn, please choose cell';
    //const message = 'X turn, please choose cell'
    let idMes = 'result';
    let eliminate = document.getElementById(idMes);
    eliminate.parentNode.removeChild(eliminate);
    document.getElementById('message').insertAdjacentHTML('beforeend', `<h2 id=${idMes}  class="result" >${message} </h2>`);
}