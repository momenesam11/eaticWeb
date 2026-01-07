(function(){
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function animateElement(el){
    if(prefersReduced){
      el.classList.add('in-view');
      return;
    }
    const delay = el.getAttribute('data-delay');
    if(delay){
      // small safe parsing + apply
      el.style.transitionDelay = delay;
    }
    el.classList.add('in-view');
  }

  function initScrollAnimations(options = {}){
    const autoSelectors = options.autoSelectors || ['.item', '.card', '.box', '.pri', '.price-card', '.most-saller', 'header', '.why-us', '.featrues .item', '.delivery', '.manger', '.con', '.content', '.numbers', '.items', '.item-icon', '.item-text'];

    // auto attach class to common components (non-destructive)
    autoSelectors.forEach(sel => {
      document.querySelectorAll(sel).forEach(el => {
        if(!el.classList.contains('animate-on-scroll')){
          el.classList.add('animate-on-scroll','auto-animated');
        }
      });
    });

    const targets = document.querySelectorAll('.animate-on-scroll');
    if(!targets.length) return;

    if(prefersReduced){
      targets.forEach(animateElement);
      return;
    }

    const obs = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          animateElement(entry.target);
          observer.unobserve(entry.target); // one-time animation -> better perf
        }
      });
    }, { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.08 });

    targets.forEach(t => obs.observe(t));

    // expose for debugging or dynamic usage
    window._scrollAnimationsObserver = obs;
  }

  // expose initializer
  window.initScrollAnimations = initScrollAnimations;

  // auto init on DOM ready
  document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
  });
})();
