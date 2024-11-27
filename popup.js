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
      <h1>PenPal: Your AI Email Assistant</h1>
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
      <button id="footerHome" class="footer-button">🏠</button>
      <button id="footerRefresh" class="footer-button">🔄</button>
      <button id="footerProfile" class="footer-button">👤</button>
    </footer>
  `;

  // Insert the dashboard into the body
  document.body.appendChild(mainContainer);

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
