let accordions = document.querySelectorAll(".accordion");
let panels = document.querySelectorAll(".panel");

accordions.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    const panel = accordion.nextElementSibling;
    const isOpen = !panel.classList.contains("hidden");

    accordion.classList.toggle("after:rotate-180");
    accordion.classList.toggle("text-VeryDarkDesaturatedBlue");
    accordion.classList.toggle("font-semibold");

    panels.forEach((p) => {
      p.classList.add("hidden");
    });

    if (!isOpen) {
      panel.classList.remove("hidden");
    }
  });
});
