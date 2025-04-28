var allSquares = $(".square");
var currIdx;
var gameLevel;
var gameSquence;
startGame();

function startGame(){
    gameSquence = [];
    gameLevel = 1;
    currIdx = 0;
    $("body").on("keydown",(event)=>{
        $("body").off("keydown");
        startRound();
    });
}

function startRound(){
    $('.square').off('click');
    $("h1").text("Level " + gameLevel);
    gameSquence.push(Math.floor(Math.random() * 4));
    playAnimationForRound();
    startInputCheck();
}

function playAnimationForRound(){
    $(".square").eq(gameSquence[currIdx++]).fadeIn(100).fadeOut(100).fadeIn(100);
}

function startInputCheck(){
    var idx = 0;
    $(document).ready(function() {
        $('.square').each(function(squareNum) {
            $(this).on('click', function() {
                if(gameSquence[idx++] !== squareNum){
                    displayGameFailed();
                    return;
                }
                if(idx === gameSquence.length){
                    idx = 0;
                    gameLevel++;
                    startRound();
                }
            });
        });
    });
}

function displayGameFailed(){
    $('.square').off('click');
    $("h1").text("Press a key to restart!");
    startGame();
}