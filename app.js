(function () {
  if (!window.gsap) return;

  gsap.from('.hero h1', {
    y: 24,
    opacity: 0,
    duration: 0.9,
    ease: 'power3.out'
  });

  gsap.from('.hero-sub', {
    y: 20,
    opacity: 0,
    duration: 0.9,
    delay: 0.1,
    ease: 'power3.out'
  });

  gsap.from('.hero-actions .btn', {
    y: 16,
    opacity: 0,
    duration: 0.8,
    delay: 0.2,
    stagger: 0.1,
    ease: 'power3.out'
  });
})();