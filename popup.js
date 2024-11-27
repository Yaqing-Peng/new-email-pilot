import { showAutoWritePopup, addAutoWriteButton } from "./src/auto-write.js";
import { platformElements } from "./src/observer.js";

document.addEventListener("DOMContentLoaded", () => {
  // Initialize dashboard sections and navigation
  const sections = {
    autoWrite: `
      <h2>Auto Write</h2>
      <p>Generate email content based on your input:</p>
      <button id="autoWriteAction">Start Auto Write</button>
    `,
    polish: `
      <h2>Polish</h2>
      <p>Improve the style, grammar, and readability of your email:</p>
      <button id="polishAction">Start Polishing</button>
    `,
    summarize: `
      <h2>Summarize</h2>
      <p>Condense your email content into a summary:</p>
      <button id="summarizeAction">Start Summarizing</button>
    `,
  };

  // Populate the dashboard layout
  const mainContainer = document.createElement("div");
  mainContainer.classList.add("dashboard-container");
  mainContainer.innerHTML = `
    <header class="dashboard-header">
      <img src="icon.png" alt="Extension Icon" class="extension-icon" />
      <div class="header-text">
        <h1 class="header-title">PenPal</h1>
        <h2>Your AI Email Assistant</h2>
      </div>
    </header>
    <nav class="dashboard-nav">
      <button data-section="autoWrite" class="nav-button">Auto Write</button>
      <button data-section="polish" class="nav-button">Polish</button>
      <button data-section="summarize" class="nav-button">Summarize</button>
    </nav>
    <div class="dashboard-content">
      ${sections.autoWrite}
    </div>
    <footer class="dashboard-footer">
      <button id="footerHome" class="footer-button">🏠</button>
      <button id="footerRefresh" class="footer-button">🔄</button>
      <button id="footerProfile" class="footer-button">👤</button>
    </footer>
  `;

  document.body.appendChild(mainContainer);

  // Navigation functionality
  document.querySelectorAll(".nav-button").forEach((button) => {
    button.addEventListener("click", (event) => {
      const targetSection = event.target.getAttribute("data-section");
      const contentDiv = document.querySelector(".dashboard-content");
      contentDiv.innerHTML = sections[targetSection];

      // Initialize specific functions for each section
      if (targetSection === "autoWrite") {
        // Add logic for Auto Write
        document
          .getElementById("autoWriteAction")
          .addEventListener("click", () => {
            if (
              platformElements.subjectAreaEl &&
              platformElements.emailBodyAreaEl
            ) {
              showAutoWritePopup(
                platformElements.subjectAreaEl,
                platformElements.emailBodyAreaEl
              );
            } else {
              // Retry to detect the elements
              platformElements.subjectAreaEl = document.querySelector(
                'input[name="subjectbox"]'
              );
              platformElements.emailBodyAreaEl =
                document.querySelector(".Am.Al.editable");

              if (
                platformElements.subjectAreaEl &&
                platformElements.emailBodyAreaEl
              ) {
                showAutoWritePopup(
                  platformElements.subjectAreaEl,
                  platformElements.emailBodyAreaEl
                );
              } else {
                alert(
                  "Compose window not detected. Please open a compose window first."
                );
              }
            }
          });
      } else if (targetSection === "polish") {
        // Add logic for Polish
        document
          .getElementById("polishAction")
          .addEventListener("click", () => {
            console.log("Polish action initiated.");
            // Call Polish logic here
          });
      } else if (targetSection === "summarize") {
        // Add logic for Summarize
        document
          .getElementById("summarizeAction")
          .addEventListener("click", () => {
            console.log("Summarize action initiated.");
            // Call Summarize logic here
          });
      }
    });
  });
});
