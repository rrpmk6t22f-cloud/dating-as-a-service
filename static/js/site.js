document.documentElement.classList.add("js");

const preloader = document.querySelector("[data-preloader]");
const enter = document.querySelector("[data-enter]");
if (preloader && enter) {
  document.body.classList.add("is-locked");
  const dismiss = () => {
    preloader.classList.add("is-dismissed");
    document.body.classList.remove("is-locked");
    window.setTimeout(() => preloader.remove(), 700);
  };
  enter.addEventListener("click", dismiss);
  window.setTimeout(dismiss, 4500);
}

const filterButtons = document.querySelectorAll("[data-filter]");
const thesisCards = document.querySelectorAll("[data-part]");
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    const filter = button.dataset.filter;
    thesisCards.forEach((card) => {
      card.hidden = filter !== "all" && card.dataset.part !== filter;
    });
  });
});

const reveals = document.querySelectorAll(
  ".editorial, .closing, .thesis-hero, .argument, .evidence, .finding",
);
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 },
  );
  reveals.forEach((element) => observer.observe(element));
} else {
  reveals.forEach((element) => element.classList.add("is-visible"));
}
