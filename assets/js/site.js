document.documentElement.classList.add("js");

const preloader = document.querySelector("[data-preloader]");
const enter = document.querySelector("[data-enter]");
if (preloader && enter) {
  const dismiss = () => {
    preloader.classList.add("is-dismissed");
    document.body.classList.remove("is-locked");
    try {
      sessionStorage.setItem("daas-entered", "true");
    } catch {}
    window.setTimeout(() => preloader.remove(), 700);
  };
  let alreadyEntered = false;
  try {
    alreadyEntered = sessionStorage.getItem("daas-entered") === "true";
  } catch {}
  if (alreadyEntered) {
    preloader.remove();
  } else {
    document.body.classList.add("is-locked");
    enter.addEventListener("click", dismiss);
    window.setTimeout(dismiss, 4500);
  }
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
