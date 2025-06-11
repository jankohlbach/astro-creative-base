let inviewTrigger: NodeList | null = null

const initInViewTrigger = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('inview')
        }
      })
    },
    {
      rootMargin: `0% 0% ${window.innerWidth < 768 ? '-10%' : '-20%'} 0%`,
    },
  )

  inviewTrigger?.forEach((elTrigger) => {
    observer.observe(elTrigger as HTMLElement)
  })
}

window.addEventListener('load', () => {
  inviewTrigger = document.querySelectorAll('[data-inview]');
  if (inviewTrigger) {
    initInViewTrigger();
  }
});
