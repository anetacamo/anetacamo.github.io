function displayKeywords() {
  $('.keyword-container').css('height','auto');
  $('.keyword-container').css('padding','4px 0 8px 0');
};

$('.keyword-search').mouseleave(function(){
  $('.keyword-container').css('height','0');
  $('.keyword-container').css('padding','0');
});

function myFunction() {
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
