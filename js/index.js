window.addEventListener("load", inicio);

function inicio(){
    cargarImagen();
    aparecerImagen();
    //botones banner
    document.getElementById("banner-btnPago").addEventListener("click", goToPago);
    document.getElementById("banner-btnAgenda").addEventListener("click", goToAgenda);
    document.getElementById("banner-btnBlog").addEventListener("click", goToBlog);
}

function cargarImagen(){
    var photo = document.getElementById("banner-photo");
    photo.classList.add('visible');
}

function aparecerImagen(){
  var photo = document.getElementById("banner-photo");
    if(photo.classList.value.includes("visible")){
      photo.style.display = "flex"
    }
}
/*
const showers = document.querySelectorAll('.show-on-scroll');

const appearOptions = {}

const appearOnScroll = new IntersectionObserver( function(entries, appearOnScroll){
  entries.forEach(entry => {
    if (!entry.isIntersecting);
  }
}, appearOptions);*/

function goToPago(){
  window.open("https://spf.sistarbanc.com.uy/spfdebitos/seleccionServicio.jsp", '_blank').focus(); 
}
function goToAgenda(){
  window.open("http://florida.gub.uy:8081/agenda_web/servlet/agendaweb", '_blank').focus();
}
function goToBlog(){
  window.open("https://comunicacionesidf4.wordpress.com", '_blank').focus();  
}