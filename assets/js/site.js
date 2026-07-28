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
const gridStatus = document.querySelector("[data-grid-status]");
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    const filter = button.dataset.filter;
    thesisCards.forEach((card) => {
      card.hidden = filter !== "all" && card.dataset.part !== filter;
    });
    const visibleCount = [...thesisCards].filter((card) => !card.hidden).length;
    if (gridStatus) {
      gridStatus.textContent =
        filter === "all"
          ? `SHOWING ALL ${visibleCount} THESES`
          : `SHOWING ${visibleCount} THESES`;
    }
  });
});

const collection = document.querySelector("[data-collection]");
const viewButtons = document.querySelectorAll("[data-view]");
viewButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const listView = button.dataset.view === "list";
    collection?.classList.toggle("is-list-view", listView);
    viewButtons.forEach((item) => {
      const selected = item === button;
      item.classList.toggle("is-active", selected);
      item.setAttribute("aria-pressed", String(selected));
    });
  });
});
