$(document).ready(function () {
  function makeTimer() {
    var endTime = new Date("20 May 2023 9:00:00 GMT-04:00");
    endTime = Date.parse(endTime) / 1000;

    var now = new Date();
    now = Date.parse(now) / 1000;

    var timeLeft = endTime - now;

    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - days * 86400) / 3600);
    var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    var seconds = Math.floor(
      timeLeft - days * 86400 - hours * 3600 - minutes * 60
    );

    if (hours < "10") {
      hours = "0" + hours;
    }
    if (minutes < "10") {
      minutes = "0" + minutes;
    }
    if (seconds < "10") {
      seconds = "0" + seconds;
    }

    $("#days").html(days);
    $("#hours").html(hours);
    $("#minutes").html(minutes);
    $("#seconds").html(seconds);

    $(".countdown").show();
  }

  // start animating scrolling text
  $("#scrolling-text").jConveyorTicker({
    anim_duration: 100,
  });

  // start countdown
  setInterval(function () {
    makeTimer();
  }, 1000);
});
