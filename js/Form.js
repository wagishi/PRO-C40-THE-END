class Form{
    constructor(){
    this.title = createElement("h2");

    this.input = createInput("name");
    this.button = createButton("play");

    this.greeting = createElement("h3");

    this.reset = createButton("reset");
    }

    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
        this.title.hide();
    }

 display(){

  this.title.html("Let's See Who Wins!!");
  this.title.position(displayWidth/2-80,0);

  this.input.position(displayWidth/2-80,displayHeight/2-80);
  this.button.position(displayWidth/2+30,displayHeight/2);

  this.reset.position(1000,50)
  this.reset.style('width', '100px');
  this.reset.style('height', '30px');
  this.reset.style('background', 'lightpink');


 this.button.mousePressed(()=>{
  this.input.hide();
  this.button.hide();
   player.name = this.input.value();

 //playerCount = playerCount+1
 playerCount += 1; 
 player.index = playerCount;
 player.update();
 player.updateCount(playerCount);

 this.greeting.html("HELLO "+player.name);
 this.greeting.position(displayWidth/2-70,displayHeight/4);
});

this.reset.mousePressed(() => {
    player.updateCount(0);
    game.update(0);
});

}
}