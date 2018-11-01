$(document).ready(function() { 
    var magicNumber;
    var totalScore = 0;
    var wins = 0;
    var losses = 0;
    var crystal1Val;
    var crystal2Val;
    var crystal3Val;
    var crystal4Val;
    
    function newNumbers() {
        magicNumber = Math.floor(Math.random() * 110) + 20;
        crystal1Val = Math.ceil(Math.random() * 12);
        crystal2Val = Math.ceil(Math.random() * 12);
        crystal3Val = Math.ceil(Math.random() * 12);
        crystal4Val = Math.ceil(Math.random() * 12);
    }

    function newGame() {
        newNumbers();
        totalScore = 0;
        $("#magicNumber").text(magicNumber);
        $("#totalScore").text(totalScore);
        $("#crystal1").attr("data-crystalvalue", crystal1Val);
        $("#crystal2").attr("data-crystalvalue", crystal2Val);
        $("#crystal3").attr("data-crystalvalue", crystal3Val);
        $("#crystal4").attr("data-crystalvalue", crystal4Val);
        $("#wins").text(wins);
        $("#losses").text(losses);
        $("#winOrLose").text("");
    }

    function youWin() {
        $("#winOrLose").text("YOU WIN!");
        wins++;
        $("#wins").text(wins);
    }

    function youLose() {
        $("#winOrLose").text("YOU'RE A LOSER");
        losses++;
        $("#losses").text(losses);
    }

    newGame();

    $(".crystalimg").hover(function() {
        $(this).css({opacity: 0.3});
    },
    function() {
        $(this).css({opacity: 1});
    });

    // Function adds the crystal values
    $(".crystalimg").on("click", function() {
        if (totalScore === magicNumber) {
            return;
        }

        var crystalValue = $(this).attr("data-crystalvalue");
        crystalValue = parseInt(crystalValue);
        totalScore += crystalValue;
        $("#totalScore").text(totalScore);

        if (totalScore === magicNumber) {
            youWin();
        } else if (totalScore > magicNumber) {
            youLose();
        }
    });

    $(".btn").on("click", function() {
        newGame();
    });
});