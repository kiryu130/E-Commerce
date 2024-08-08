document.addEventListener("DOMContentLoaded", function() {
  fetch('pages/nav.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('navbar').innerHTML = data;
    });
});

document.addEventListener("DOMContentLoaded", function() {
  fetch('pages/footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer').innerHTML = data;
    });
});

document.addEventListener("DOMContentLoaded", function() {
  fetch('pages/header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header').innerHTML = data;
    });
});


// document.addEventListener("DOMContentLoaded", function() {
//   fetch('pages/nav.html')
//     .then(response => response.text())
//     .then(data => {
//       document.getElementById('navbar').innerHTML = data;
//     });

//   fetch('pages/footer.html')
//     .then(response => response.text())
//     .then(data => {
//       document.getElementById('footer').innerHTML = data;
//     });

//   fetch('pages/header.html')
//     .then(response => response.text())
//     .then(data => {
//       document.getElementById('header').innerHTML = data;
//     });
// });