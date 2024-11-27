document.addEventListener("DOMContentLoaded", () => {
  // Initialize dashboard sections and navigation
  const sections = {
    home: `
      <h3>Welcome</h3>
      <p>Use the tools below to enhance your emails:</p>
      <button class="action-button" id="autoWrite">Auto Write</button>
      <button class="action-button" id="polish">Polish</button>
      <button class="action-button" id="summarize">Summarize</button>
    `,
    tutorial: `
      <h3>Steps to get started</h3>

<p>1. Enable Chrome's Built-In AI:
   - Follow <a href="https://developer.chrome.com/docs/extensions/ai/prompt-api" target="_blank">this guide</a> to enable Chrome's AI capabilities.</p>

<p>2. Download the Extension Files:
   - Get the PenPal files from <a href="https://github.com/Yaqing-Peng/gmail-ai-extension" target="_blank">this GitHub repository</a>.</p>


<p>3. Enable Developer Mode and Upload the Extension via <a href="chrome://extensions/" target="_blank">chrome://extensions/</a>.</p>

<p>4. Access the Dashboard:
   - Click the PenPal icon in Chrome to open the dashboard. Use tools like Summarize, Polish, and Auto Write.</p>

<p>5. Use Embedded Buttons:
   - Find buttons like Create Subject, Polish Text, and Auto Write directly in your email editor.</p>

<p>6. Learn More:
   - Use the Tutorial or Contact Us options in the dashboard for help.</p>

<p>Get started quickly with both the dashboard and embedded features to improve your email-writing!</p>
    `,
    contact: `
      <h3>Email</h3>
      <p><a href="mailto:penpalai@gmail.com">penpalai@gmail.com</a></p>
      <h3>GitHub</h3>
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
        <h1 class="header-title caveat">PenPal: </h1>
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
    <p class="caveat">PenPal@2024</p>
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

  // Footer buttons (example interactions)
  // document.getElementById("footerHome").addEventListener("click", () => {
  //   alert("Home clicked!");
  // });

  // document.getElementById("footerRefresh").addEventListener("click", () => {
  //   alert("Refresh clicked!");
  // });

  // document.getElementById("footerProfile").addEventListener("click", () => {
  //   alert("Profile clicked!");
  // });
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
