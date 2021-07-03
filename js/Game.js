class Game{
    constructor(){
     this.index = 0;
    }
    getState() {
    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value", function (data) {
    gameState = data.val();
    });
    }

    update(state) {
     database.ref('/').update({
     gameState: state
     });
    }

    async start() {
    if (gameState === 0) {
    player = new Player();
    var playerCountRef = await database.ref('playerCount').once("value");
    if (playerCountRef.exists()) {
         playerCount = playerCountRef.val();
         player.getCount();
     }

     form = new Form()
     form.display();
}
        
        player1 = createSprite(100,200);
        player1.addImage("player1img",spaceCraft1);

        player2 = createSprite(100,400);
        player2.addImage("player2img", spaceCraft2);


        players = [player1,player2];
    }

    play(){
        form.hide();
        Player.getPlayerInfo();

        textSize(30);
        text("GAME STARTED",130,100);
    
        if(allPlayers !== 0){
            image(trackImg,0,-displayHeight*4,displayWidth,displayHeight*5);
 
         var x =100;
         var y=200;
         var index =0;
         drawSprites();

        for(var plr in allPlayers){
         index = index+1;
          x = 500-allPlayers[plr].distance;
          y=500;
                     
     players[index -1].x = x;
     players[index - 1].y = y;
                       
     if(index === player.index){
                         
     fill("black");
      textSize(25);
     text(allPlayers[plr].name ,x-25,y+25);
} 

     if(index === player.index){
         players [index-1].shapeColor = "red";
         camera.position.x = displayWidth/2;
         camera.position.y =players[index-1].y;
                }
            }  
        }

        if(player.distance < 3640){
            if(keyIsDown (38)&& player.index !== null){
              yVel += 0.9;
            if(keyIsDown (37)){
              xVel -= 0.2;
            }
            if(keyIsDown(39)){
             xVel += 0.2;
            }
            
          }else if (keyIsDown(38) && yVel > 0 && player.index !== null){
              yVel -= 0.1;
              xVel *= 0.9 ;
            }else{
              yVel *= 0.985;
              xVel *= 0.985;
            }
          }

          //create spwan obsatcles randomly
          if(frameCount % 20 === 0){
              obsatcle = createSprite(random(100,1000),0,100,100);
              obsatcle.velocityY = 5;
              obsatcle,scale(0.1);
              var rand = Math.round(random(1,4));
              switch(rand){
                  case 1 : obsatcle.addImage(ob1,"obsatcle1");
                  break;
                  case 2 : obsatcle.addImage(ob2,"obsatcle2");
                  break;
                  case 3 : obsatcle.addImage(ob3,"obsatcle3");
                  break;
                  case 4 : obsatcle.addImage(ob4,"obsatcle4");
                  break;
              }
              obsatclesGroup.add(obsatcle);
          }
    
          //move the car
         player.distance += yVel;
         yVel *= 0.98;
         player.xPos += xVel;
         xVel *= 0.985;
         player.update();

         if (player.index !== null) {
            for(var i=0;i<obsatclesGroup.length;i++){
    
            if(obsatclesGroup.get(i).isTouching(players)){
                obsatclesGroup.get(i).destroy()
                this.end();
              }
            }
        }

        drawSprites();
    }

    end(){
       console.log("Game Ended");
       clear();
       fill("blue");
       textSize(40);
       text("GAME OVER YOU LOST !!",350,300)
    }
}
