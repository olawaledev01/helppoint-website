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

intakeForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!formStatus || !intakeForm.reportValidity()) return;

  const submitButton = intakeForm.querySelector('button[type="submit"]');
  if (submitButton) submitButton.disabled = true;
  intakeForm.setAttribute("aria-busy", "true");
  formStatus.textContent = "Sending your enquiry…";

  try {
    const response = await fetch(intakeForm.action, {
      method: "POST",
      body: new FormData(intakeForm),
      headers: { Accept: "application/json" },
    });

    if (!response.ok) throw new Error("Form submission failed");

    intakeForm.reset();
    formStatus.textContent = "Thanks — your enquiry has been sent. Vaitbrige will follow up by email.";
  } catch {
    formStatus.textContent = "We couldn’t send your enquiry just now. Please try again in a moment.";
  } finally {
    intakeForm.removeAttribute("aria-busy");
    if (submitButton) submitButton.disabled = false;
  }
});
