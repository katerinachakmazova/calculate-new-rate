'use strict';

/**
 * 
 * @param {Number} rateWinner 
 * @param {Number} rateLoser 
 * @returns {Number} 
 */
function calculateNewRate (rateWinner, rateLoser) {
  let rateDifference = rateWinner - rateLoser;
  if(Number.isNaN(rateDifference) || typeof rateWinner !== 'number'  || typeof rateLoser !== 'number' ||rateWinner < 0 || rateLoser < 0) {
    return -1;
  }
  if ( rateWinner === 0 ){
    return rateLoser;
  }
  if (rateDifference >= 0 && rateDifference <= 2 ) {
    return rateWinner + 2;
  }
  if (rateDifference > 2 && rateDifference < 20){
    return rateWinner+1;
  }
  if (rateDifference >= 20){
    return rateWinner;
  }
  if (rateDifference < 0) {
    return rateWinner + (rateLoser - rateWinner + 5) / 3;
  }
}
let result = calculateNewRate(15, 14);
if (result === -1){
  console.log('Invalid input');
}
else {
  console.log(`New rate of the winner: ${result.toFixed(1)}`);
};


