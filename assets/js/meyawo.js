
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



// Bootstrap-like validation (optional)
(function () {
  'use strict'
  var forms = document.querySelectorAll('.needs-validation')

  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }
      form.classList.add('was-validated')
    }, false)
  })
})()

// Show success message
function showprimaryMessage() {
  const msg = document.getElementById('primary-message');
  msg.style.display = 'block';
  setTimeout(() => {
    msg.style.display = 'none';
  }, 4000);
  return true;
}



$(document).ready(function () {
  const swiper = new Swiper('.service-swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      576: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      }
    }
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".portfolio-swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      576: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  });
});
const filterLinks = document.querySelectorAll('.filter-link');
const projects = document.querySelectorAll('.project-card');

filterLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    // Remove active class from all links
    filterLinks.forEach(l => l.classList.remove('active'));

    // Add active class to clicked link
    link.classList.add('active');

    const filter = link.getAttribute('data-filter');

    projects.forEach(project => {
      if (filter === 'all' || project.getAttribute('data-category') === filter) {
        project.style.display = 'block';
      } else {
        project.style.display = 'none';
      }
    });
  });
});

  // جافاسكريبت لتفعيل الفلترة
  document.querySelectorAll('#filter-links .filter-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      // إزالة active من كل لينك
      document.querySelectorAll('#filter-links .filter-link').forEach(l => {
        l.classList.remove('active');
        l.classList.add('text-muted');
      });

      // تفعيل اللينك المضغوط
      e.target.classList.add('active');
      e.target.classList.remove('text-muted');

      const filter = e.target.getAttribute('data-filter');

      document.querySelectorAll('#projects-container .project-card').forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });


