const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Check if the entry target has one of the specified classes
      if (entry.target.classList.contains('hiddenn') || entry.target.classList.contains('hiddenn1')) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.add('show0');
      }
    } else {
      // Remove classes when not intersecting
      entry.target.classList.remove('show', 'show0');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hiddenn, .hiddenn1, .hiddenn0');
hiddenElements.forEach((el) => observer.observe(el));
