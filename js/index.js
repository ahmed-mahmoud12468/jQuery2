// Singers
$(".singers p:first").css("display", "block");

$(".singers h2").click(function () {
  $(this).next().slideToggle(500);
  $(".singers p").not($(this).next()).slideUp(500);
});

// Countdown
let countdownDate = new Date("Dec 31, 2024 23:59:59").getTime();
let counter = setInterval(() => {
  let dateNow = new Date().getTime();
  let dateDifference = countdownDate - dateNow;

  let days = Math.floor(dateDifference / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (dateDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((dateDifference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDifference % (1000 * 60)) / 1000);

  document.querySelector(".days .inner span").innerHTML =
    days < 10 ? `0${days} D` : days + " D";
  document.querySelector(".hours .inner span").innerHTML =
    hours < 10 ? `0${hours} H` : hours + " H";
  document.querySelector(".minuites .inner span").innerHTML =
    minutes < 10 ? `0${minutes} M` : minutes + " M";
  document.querySelector(".seconds .inner span").innerHTML =
    seconds < 10 ? `0${seconds} S` : seconds + " S";

  if (dateDifference < 0) {
    clearInterval(counter);
  }
}, 1000);

document.querySelector("textarea").addEventListener("input", function () {
  console.log(this.value.length);
  if (+this.value.length >= 100) {
    document.querySelector(
      "#charactersNumber"
    ).innerHTML = 'your available character finished';
    return;

  } else {
    document.querySelector("#charactersNumber").innerHTML =
      100 - this.value.length;
  }


});



// aside


$('.xmark').on('click',function(){
    $('aside').animate({left : '-210px' },1000)
    $('.open').animate({left : '10px' },1000)
})


$('.open').on('click',function(){
    $('aside').animate({left : '0' },1000)
   $('.open').animate({left : '210px' },1000)
})
