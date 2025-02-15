


/*---------------------Toggle button-----------------*/
const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const hamburguer = document.getElementById("hamburguer");

hamburguer.addEventListener("click", () => {
  navMenu.classList.toggle("left-[0]")
  hamburguer.classList.toggle("ri-close-large-line")
});

navLink.forEach(link => {
  link.addEventListener("click", () =>{
    navMenu.classList.toggle("left-[0]")
    hamburguer.classList.toggle("ri-close-large-line")
  })
})


/* ----------------------Wiper---------------- */
const swiper = new Swiper('.swiper', {
  // Optional parameters
  speed: 400,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false 
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  grapCursor: true,
  breakpoints: {
    640: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});

/* ----------------------Scroll Up---------------- */

const scrollUp = () => {
  const scrollUpBtn = document.getElementById("scroll-up");

  // Mostrar o botão quando o scroll for maior que 2000px
  if (window.scrollY >= 2000) {
    scrollUpBtn.classList.remove("hidden"); // Remove a classe que esconde o botão
    scrollUpBtn.classList.add("bottom-4"); // Posiciona o botão
  } else {
    scrollUpBtn.classList.add("hidden"); // Esconde o botão
    scrollUpBtn.classList.remove("bottom-4"); // Remove a posição (opcional)
  }
};

window.addEventListener("scroll", scrollUp);



/*-------velocidade da rolagem---------*/
const scrollUpBtn = document.getElementById("scroll-up");

scrollUpBtn.addEventListener("click", (e) => {
  e.preventDefault(); // Evita o comportamento padrão do link
  window.scrollTo({
    top: 0, // Rola até o topo da página
    behavior: "auto" // Scroll suave
  });
});

/* ---------------------- Change Background Header ---------------- */

const scrollHeader = () => {
  const header = document.getElementById("navbar");

  // Adiciona borda e sombra ao header quando o scroll for maior que 50px
  if (window.scrollY >= 50) {
    header.classList.add("border-b", "border-yellow-500", "shadow-lg"); // Adiciona borda e sombra
    header.classList.remove("opacity-0", "-translate-y-full"); // Torna o header visível
  } else {
    header.classList.remove("border-b", "border-yellow-500", "shadow-lg"); // Remove borda e sombra
    header.classList.add("opacity-0", "-translate-y-full"); // Esconde o header
  }
};

window.addEventListener("scroll", scrollHeader);

/* ---------------------- Scroll section active link ---------------- */
const activeLink = () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link")

  let current = "home"
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if(window.scrollY >= sectionTop - 60 ) {
      current = section.getAttribute("id")
    }
  })
  navLinks.forEach(item => {
    item.classList.remove("active")
    if(item.href.includes(current)) {
      item.classList.add("active")

    }
  })
}

window.addEventListener("scroll", activeLink)


/* ---------------------- Scroll Reveal Animation ---------------- */
// Configuração para o texto
ScrollReveal().reveal('.home__data, .about__top, .popular__top, .review__top, .review__swiper, .footer__icon, .footer__content, .copy__right', {
  origin: "top",
  distance: "60px",
  duration: 1000, // Duração menor para o texto
  delay: 200,     // Delay menor para o texto
  reset: true,    // Reseta a animação ao sair da tela
  easing: 'ease-in-out' // Adiciona uma curva de easing suave
});

// Configuração para a imagem
ScrollReveal().reveal('.home__image', {
  origin: "top",
  distance: "60px",
  duration: 1500, // Duração maior para a imagem
  delay: 800,     // Delay maior para a imagem
  scale: 0.4,     // Efeito de escala (começa menor e aumenta)
  reset: true,    // Reseta a animação ao sair da tela
  easing: 'ease-in-out' // Adiciona uma curva de easing suave
});

ScrollReveal().reveal('.service__caard, .popular__card', {
  origin: "top",
  distance: "60px",
  duration: 1000, // Duração menor para o texto
  delay: 200,     // Delay menor para o texto
  reset: true,    // Reseta a animação ao sair da tela
  easing: 'ease-in-out', // Adiciona uma curva de easing suave
  interval: 100
});

ScrollReveal().reveal('.about__leaf', {
  origin: "right",
  distance: "60px",
  duration: 1000, // Duração menor para o texto
  delay: 1000,     // Delay menor para o texto
  reset: true,    // Reseta a animação ao sair da tela
  easing: 'ease-in-out', // Adiciona uma curva de easing suave
  interval: 100
});

ScrollReveal().reveal('.about__item__1-content, .about__item__2-img', {
  origin: "right",
  distance: "60px",
  duration: 1000, // Duração menor para o texto
  delay: 1000,     // Delay menor para o texto
  reset: true,    // Reseta a animação ao sair da tela
  easing: 'ease-in-out', // Adiciona uma curva de easing suave
  interval: 100
});

ScrollReveal().reveal('.about__item__2-content, .about__item__1-img', {
  origin: "left",
  distance: "60px",
  duration: 1000, // Duração menor para o texto
  delay: 1000,     // Delay menor para o texto
  reset: true,    // Reseta a animação ao sair da tela
  easing: 'ease-in-out', // Adiciona uma curva de easing suave
  interval: 100
});

ScrollReveal().reveal('.review__leaf, .footer__floral', {
  origin: "left",
  distance: "60px",
  duration: 1000, // Duração menor para o texto
  delay: 1000,     // Delay menor para o texto
  reset: true,    // Reseta a animação ao sair da tela
  easing: 'ease-in-out', // Adiciona uma curva de easing suave
  interval: 100
});