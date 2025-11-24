// 1. Bienvenida (solo la primera vez)
const bienvenida = document.getElementById("bienvenida");

// Revisar si ya hay nombre guardado
let nombre = localStorage.getItem("nombreUsuario");

if (!nombre) {
  nombre = prompt("¿Cuál es tu nombre?");
  if (nombre && nombre.trim() !== "") {
    localStorage.setItem("nombreUsuario", nombre);
  } else {
    nombre = "visitante";
  }
}

if (bienvenida) {
  bienvenida.innerText = `¡Bienvenido, ${nombre}! `;
}
// 2. Fecha actual
const fecha = document.getElementById("fecha");
if (fecha) {
  const hoy = new Date();
  fecha.innerText = `Fecha actual: ${hoy.toLocaleDateString()}`;
}

// 3. Sección interactiva color
const seccion = document.getElementById("color-section");
if (seccion) {
  seccion.addEventListener("mouseover", () => {
    seccion.style.backgroundColor = "#333";
  });
  seccion.addEventListener("mouseout", () => {
    seccion.style.backgroundColor = "black";
  });
}

// 4. Botón modo claro / oscuro
const botonModo = document.getElementById("modo-btn");
if (botonModo) {
  botonModo.addEventListener("click", () => {
    if (document.body.classList.contains("claro")) {
      document.body.classList.remove("claro");
      document.body.classList.add("oscuro");
      botonModo.textContent = " Modo claro";
    } else {
      document.body.classList.remove("oscuro");
      document.body.classList.add("claro");
      botonModo.textContent = " Modo oscuro";
    }
  });
}

// 5. Menú hamburguesa
const menuToggle = document.getElementById("menu-toggle");
const menuList = document.getElementById("menu-list");

if (menuToggle && menuList) {
  menuToggle.addEventListener("click", () => {
    menuList.classList.toggle("mostrar");
  });
}


// Detectar elementos con clase .fade-in y hacerlos aparecer al hacer scroll
const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // para que no vuelva a animar
    }
  });
}, { threshold: 0.2 });

fadeElements.forEach(el => observer.observe(el));
