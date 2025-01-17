'use strict';

/**
 * 
 * @param {Number} rateWinner 
 * @param {Number} rateLoser 
 * @returns number or error
 */
function calculateNewRate (rateWinner, rateLoser) {
  if(Number.isNaN(rateWinner-rateLoser) === true || typeof rateWinner !== 'number'  || typeof rateLoser !== 'number' ||rateWinner < 0 || rateLoser < 0) {
    return 'can not be calculated. Invalid rate. Enter not negative numbers';
  }
  if ( rateWinner === 0 ){
    rateWinner =rateLoser;
    return rateWinner;
  }
  else if (rateWinner- rateLoser>=0 && rateWinner- rateLoser<=2 ) {
    return rateWinner+2;
  }
  else if (rateWinner- rateLoser>2 && rateWinner- rateLoser<20){
    return rateWinner+1;
  }
  else if (rateWinner- rateLoser>=20){
    return rateWinner;
  }
  else if (rateWinner - rateLoser <0) {
    rateWinner += (rateLoser - rateWinner+5)/3;
    return rateWinner.toFixed(1);
  }
}
console.log(`New rate of the winner: ${calculateNewRate(-5, 10)}`);
console.log(`New rate of the winner: ${calculateNewRate(NaN, 10)}`);
console.log(`New rate of the winner: ${calculateNewRate(10, '123')}`);
console.log(`New rate of the winner: ${calculateNewRate(15, 10)}`); 
console.log(`New rate of the winner: ${calculateNewRate(20, 0)}`);
console.log(`New rate of the winner: ${calculateNewRate(10, 14)}`);
console.log(`New rate of the winner: ${calculateNewRate(0, 16)}`);
console.log(`New rate of the winner: ${calculateNewRate(15, 14)}`);


