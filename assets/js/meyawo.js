/*!
=========================================================
* Meyawo Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function () {
  $(".navbar .nav-link").on('click', function (event) {

    if (this.hash !== "") {

      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 700, function () {
        window.location.hash = hash;
      });
    }
  });
});

// navbar toggle
$('#nav-toggle').click(function () {
  $(this).toggleClass('is-active')
  $('ul.nav').toggleClass('show');
});

function showSuccessMessage() {
  // تأخير لعرض رسالة النجاح بعد الإرسال
  setTimeout(() => {
    document.getElementById('success-message').style.display = 'block';
  }, 500);
  return true;
};





document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".animate-on-scroll");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target;
        const animation = element.dataset.animation;
        const delay = element.dataset.delay;

        element.classList.add("animate__animated", animation);
        element.style.setProperty("--animate-delay", delay);
        observer.unobserve(element);
      }
    });
  }, { threshold: 0.3 });

  sections.forEach((section) => {
    observer.observe(section);
  });
});

