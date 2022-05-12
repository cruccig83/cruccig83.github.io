window.addEventListener("load", inicio);

function inicio(){
    window.addEventListener("scroll", aparecerEscudo);
    document.getElementById("nav-escudo").addEventListener("click", goToHome);
}

function aparecerEscudo(){
    var nav = document.querySelector("nav");
    if (nav.classList.toggle("sticky", window.scrollY > 100)){
      mostrar();
    }else{
      esconder();
    }
  }
  
  function mostrar(){
    document.getElementById("nav-escudo").style.display = "flex"
  }
  function esconder(){
    document.getElementById("nav-escudo").style.display = "none"
  }
  
  function goToHome(){
    document.location.href="/"
  }