function menuOpen() {
  var x = document.getElementById("sidemenu");
  x.style.left = 0;
}
function menuClose() {
  var x = document.getElementById("sidemenu");
  x.style.left = "-2000px";
}

$(".menu-box").bind(
  "webkitAnimationEnd mozAnimationEnd animationEnd",
  function () {
    $(this).removeClass("animated");
  }
);

$(".menu-box").hover(function () {
  $(this).addClass("animated");
});
