const holes = document.querySelectorAll('.holes');

const scoreBoard = document.querySelectorAll('.score')

const moles = document.querySelectorAll('.moles')
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
  moleDiv: 0,

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
    for(let i=0; i< holes.length; i++){
      holes[i].classList.remove('moles')
    }
    let divClassNum = this.rNum(6)
    let moleHole = holes[divClassNum]
    ////////////////////////////////////////////////////////////////////////////////
    //look up ways to change class of a div on MDN
    ////////////////////////////////////////////////////////////////////////////////
     //here we want to change the class of the selected hole to the mole
    
    moleHole.classList.add('moles');


    console.log("This is the molehole that was accessed by makeMoles\n", moleHole)
    console.log("this is divClassNum inside makeMoles\n", divClassNum)
    console.log("a mole was made")
  },
  //set up methods inside the game function that execute all the little working pieces

  //startGame method is a function that gets run once, and calls the rest of the functions in order
  startGame: function(){
    console.log("the game has started");

    //in here make a mole show up in a random place
    //set up an interval for timing have it call makeMoles()
    setInterval(function(){
      game.makeMoles();
    }, 1000);
   
  },
    //make a function outside of starGame(but still inside the game object) that produces a mole
    //call that mole producing functino here
    //see if it works, and if it doesn't make it work
    //this.makeMoles()
   // this.timeUp = true;
    //score = 0;
  // This will become the peek function peek();
    //setTimeout(() => (timeUp = true), 10000);

  rNum: function(max){
   //return Math.round(Math.random * (max - min) + min)
   return Math.floor(Math.random() * Math.floor(max))
 }

}

//game.startGame()

console.log("This is the rNum func in game object that we just called\n", game.rNum(6))


addEventListener('click', (event) => {
  console.log(event.target); // note this is vanilla

  //console.log(holes)
  game.clickedDiv = event.target
  console.log("this is the clicked div", game.clickedDiv)

  ////////////////////////////////////////////////////////////////////////////////
  //in here, log whether or not the clicked element was a mole or not
  ////////////////////////////////////////////////////////////////////////////////
 if(event.target.matches('.holes' + '.moles')){
  console.log('Mole Hit')
  //select the image that was clicked 
//if hit remove all moles event.target remove the class of moles
  //remove that image

  //increment the game's score

  //select the score element by id 


  //change its inner text to match the new games score 

 }else {
  console.log('You Miss')
 }



  //if a mole was clicked -- see if div has class of "moles" -- see if element.target is class of moles
    // log yes
  // else 
    // log no

});

//element.addEventListener('click', holes, 

// button.addEventListener('click', event => {
//   button.innerHTML = `Click count: ${event.detail}`;

//});


































