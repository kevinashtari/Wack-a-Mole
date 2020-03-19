const holes = document.querySelectorAll('.hole');

const scoreBoard = document.querySelectorAll('.score')

const moles = document.querySelectorAll('.mole')
// let timeUp = false;
// let score = 0;
// let lastHole;


// const h = 
// document.getElementsByClassName('hole')
// let i;
// for (i = 0; i < h.length; i++) {
//   h[i].style.backGroundColor = 'Red';
// console.log(h)
// }
const game = {
  timeUp: false,
  timer: 10,
  score: 0,
  clickedDiv: null,
  moleDiv: null,

  increaseTime: function(){
    //setTimeout(() => (timeUp = true), 10000);
    const timeInterval = setInterval(() => {
      if(this.timer === 0){
        clearInterval(timeInterval)
        console.log("you're outta time")
       // scoreBoard.innerText = this.timer
      } else {
        this.timer--
       // scoreBoard.innerText = this.timer
        console.log("The time is ", this.timer)
        console.log("this is the scoreboard", scoreBoard)
      }
    }, 1000)
  },

  makeMoles: function(){
    let divClassNum = this.rNum(1, 6)
    console.log("this is divClassNum inside makeMoles\n", divClassNum)
    console.log("a mole was made")
  },
  //set up methods inside the game function that execute all the little working pieces

  //startGame method is a function that gets run once, and calls the rest of the functions in order
  startGame: function(){
    console.log("the game has started");

    //in here make a mole show up in a random place
  function makeMoles(){
    return('divClassNum')
  };
  
// }
    //make a function outside of starGame(but still inside the game object) that produces a mole
    //call that mole producing functino here
    //see if it works, and if it doesn't make it work
    //this.makeMoles()
   // this.timeUp = true;
    //score = 0;
  // This will become the peek function peek();
    //setTimeout(() => (timeUp = true), 10000);

  rNum:function(min, max){
    return Math.round(Math.random * (max - min + min)
  }

//game.startGame()
game.rNum(0, 7)
console.log("This is the rNum func in game object that we just called\n", game.randomNumForMoles(0, 7))


addEventListener('click', (event) => {
  console.log(event.target); // note this is vanilla
  //console.log(holes)
  game.clickedDiv = event.target
  console.log("this is the clicked div", game.clickedDiv)
  


})













