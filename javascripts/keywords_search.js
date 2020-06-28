function displayKeywords() {
  $('.keyword-container').css('height','auto');
};

$('.hash').click(function() {
//  $('.right-side-menu').toggle();
        $('.right-side-menu').css('top', 0);
})

$('html').click(function(e) {
  //if clicked element is not your element and parents aren't your div
  if (e.target.id != 'right-side-menu' && $(e.target).parents('#right-side-menu').length == 0) {
      $('.right-side-menu').css('top', -300);
  }
});



function letterChangeListener() {
  // Declare variables
  var input, filter, ul, li, a, i;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
    } else {
        li[i].style.display = "none";
    }
  }
}
