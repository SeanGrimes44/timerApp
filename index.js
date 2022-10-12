var minutes = 0;
var seconds = 10;
//$(".timer").hide();
//$(".cancel").hide();

$(".btn").on("click", function () {
    // Start timer
    $(".timer").show();
    $(".cancel").show();
    var minuteVal = $("#menter").val();
    minutes = Math.floor(minuteVal);

    var secondVal = $("#senter").val();
    seconds = Math.floor(secondVal);
    // add zero to front of seconds if seconds < 10.
    if (seconds < 10) {
        $(".timer").html(minutes + ":0" + seconds);
    }
    else {
        $(".timer").html(minutes + ":" + seconds);
    }

    $(".top").hide();
    $(".info").hide();
    myInterval = setInterval(decrement, 1000);
    
})

// Cancel Timer.
$(".end").on("click", function () {
    $(".top").show();
    $(".top").html("Enter a time.");
    $(".info").show();
    $(".timer").hide();
    $(".cancel").hide();
    clearInterval(myInterval);
})

function decrement () {
       
    // if minutes is 0, end
    if (minutes === 0 && seconds === 0) {
        
        var sound = new Audio("alarm.wav");
        sound.play();
        $(".top").show();
        $(".top").html("Time is up! <br> Enter a time.");
        $(".info").show();
        $(".timer").hide();
        $(".cancel").hide();
        clearInterval(myInterval);
    }
    // else if seconds is 0, set to 59 and minutes-1
    else if (seconds === 0) {
        seconds = 59;
        minutes--;
    }
    // else subtract 1 second.
    else {
        seconds--;
    }

    var m = String(minutes);
    var s = String(seconds);

    if (seconds < 10) {
        s = "0" + s;
    }

    $(".timer").html(m + ":" + s);
}