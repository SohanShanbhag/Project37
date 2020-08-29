class Runner {
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;
    }

    getRunnerCount(){
        var runnerCountRef = database.ref("runnerCount");
        runnerCountRef.on("value", (data)=>{
            runnerCount = data.val();
        })
    }

    updateCount(count){
        database.ref("/").update({
            runnerCount: count
        })
    }

    update(){
        var runnerIndex = "runners/runner" + this.index;
        database.ref(runnerIndex).set({
            name: this.name,
            distance: this.distance
        })
    }

    getRunnerInfo(){
        var runnerInfoRef = database.ref('runners');
        runnerInfoRef.on("value",(data)=>{
          allRunners = data.val();
        })
    }
}