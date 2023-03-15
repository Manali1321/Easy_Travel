var formHandle = document.forms.form;
var province_selection = formHandle.province;
formHandle.onsubmit = submitForm;
var name_of_place = document.getElementById('name_of_place');
var selectedCity = document.getElementById('city');
var selectedProvince = document.getElementById('province');
var result_filter = document.getElementById('hide');
function submitForm() {
  alert('submit');
}

















// onload slideshow
// reference from https://www.w3schools.com/howto/howto_js_slideshow.asp

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 3000);
}
