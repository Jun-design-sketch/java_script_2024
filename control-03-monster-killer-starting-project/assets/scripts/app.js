// global variable
const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;
const MODE_ATTACK = 'ATTACK'; // MODE_ATTACK = 0;
const MODE_STRONG_ATTACK = 'STRONG_ATTACK'; // MODE_STRONG_ATTACK = 1
const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';

function getMaxLifeValues() {
  // set Maximum life
  const enteredValue = prompt('Maximum life for you and the monster.', '100');
  let parsedValue = parseInt(enteredValue);
  if(isNaN(parsedValue) || parsedValue <= 0){
    throw {message: 'Invalid user input, not a number!'};
  }
  return parsedValue;
}

let chosenMaxLife;
try {
  chosenMaxLife = getMaxLifeValues();
} catch(error) {
  console.log(error);
  // if there is rest of handling, recreate error
  // throw error;
  chosenMaxLife = 100;
} finally {
  // some cleanup
  console.log('finally: as we know same as java or other lang');
}

// initial life
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;
adjustHealthBars(chosenMaxLife);

// log setting
let battleLog = [];
function writeToLog(val, monsterHealth, playerHealth) {
    logEntry = {
      value: val,
      finalMonsterHealth: monsterHealth,
      finalPlayerHealth: playerHealth
    }
    battleLog.push(logEntry);
  }

function reset() {
  currentMonsterHealth = chosenMaxLife;
  currentPlayerHealth = chosenMaxLife;
  resetGame(chosenMaxLife);
}

function endRound() {
  const initialPlayerHealth = currentPlayerHealth;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;

  writeToLog(
    playerDamage,
    currentMonsterHealth,
    currentPlayerHealth
  );

  if(currentPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false;
    removeBonusLife();
    currentPlayerHealth = initialPlayerHealth;
    alert('You would be dead but the bonus life saved you!');
    setPlayerHealth(initialPlayerHealth);
  }

  if(currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert('You won!');
  }else if(currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('You lost!');
  }else if(currentPlayerHealth <= 0 && currentMonsterHealth <= 0){
    alert('You have a draw!');
  }

  if(currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
    reset();
  }
}

function attackMonster(mode) {
  let maxDamage;
  if(mode === MODE_ATTACK) {
    maxDamage = ATTACK_VALUE;
  }else if(mode === MODE_STRONG_ATTACK){
    maxDamage = STRONG_ATTACK_VALUE;
  }
  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;

  endRound();
}

function attackHandler() {
  attackMonster(MODE_ATTACK);
}

function strongAttackHandler() {
  attackMonster(MODE_STRONG_ATTACK);
}

function healHandler() {
  let healValue;
  if(currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
    alert("You can't heal to more than your max initial health.");
    healValue = chosenMaxLife - currentPlayerHealth;
  }else{
    healValue = HEAL_VALUE;
  }

  increasePlayerHealth(healValue);
  currentPlayerHealth += healValue;

  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;
  endRound();
}

function printLogHandler() {
  // while(!finished) {
  //   const rndNumber = Math.random();
  //   randomNumbers.push(rndNumber);
  //   if (rndNumber > 0.5) {
  //       finished = true;
  //   }
  //   console.log(rndNumber);
  // }

  let j = 0;
  do{
    console.log(j);
    j++;
  }while (j < 3) {
    // do something
  }

  // let j = 0;
  // while(j < 10){
  //   console.log('WowowowoW');
  //   j = j+3;
  // }

  let m = 0;
  outerWhile: do{
    console.log('Outer', m);
    innerFor: for(let n =0; n < 5; n++){
      if(n === 3){
        break outerWhile;
        // continue outerWhile;
      }
      console.log('Inner', n);
    }
    m++;
  }while(j<3);

  // for(let i=0; i<battleLog.length; i++){
  //   console.log(battleLog[i]);
  // }
  // for(const el of battleLog){
  //   console.log(el);
  // }
  let i = 0;
  for(const logEntry of battleLog){
    console.log(`#${i}`);
    for(const key in logEntry){
      // console.log(key);
      console.log(logEntry[key]);
    }
    i++;
  }
//  console.log(battleLog);
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healHandler);
logBtn.addEventListener('click', printLogHandler);