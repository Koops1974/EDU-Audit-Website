document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("open");
      });
    });
  }

  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      fetch("https://formspree.io/f/xqpapylz", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      }).then(function (res) {
        if (res.ok) {
          form.reset();
          form.querySelector(".form-success").style.display = "block";
        } else {
          alert("Something went wrong — please email hello@eduaudit.co.uk instead.");
        }
      }).catch(function () {
        alert("Network error — please email hello@eduaudit.co.uk instead.");
      });
    });
  }
});