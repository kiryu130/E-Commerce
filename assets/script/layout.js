// document.addEventListener("DOMContentLoaded", function() {
//   fetch('${basePath}pages/nav.html')
//     .then(response => response.text())
//     .then(data => {
//       document.getElementById('navbar').innerHTML = data;
//     });
// });

// document.addEventListener("DOMContentLoaded", function() {
//   fetch('${basePath}pages/footer.html')
//     .then(response => response.text())
//     .then(data => {
//       document.getElementById('footer').innerHTML = data;
//     });
// });

// document.addEventListener("DOMContentLoaded", function() {
//   fetch('${basePath}pages/header.html')
//     .then(response => response.text())
//     .then(data => {
//       document.getElementById('header').innerHTML = data;
//     });
// });

const basePath = window.location.pathname.includes("/pages/") ? "../" : "";

document.addEventListener("DOMContentLoaded", function () {
  fetch(`${basePath}pages/nav.html`)
    .then((response) => response.text())
    .then((data) => {
      // Adjust CSS paths
      data = data.replace(/href="assets\/css/g, `href="${basePath}assets/css`);
      document.getElementById("navbar").innerHTML = data;
    });

  fetch(`${basePath}pages/footer.html`)
    .then((response) => response.text())
    .then((data) => {
      // Adjust CSS paths
      data = data.replace(/href="assets\/css/g, `href="${basePath}assets/css`);
      document.getElementById("footer").innerHTML = data;
    });

  fetch(`${basePath}pages/header.html`)
    .then((response) => response.text())
    .then((data) => {
      // Adjust CSS paths
      data = data.replace(/href="assets\/css/g, `href="${basePath}assets/css`);
      document.getElementById("header").innerHTML = data;
    });
});

