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
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        toggle.classList.remove('open');
        links.classList.remove('open');
      });
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

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
})();
