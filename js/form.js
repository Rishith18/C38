class Form {
    constructor() {
        this.button = createButton("join");
        this.input = createInput("name");
        this.greeting= createElement("h4");
        this.gameOver= createElement("h1");
        this.button2 = createButton("Reset");
    }

    hide(){
        this.button.hide();
        this.input.hide();
        this.greeting.hide();
    
    }

    display() {
        var title= createElement("h2");
        title.html("Car Racing Game");
        title.position(displayWidth/2 - 40,0);
        this.gameOver.html("Game Over");
        this.gameOver.position(displayWidth/2 - 40,displayHeight/2 + 40)
        this.gameOver.hide();
        
        this.button.position(displayWidth/2 - 40,displayHeight/2 + 40);
        this.button2.position(100,100);
        this.input.position(displayWidth/2 - 40,displayHeight/2 - 40);

        this.button.mousePressed(()=>{
            this.button.hide();
            this.input.hide();

            player.name = this.input.value();
            playerCount++;
            player.index=playerCount;

            player.update();
            player.updateCount(playerCount);

           
            this.greeting.html("Hello "+player.name);
            this.greeting.position(displayWidth/2 - 40,displayHeight/2 - 40);
            
        });

        this.button2.mousePressed(()=> {
            game.update(0);
            player.updateCount(0);

        });
    }
}