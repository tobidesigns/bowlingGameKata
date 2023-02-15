let bowlingGame = {
    //Variable declaration
    frame: 1,
    players: [],
    //Function declaration
    bowlingAction: function (){
        if (this.players.firstGo === true)
        {
            let throwBall = Math.floor(Math.random() * (this.players.pinsStanding + 1))
            this.players.pinsStanding -= throwBall;
            if(this.players.pinsStanding == 0 ){
                console.log("strike")
                this.players.score += 10
                this.players.strike === true
        }else
        {
            this.players.firstGo === false
            this.players.pinsStanding -= throwBall;
                if(this.players.pinsStanding == 0)
                {
                console.log("spare")
                this.players.score += 10
                this.players.spare === true
                } 
            } this.players.score = (10 - this.players.pinsStanding)
        }
    },
    frameMethod: function (){
        bowlingGame.frame += 1;
    },
    playerAssign: function (){
        let numOfPlayers;
        numOfPlayers = parseInt(prompt("How many players will be playing"))
        for(let i = 0; i < numOfPlayers; i++){
            this.players.push(prompt(`Please enter player ${i + 1} name`));
            this.players.score = 0;
            this.players.spare = false;
            this.players.strike = false;
        }
        console.log("Great stuff we have the following players:..")
        for (let j = 0; j < this.players.length; j++){
            console.log(`${this.players[j]}`)
        }
    },
    fullGame: function (){
        this.playerAssign();
        while (bowlingGame.frame <= 9){
            this.frameMethod()
            for (let i = 0; i < this.players.length; i++){
                this.players.firstGo = true;
                bowlingGame.bowlingAction();
            }
        }
    }
};



bowlingGame.frameMethod();
console.log(bowlingGame.frame);
console.log(bowlingGame.players)