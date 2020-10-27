class Form{
    constructor(){
        this.button = createButton('Play');
        this.inputBox = createInput("ENTER YOUR NAME");
        this.title = createElement('h2');
        this.button = createButton('Play');
    }
    display(){
        this.title.html("");
        this.title.position();

        this.button.position();
        this.button.mousePressed(()=>{
        this.input.hide();    
        this.button.hide(); 
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("WELCOME"+player.name);
        this.greeting.position();
        })

        this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.update(0);
        });
    }
}