var winHeight = $(window).height(),
  docHeight = $(document).height(),
  progressBar = $("progress"),
  max,
  value,
  /* Set the max scrollable area */
  max = docHeight - winHeight;
progressBar.attr("max", max);

$(document).on("scroll", function () {
  value = $(window).scrollTop();
  progressBar.attr("value", value);
  var chapters = $(".kapitola");
  chapters.each(function () {
    var $this = $(this),
      offset = $this.offset().top - winHeight,
      id = $this.attr("id");
    if (offset < value && offset + winHeight > value) {
      var classname = "." + id;
      $(classname).addClass("animation");
      setInterval(function () {
        $(classname).removeClass("animation");
      }, 3000);

      console.log(classname);
      $(".page-name.visible").removeClass("visible");
      $(".page-name" + classname).addClass("visible");
    }
  });
});
