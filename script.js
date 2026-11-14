const menuButton = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector(".primary-nav");
const situationSelect = document.querySelector("#situation");
const intakeForm = document.querySelector("#intake-form");
const formStatus = document.querySelector(".form-status");

menuButton?.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
  primaryNav?.classList.toggle("open", !isOpen);
});

primaryNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    primaryNav.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
    menuButton?.setAttribute("aria-label", "Open navigation");
  });
});

document.querySelectorAll("[data-service]").forEach((card) => {
  card.addEventListener("click", () => {
    const service = card.dataset.service;
    const option = [...(situationSelect?.options ?? [])].find((item) => item.text === service);
    if (option) situationSelect.value = option.value;
  });
});

intakeForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  formStatus.textContent = "Thanks. This concept form is not connected, so your details were not sent or stored.";
  intakeForm.reset();
});
