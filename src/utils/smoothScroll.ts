export function smoothScrollTo(elementId: string) {
  const element = document.getElementById(elementId);
  if (!element) return;

  element.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}

export function smoothScrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

// Hook to handle smooth scroll on navigation
export function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      if (href === '#') {
        smoothScrollToTop();
      } else {
        smoothScrollTo(href!.substring(1));
      }
    });
  });
}
