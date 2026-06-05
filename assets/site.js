(function () {
  var nav = document.getElementById('nav');
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');

  if (nav) {
    window.addEventListener('scroll', function () {
      nav.classList.toggle('scrolled', window.scrollY > 24);
    }, { passive: true });
  }

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      toggle.classList.toggle('open');
      links.classList.toggle('open');
    });

    // Close mobile menu only when clicking actual page navigation links
    // (not the Services toggle or dropdown sub-items on mobile)
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        // Skip if this link is inside the dropdown (toggle or sub-items)
        if (a.closest('.nav-dropdown')) return;
        toggle.classList.remove('open');
        links.classList.remove('open');
      });
    });

    // Close menu when a dropdown sub-item is clicked (it navigates to a page)
    links.querySelectorAll('.nav-dropdown-menu a').forEach(function (a) {
      a.addEventListener('click', function () {
        toggle.classList.remove('open');
        links.classList.remove('open');
      });
    });
  }

  // Mobile Services dropdown toggle
  var dropdown = document.querySelector('.nav-dropdown');
  if (dropdown) {
    var dropLink = dropdown.querySelector(':scope > a');
    dropLink.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      dropdown.classList.toggle('open');
    });
  }

  document.querySelectorAll('.faq-q').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.faq-item');
      var a = item.querySelector('.faq-a');
      var open = item.classList.toggle('open');
      a.style.maxHeight = open ? a.scrollHeight + 'px' : 0;
    });
  });
  var first = document.querySelector('.faq-item.open .faq-a');
  if (first) first.style.maxHeight = first.scrollHeight + 'px';

  var filters = document.querySelectorAll('.blog-filter');
  var cards = document.querySelectorAll('#blogGrid .blog-card');
  var featured = document.querySelector('.featured-post');
  if (filters.length) {
    filters.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filters.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var f = btn.getAttribute('data-filter');
        cards.forEach(function (c) {
          c.style.display = (f === 'all' || c.getAttribute('data-cat') === f) ? '' : 'none';
        });
        if (featured) featured.style.display = (f === 'all' || featured.getAttribute('data-cat') === f) ? '' : 'none';
      });
    });
  }

  // Testimonial slider — simple fade show/hide
  document.querySelectorAll('.testi-slider').forEach(function (slider) {
    var slides = slider.querySelectorAll('.testi-slide');
    var dotsWrap = slider.querySelector('.testi-dots');
    var prev = slider.querySelector('.testi-prev');
    var next = slider.querySelector('.testi-next');
    var current = 0;
    var total = slides.length;

    // Show first slide
    if (slides[0]) slides[0].classList.add('active');

    // Create dots
    slides.forEach(function (_, i) {
      var dot = document.createElement('button');
      dot.className = 'testi-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', 'Testimonial ' + (i + 1));
      dot.addEventListener('click', function () { goTo(i); });
      dotsWrap.appendChild(dot);
    });

    function goTo(i) {
      slides[current].classList.remove('active');
      current = i;
      slides[current].classList.add('active');
      var dots = dotsWrap.querySelectorAll('.testi-dot');
      dots.forEach(function (d, j) { d.classList.toggle('active', j === current); });
    }

    prev.addEventListener('click', function () { goTo((current - 1 + total) % total); });
    next.addEventListener('click', function () { goTo((current + 1) % total); });

    // Auto-advance every 8 seconds
    var auto = setInterval(function () { goTo((current + 1) % total); }, 8000);
    slider.addEventListener('mouseenter', function () { clearInterval(auto); });
    slider.addEventListener('mouseleave', function () {
      auto = setInterval(function () { goTo((current + 1) % total); }, 8000);
    });

    // Swipe support
    var startX = 0;
    slider.addEventListener('touchstart', function (e) { startX = e.touches[0].clientX; }, { passive: true });
    slider.addEventListener('touchend', function (e) {
      var diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) { diff > 0 ? goTo((current + 1) % total) : goTo((current - 1 + total) % total); }
    });
  });

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
})();
