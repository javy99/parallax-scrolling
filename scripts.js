$(document).ready(function () {
  $(window).scroll(function () {
    $(".parallax-layer").each(function () {
      var speed = $(this).data("speed");
      var yPos = -($(window).scrollTop() * speed);
      $(this).css("transform", "translate3d(0px, " + yPos + "px, 0px)");
    });
  });
});
