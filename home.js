//comienzo animación h1
document.addEventListener("DOMContentLoaded", function() {
    const titulo = document.getElementById("titulo");
    titulo.style.animation = "fadeInAndRotate 2s ease-in-out";
  });
  //fin animación h1

//comienzo animación playmobil header
let dibu = document.getElementById("playmobil1");
        let vertical = 40;
        let animating = false;

        // Función para mostrar gradualmente la imagen
        function mostrarImagen() {
            let opacidadActual = 0;
            let startTimestamp = null;

            function step(timestamp) {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = timestamp - startTimestamp;
                opacidadActual = progress / 1000; // 1000 ms para alcanzar la opacidad 1

                if (opacidadActual >= 1) {
                    dibu.style.opacity = 1;
                    dibu.style.visibility = 'visible';
                    animating = true;
                    mover(timestamp);
                } else {
                    dibu.style.opacity = opacidadActual;
                    requestAnimationFrame(step);
                }
            }

            requestAnimationFrame(step);
        }

        // Iniciar la animación después de un tiempo para que la imagen se muestre gradualmente primero
        setTimeout(mostrarImagen, 500);

        function mover(timestamp) {
            if (!animating) return;

            if (vertical <= 240) {
                vertical += 1; // Incremento más pequeño para movimiento más suave
            }

            dibu.style.top = vertical + "px";

            // Detener la animación al llegar al punto más bajo (top=240)
            if (vertical < 240) {
                requestAnimationFrame((timestamp) => mover(timestamp));
            }
        }
//fin animación playmobil header

//Funcionalidad de la barra de búsqueda

function buscarTexto(){
    let searchText = document.getElementById("searchText").value;
    let found = window.find(searchText, false, false, true, false, true, false);

    if (!found){
        alert("Texto no encontrado en la página")
    }
   }



//comienzo animación imagen "mujer" 
function animateOnScroll() {
    let mujerImg = document.querySelector(".acerca #mujer");
    let acercaSection = document.querySelector(".acerca");
    let mujerPosition = mujerImg.getBoundingClientRect().top - acercaSection.getBoundingClientRect().top;
    let screenHeight = window.innerHeight || document.documentElement.clientHeight;

    // Si la parte superior de la sección "acerca" está dentro del área visible, animar la imagen
    if (mujerPosition < screenHeight) {
      mujerImg.classList.add("appear-from-left");
      window.removeEventListener("scroll", animateOnScroll); // Quitamos el listener para que no se repita la animación
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", animateOnScroll);
  });

//FAQs -Función para mostrar u ocultar la respuesta al hacer clic en la pregunta
        function mostrarRespuesta(preguntaId) {
            const respuesta = document.getElementById(`respuesta${preguntaId}`);
            const iconoFlecha = document.querySelector(`#respuesta${preguntaId} ~ .icono-flecha`);
            if (respuesta.style.display === "none") {
                respuesta.style.display = "block";
                iconoFlecha.textContent = "▲"; // Cambiar a la flecha hacia arriba
            } else {
                respuesta.style.display = "none";
                iconoFlecha.textContent = "▼"; // Cambiar a la flecha hacia abajo
            }
        }





