document.addEventListener("DOMContentLoaded", () => {
  // Initialize dashboard sections and navigation
  const sections = {
    home: `
      <h2>Welcome</h2>
      <p>Use the tools below to enhance your emails:</p>
      <button class="action-button" id="autoWrite">Auto Write</button>
      <button class="action-button" id="polish">Polish</button>
      <button class="action-button" id="summarize">Summarize</button>
    `,
    tasks: `
      <h2>Your Tasks</h2>
      <p>No tasks available yet.</p>
    `,
    settings: `
      <h2>Settings</h2>
      <p>Configure your preferences here.</p>
    `,
  };

  // Populate the dashboard layout
  const mainContainer = document.createElement("div");
  mainContainer.classList.add("dashboard-container");
  mainContainer.innerHTML = `
    <header class="dashboard-header">
      <img src="icon.png" alt="Extension Icon" class="extension-icon" />
      <div class="header-text">
        <h1 class="header-title">PenPal: </h1>
        <h2>Your AI Email Assistant</h2>
      </div>
      <button id="closeDashboard" class="close-button">×</button>
    </header>
    <nav class="dashboard-nav">
      <button data-section="home" class="nav-button">Home</button>
      <button data-section="tasks" class="nav-button">Tasks</button>
      <button data-section="settings" class="nav-button">Settings</button>
    </nav>
    <div class="dashboard-content">
      ${sections.home}
    </div>
    <footer class="dashboard-footer">
    <p>PenPal@2024</p>
    </footer>
  `;

  // Insert the dashboard into the body
  document.body.appendChild(mainContainer);

  // Close dashboard button
  document.getElementById("closeDashboard").addEventListener("click", () => {
    window.close(); // Closes the popup window entirely
  });

  // Navigation functionality
  document.querySelectorAll(".nav-button").forEach((button) => {
    button.addEventListener("click", (event) => {
      const targetSection = event.target.getAttribute("data-section");
      const contentDiv = document.querySelector(".dashboard-content");
      contentDiv.innerHTML = sections[targetSection];
    });
  });

  // Footer buttons (example interactions)
  document.getElementById("footerHome").addEventListener("click", () => {
    alert("Home clicked!");
  });

  document.getElementById("footerRefresh").addEventListener("click", () => {
    alert("Refresh clicked!");
  });

  document.getElementById("footerProfile").addEventListener("click", () => {
    alert("Profile clicked!");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Attach event listeners to buttons
  document.getElementById("autoWrite").addEventListener("click", () => {
    sendMessageToContentScript({ action: "autoWrite" });
  });

  document.getElementById("polish").addEventListener("click", () => {
    sendMessageToContentScript({ action: "polish" });
  });

  document.getElementById("summarize").addEventListener("click", () => {
    sendMessageToContentScript({ action: "summarize" });
  });
});

function sendMessageToContentScript(message) {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs.length === 0) {
      alert("No active tab found.");
      return;
    }

    chrome.tabs.sendMessage(tabs[0].id, message, (response) => {
      if (response?.success) {
        console.log(response.message);
      } else {
        console.error(
          response?.message || "Failed to communicate with the content script."
        );
      }
    });
  });
}
