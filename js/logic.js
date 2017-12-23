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
