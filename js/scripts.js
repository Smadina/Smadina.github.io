
function myFunction() {
  var x = document.getElementById("myNavtoggle");
  if (x.className === "navtoggle") {
    x.className += "responsive";
  } else {
    x.className = "navtoggle";
  }
}

$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1600, function(){
        window.location.hash = hash;
      });
    }
  });
});
