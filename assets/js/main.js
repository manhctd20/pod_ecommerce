// assets/js/main.js

// Load header & footer
fetch("components/header.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;
  });

fetch("components/footer.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;
  });

// Optional: Load product cards dynamically (demo)
fetch("components/product-card.html")
  .then(res => res.text())
  .then(card => {
    const list = document.getElementById("product-list");
    list.innerHTML = card + card + card + card;
  });
