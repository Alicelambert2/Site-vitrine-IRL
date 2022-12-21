// Get the modal
let modal = document.getElementById("reduit");
// Get the button that opens the modal
let bouton = document.getElementById("boutonmodal");

// Get the <span> element that closes the modal
let span = document.querySelector(".boutonfermer");
// When the user clicks on the button, open the modal
bouton.onclick = function() {
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
}
});  



//modale 2
let modal2 = document.getElementById("gratuit");
let bouton2 = document.getElementById("boutonmodal2");
let span2 = document.querySelector(".fermer2");
bouton2.onclick = function() {
  modal2.style.display = "block";
}
span2.onclick = function() {
  modal2.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
} 

// pour ouvrir :
// boutonmodal2.addEventListener('click', function(){
// modale.style.display = "block";
// }
// pour fermer :
// fermer2.addEventListener('click', function(){
// modale.style.display = "none"
// }
