import { createPopupDiv } from "./src/createPopupDiv.js";

document.addEventListener("DOMContentLoaded", () => {
  createPopupDiv("Dashboard", (contentDiv) => {
    contentDiv.innerHTML = `<p>Welcome to the extension dashboard!</p>`;
  });
});
