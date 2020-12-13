var database,gameState = 0,playerCount;
var form,player,game,allPlayers,distance = 0;

function setup(){
    createCanvas(500,500);
    database = firebase.database()
    console.log(database)
   game = new Game()
   game.getState()
   game.start()

}

function draw(){
  if(playerCount===4){
      game.update()
  }
  if(gameState===1){
      clear()
      game.play()
  }
  
}

