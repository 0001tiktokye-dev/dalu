const revealItems = document.querySelectorAll(".feature, .hero-card, .contact-box, .section-heading, .about-layout");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.18 });

revealItems.forEach((item) => {
  item.classList.add("reveal");
  observer.observe(item);
});
