export function smoothScroll(this: HTMLAnchorElement, event: Event) {
  event.preventDefault();
  const href = this.getAttribute('href');
  
  if (href) {
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
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
      smoothScroll.call(this, e);
    });
  });
}
