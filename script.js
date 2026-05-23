const yearNode = document.getElementById("currentYear");
const briefingButton = document.getElementById("briefingButton");

if (yearNode) {
  yearNode.textContent = new Date().getFullYear().toString();
}

if (briefingButton) {
  briefingButton.addEventListener("click", () => {
    window.alert(
      "Thanks for your interest in Omega ACKE. We will contact you to schedule your introductory briefing."
    );
  });
}
