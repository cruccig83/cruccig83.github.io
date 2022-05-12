window.addEventListener("load", inicio);

const accordion = document.getElementsByClassName('label');
function inicio(){
  alert("fabricio")
  document.getElementById("contentBx").addEventListener("click", alert("sexto"))
  for (i = 0; i<accordion.length; i++){
    accordion[i].addEventListener('click', function(){
      alert("mango");
      this.classList.toggle('active');
    });
  }
}