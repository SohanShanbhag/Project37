class Game {
    constructor(){

    }

    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function(data){
            gameState = data.val()
        })
    }

    update(state){
        database.ref("/").update({
            gameState: state
        })
    }

    async start(){
        if(gameState === 0){
            runner = new Runner();
            var runnerCountRef = await database.ref("runnerCount").once("value");
            if(runnerCountRef.exists()){
                runnerCount = runnerCountRef.val();
                runner.getRunnerCount();
            }

            form = new Form();
            form.display();
        }

        run1 = createSprite(100, 200);
        run2 = createSprite(300, 200);
        run3 = createSprite(500, 200);
        runners = [run1, run2, run3];
    }

    play(){
        form.hide();
        textSize(30);
        text("Game Starts Now !", displayWidth/2 - 40, displayHeight/2 - 60);
        runner.getRunnerInfo();

        if(allRunners !== undefined){
            var index = 0;
            var x = 200;
            var y;

            for(var run in allRunners){
                index++ ;
                x = x + 200;
                y = displayHeight - allRunners[run].distance;
                runners[index - 1].x = x;
                runners[index - 1].y = y;

                if(index === runner.index){
                    runners[index - 1].shapeColor = "red";
                    camera.position.x = displayWidth/2;
                    camera.position.y = runners[index-1].y;
                    text("Your distance : " + runner.distance, runners[index - 1].x - 100, runners[index - 1].y - 50);
                }

                text("Player : " + index, runners[index - 1].x - 50, runners[index - 1].y - 100);
            }
        }

        if(keyIsDown(UP_ARROW) && runner.index !== null){
            runner.distance += 50;
            runner.update();
        }

        drawSprites();
    }
}