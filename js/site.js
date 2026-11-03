// Email button: copy address to clipboard; if that fails, show it on the page.
const button = document.getElementById("copy-email");
const status = document.getElementById("email-status");

button.addEventListener("click", async () => {
  const email = button.dataset.email;
  try {
    await navigator.clipboard.writeText(email);
    button.textContent = "Copied!";
    setTimeout(() => { button.textContent = "Email"; }, 1200);
  } catch {
    status.textContent = email;
  }
});
