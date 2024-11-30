document.addEventListener("DOMContentLoaded", () => {
  // Initialize dashboard sections and navigation
  const sections = {
    home: `
      <h3>Welcome to your AI Email Assistant!</h3>
      <p>This Chrome extension enhances productivity by automating email tasks like summarizing content, crafting replies, polishing drafts, and generating subject lines.</p> 
      <p>Seamlessly integrated with Gmail and Outlook, it adds smart buttons to your email interface, streamlining your workflow for a faster, smarter email experience.</p>
    `,
    tutorial: `
      <h3>Steps to get started</h3>
      <h4>1. Prerequisites:</h4>
        <ul>
          <li>Download and enable the extension in Chrome Dev or Canary Channel. Learn more about <a href="https://www.chromium.org/getting-involved/dev-channel/" target="_blank">Chrome Release Channels</a>.</li>
          <li>Sign in to your email account on <a href="https://mail.google.com" target="_blank">Gmail</a> or <a href="https://outlook.office365.com" target="_blank">Outlook</a>.</li>
          <li>Open a Compose or Reply window to use the extension features.</li>
          <li>Set your email system's language to English, and ensure all inputs are in English.</li>
        </ul>


      <h4>2. Features and Button Locations:</h4>
      <div class="feature-name-div">
            <strong class="feature-name">Create Subject</strong>
            <strong class="feature-name">Polish Text</strong>
            <strong class="feature-name">Auto Write</strong>
          </div>
          <ul>
            <li><strong>Location:</strong> In the Compose window.</li>
            <li><strong>Function:</strong></li>
            <ul>
              <li>Create Subject: Suggests subject lines.</li>
              <li>Polish Text: Refines email drafts.</li>
              <li>Auto Write: Generates email content.</li>
            </ul>
          </ul>
          
          <strong class="feature-name">Summarize</strong>
          <ul>
            <li><strong>Location:</strong> Top-right corner of the email view.</li>
            <li><strong>Function:</strong> Generates a concise summary of email content.</li>
          </ul>
          
          <strong class="feature-name">Auto Reply</strong>
          <ul>
            <li><strong>Location:</strong> In the Reply window.</li>
            <li><strong>Function:</strong> Creates a context-aware reply.</li>
          </ul>
      </ul>
    `,
    contact: `
    <h3>Let's Get Connected!</h3>
      <h4>Email</h4>
        <p><a href="emailpilotteam@gmail.com">emailpilotteam@gmail.com</a></p>
      <h4>GitHub</h4>
      <p><a href="https://github.com/Yaqing-Peng/gmail-ai-extension" target="_blank">GitHub Repository</a></p>
    `,
  };

  // Populate the dashboard layout
  const mainContainer = document.createElement("div");
  mainContainer.classList.add("dashboard-container");
  mainContainer.innerHTML = `
    <header class="dashboard-header">
      <img src="icon.png" alt="Extension Icon" class="extension-icon" />
      <div class="header-text">
        <h1 class="header-title caveat">EmailPilot: </h1>
        <h2>Your AI Email Assistant</h2>
      </div>
      <button id="closeDashboard" class="close-button">×</button>
    </header>
    <nav class="dashboard-nav">
      <button data-section="home" class="nav-button active">Home</button>
      <button data-section="tutorial" class="nav-button">Tutorial</button>
      <button data-section="contact" class="nav-button">Contact Us</button>
    </nav>
    <div class="dashboard-content">
      ${sections.home}
    </div>
    <footer class="dashboard-footer">
    <p class="caveat">EmailPilot@2024</p>
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
      // Remove the active class from all buttons
      document
        .querySelectorAll(".nav-button")
        .forEach((btn) => btn.classList.remove("active"));

      // Add the active class to the clicked button
      event.target.classList.add("active");

      // Update the content based on the clicked button
      const targetSection = event.target.getAttribute("data-section");
      const contentDiv = document.querySelector(".dashboard-content");
      contentDiv.innerHTML = sections[targetSection];
    });
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
