import { diceAnimation, getNode, getNodes } from './lib/index.js';

const [startButton, recordButton, resetButton] = getNodes('.buttonGroup > button');


let isClicked = false
  let stopAnimation


function handleRollingDice(e) {

  
  if(!isClicked){
    stopAnimation = setInterval(diceAnimation,100)
  }else{
    clearInterval(stopAnimation)
  }
  isClicked = !isClicked
}

startButton.addEventListener('click', handleRollingDice);
