$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

  // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
          scrollTop: $(hash).offset().top - 100
        }, 800, function(){   
        
      });
    } 
  });

  $(window).scroll(function(){                          
    if ($(this).scrollTop() > 55) {
        $('.main-header').fadeOut(500);
    } else {
        $('.main-header').fadeIn(500);
    }
    // Fade in navigation after scrolling stops
    clearTimeout($.data(this, 'scrollTimer'));
    $.data(this, 'scrollTimer', setTimeout(function() {      
      $('.main-header').fadeIn(500);     
    }, 100));
  });
  
});



var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("project-slides");
  var y = document.getElementsByClassName("project-descriptions");
  var z = document.getElementsByClassName("project-titles"); 
  var thumbs = document.getElementsByClassName("project-thumbs");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
     y[i].style.display = "none";
     z[i].style.display = "none";
  }
  for (i = 0; i < thumbs.length; i++) {
     thumbs[i].className = thumbs[i].className.replace(" full-opacity", " half-opacity");
  }
  x[slideIndex-1].style.display = "block";
  y[slideIndex-1].style.display = "block";
  z[slideIndex-1].style.display = "block";
  thumbs[slideIndex-1].className += " full-opacity";
}
