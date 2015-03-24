var express = require("express"),
    http = require("http"),
    router = express.Router();
    
var weapon = [
            "scissors",
             "paper",
            "rock",
             "lizard",
             "spock"]


var outcome;
var wins=0;
var losses=0;
var ties=0;
var random;
var randomAns;
// Create our Express-powered HTTP server
// and have it listen on port 3000



//http://stackoverflow.com/questions/1527803/generating-random-numbers-in-javascript-in-a-specific-range
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



// set up our routes
// for user login
router.post("/rock", function (req, res) {

   random = getRandomInt(0,4);       
        randomAns =   weapon[random];
        switch(randomAns){
                case "rock":
                outcome="tie";
                ties++;
                break;
                case "paper":
                outcome="lose";
                losses++;
                break;
                case "scissors":
                outcome="win";
                wins++;
                break;
                case "lizard":
                outcome="win";
                wins++;
                break;
                case "spock":
                outcome="lose";
                losses++;
                break;
        }
     res.json({outcome:outcome, wins:wins,losses:losses,ties:ties});
    });

router.post("/paper",function(req,res){

random = getRandomInt(0,4);       
        randomAns =   weapon[random];
        switch(randomAns){
                case "rock":
                outcome="win";
                wins++;
                break;
                case "paper":
                outcome="tie";
                ties++;
                break;
                case "scissors":
                outcome="lose";
                losses++;
                break;
                case "lizard":
                outcome="lose";
                losses++;
                break;
                case "spock":
                outcome="win";
                wins++;
                break;
        }
        res.json({outcome:outcome, wins:wins,losses:losses,ties:ties});
});
    
router.post("/scissors",function(req,res){
    
     random = getRandomInt(0,4);       
        randomAns =   weapon[random];
        switch(randomAns){
                case "rock":
                outcome="lose";
                losses++;
                break;
                case "paper":
                outcome="win";
                wins++;
                break;
                case "scissors":
                outcome="tie";
                ties++;
                break;
                case "lizard":
                outcome="win";
                wins++;
                break;
                case "spock":
                outcome="lose";
                losses++;
                break;
        }
         res.json({outcome:outcome, wins:wins,losses:losses,ties:ties});
});

router.post('/lizard',function(req,res){
    random = getRandomInt(0,4);       
        randomAns =   weapon[random];
        switch(randomAns){
                case "rock":
                outcome="lose";
                losses++;
                break;
                case "paper":
                outcome="win";
                wins++;
                break;
                case "scissors":
                outcome="lose";
                losses++;
                break;
                case "lizard":
                outcome="tie";
                ties++;
                break;
                case "spock":
                outcome="win";
                wins++;
                break;
        }
        res.json({outcome:outcome, wins:wins,losses:losses,ties:ties});
});

router.post('/spock',function(req,res){
     random = getRandomInt(0,4);       
        randomAns =   weapon[random];
        switch(randomAns){
                case "rock":
                outcome="win";
                wins++;
                break;
                case "paper":
                outcome="lose";
                losses++;
                break;
                case "scissors":
                outcome="win";
                wins++;
                break;
                case "lizard":
                outcome="lose";
                losses++;
                break;
                case "spock":
                outcome="tie"
                ties++;
                break;
        }
         res.json({outcome:outcome, wins:wins,losses:losses,ties:ties});
});

module.exports = router;
