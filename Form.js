class Form {
    constructor(){
        this.input = createInput("");
        this.playButton = createButton("START GAME");
        this.greeting = createElement("h2");
    }

    hide(){
        this.input.hide();
        this.playButton.hide();
        this.greeting.hide();
    }

    display(){
        var title = createElement("h1");
        title.html("Ultimate Runners - 3 player game");
        title.position(displayWidth/2 - 100, 0);

        this.input.position(displayWidth/2 - 60, displayHeight/2 - 80);
        this.playButton.position(displayWidth/2 - 25, displayHeight/2);

        this.playButton.mousePressed(()=>{
            this.input.hide();
            this.playButton.hide();
            runner.name = this.input.value();
            runnerCount += 1;
            runner.index = runnerCount;
            runner.update();
            runner.updateCount(runnerCount);
            this.greeting.html("Hello " + runner.name);
            this.greeting.position(displayWidth/2 - 50, displayHeight/4);
        })
    }
}