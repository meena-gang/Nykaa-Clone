let isLoggedIn = localStorage.getItem('isLoggedIn') || "false";
if(isLoggedIn != "true"){
    window.location.href = "../index.html";
}

let logoutBtn = document.getElementById("signOut");

logoutBtn.addEventListener("click", () => {
  localStorage.setItem("isLoggedIn", 'false')
});

let cartAmount = JSON.parse(localStorage.getItem('cart'));

if(cartAmount){
  let badgeData = document.getElementById("badge");
  badgeData.textContent = cartAmount.length;
  badgeData.style.fontSize = '18px';
}
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}