class Form {
    constructor() {
        this.button = createButton("join");
        this.input = createInput("name");
        this.greeting= createElement("h4");
    }

    hide(){
        this.button.hide();
        this.input.hide();
        this.greeting.hide();
    
    }

    display() {
        var title= createElement("h2");
        title.html("Car Racing Game");
        title.position(130,0);
        
        
        this.button.position(250,200);
        this.input.position(130,160);

        this.button.mousePressed(()=>{
            this.button.hide();
            this.input.hide();

            player.name = this.input.value();
            console.log(playerCount);
            playerCount++;

            player.update(player.name);
            player.updateCount(playerCount);

           
            this.greeting.html("Hello "+player.name);
            this.greeting.position(130,160);
            
        });
    }
}