// Load header & footer
fetch("components/header.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;
  });

fetch("components/certificate.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("certificate-section").innerHTML = data;
    new Swiper(".certificate-swiper", {
      loop: true,
      spaceBetween: 20,
      navigation: {
        nextEl: ".certificate-next",
        prevEl: ".certificate-prev",
      },
      breakpoints: {
        0: { slidesPerView: 2.5 },
        768: { slidesPerView: 2.5 },
      },
    });
  });

fetch("components/subscribe.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("subscribe-section").innerHTML = data;
  });

fetch("components/footer.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;
  });
