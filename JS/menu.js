

document.addEventListener("DOMContentLoaded", function () {
    let btnContato = document.getElementById("btn-contato");
    btnContato.addEventListener("click", function (event) {
        event.preventDefault();

        let secaoContato = document.getElementById("secao-contato");
        let offsetTop = secaoContato.getBoundingClientRect().top + window.scrollY;

        scrollToSmoothly(offsetTop, 1000);
    });

    let btnMenu = document.getElementById("btn-menu");
    let menuMobile = document.getElementById("menu-mobile");

    btnMenu.addEventListener("click", function () {
        menuMobile.classList.toggle("abrir-menu");
    });

  let linkSobre = document.getElementById("link-sobre");
  let linkProjetos = document.getElementById("link-projetos");

  let secaoSobre = document.getElementById("secao-sobre");
  let secaoProjetos = document.getElementById("secao-projetos");

  linkSobre.addEventListener("click", function (event) {
      event.preventDefault();

      let offsetTop = secaoSobre.getBoundingClientRect().top + window.scrollY;

      scrollToSmoothly(offsetTop, 1000);
  });

  linkProjetos.addEventListener("click", function (event) {
      event.preventDefault();

      let offsetTop = secaoProjetos.getBoundingClientRect().top + window.scrollY;

      scrollToSmoothly(offsetTop, 1000);
  });

  function scrollToSmoothly(to, duration) {
      const element = document.scrollingElement || document.documentElement;
      const start = element.scrollTop;
      const change = to - start;
      const startDate = +new Date();

      const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

      const animateScroll = () => {
          const currentDate = +new Date();
          const elapsedTime = currentDate - startDate;

          if (elapsedTime < duration) {
              element.scrollTop = start + change * easeInOutQuad(elapsedTime / duration);
              requestAnimationFrame(animateScroll);
          } else {
              element.scrollTop = to;
          }
      };

      animateScroll();
  }
});

let btnMenu = document.getElementById("btn-menu");
console.log(btnMenu); // Verifique se o elemento está sendo selecionado corretamente

btnMenu.addEventListener("click", function () {
    console.log("Botão de menu clicado!"); // Verifique se o event listener está sendo chamado
    menuMobile.classList.toggle("abrir-menu");
});

