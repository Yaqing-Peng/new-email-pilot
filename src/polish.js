import { callAIPromptAPI } from "./prompt-api.js";

export function addPolishButton(subjectArea) {
  console.log("Creating polish button...");

  // Create the button
  const polishButton = document.createElement("button");
  polishButton.id = "polishButton";
  polishButton.textContent = "Polish Text";
  polishButton.style.marginLeft = "10px";

  // Insert button next to the subject area
  subjectArea.insertAdjacentElement("afterend", polishButton);
  polishButton.addEventListener("click", openPromptPopup);

  // Check if the button is added to the DOM
  if (document.querySelector("#polishButton")) {
    console.log("Polish button successfully added.");
  } else {
    console.error("Failed to add polish button.");
  }
}

function openPromptPopup() {
  console.log("Creating polish pop-up window...");

  const popupDiv = document.createElement("div");
  popupDiv.style.position = "fixed";
  popupDiv.style.top = "50%";
  popupDiv.style.left = "50%";
  popupDiv.style.transform = "translate(-50%, -50%)";
  popupDiv.style.backgroundColor = "white";
  popupDiv.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";
  popupDiv.style.zIndex = "1000";
  popupDiv.style.width = "400px"; // Set width for consistent styling

  // Add a title bar for dragging
  const titleBar = document.createElement("div");
  titleBar.style.backgroundColor = "#007bff";
  titleBar.style.color = "white";
  titleBar.style.padding = "10px";
  titleBar.style.cursor = "move"; // Indicate draggable area
  titleBar.style.fontWeight = "bold";
  titleBar.style.display = "flex"; // Use flexbox for alignment
  titleBar.style.justifyContent = "space-between"; // Space between title and button

  const titleText = document.createElement("span");
  titleText.textContent = "Polish Email Popup";
  titleBar.appendChild(titleText);

  // Add the "X" button to the title bar
  const titleCloseButton = document.createElement("button");
  titleCloseButton.textContent = "X";
  titleCloseButton.style.background = "none";
  titleCloseButton.style.border = "none";
  titleCloseButton.style.color = "white";
  titleCloseButton.style.fontSize = "16px";
  titleCloseButton.style.cursor = "pointer";
  titleCloseButton.style.marginLeft = "10px";

  titleCloseButton.addEventListener("click", () => {
    document.body.removeChild(popupDiv);
  });

  titleBar.appendChild(titleCloseButton);
  popupDiv.appendChild(titleBar);

  const contentDiv = document.createElement("div");
  contentDiv.style.padding = "20px";

  const styleLabel = document.createElement("p");
  styleLabel.style.margin = "0px";

  styleLabel.textContent = "Choose a style for the email:";
  contentDiv.appendChild(styleLabel);

  const styleOptions = ["Professional", "Friendly", "Concise"];
  let selectedStyle = "Professional"; // Default style

  const buttonContainer = document.createElement("div");
  buttonContainer.style.display = "flex";
  // buttonContainer.style.padding = "10px";
  buttonContainer.style.justifyContent = "flex-start"; // Align buttons to the left
  contentDiv.appendChild(buttonContainer);

  // Create buttons for each style
  styleOptions.forEach((style, index) => {
    const styleButton = document.createElement("button");
    styleButton.textContent = style;
    styleButton.style.margin = "10px";
    styleButton.style.marginRight =
      index < styleOptions.length - 1 ? "10px" : "0";
    styleButton.style.marginLeft = "0";
    buttonContainer.appendChild(styleButton);

    // Set initial styles for the default selected button
    if (style === selectedStyle) {
      styleButton.style.backgroundColor = "#007bff";
      styleButton.style.color = "white";
    }

    styleButton.addEventListener("click", () => {
      selectedStyle = style;

      // Highlight the selected button and reset others
      Array.from(contentDiv.querySelectorAll("button")).forEach((btn) => {
        btn.style.backgroundColor =
          btn.textContent === selectedStyle ? "#007bff" : "";
        btn.style.color = btn.textContent === selectedStyle ? "white" : "";
      });

      // Update feedback message
      console.log(`Selected style: ${selectedStyle}`);
    });

    contentDiv.appendChild(styleButton);
  });

  const promptInput = document.createElement("textarea");
  promptInput.id = "polishPrompt";
  promptInput.placeholder =
    "Input additional instructions for polishing the email...";
  promptInput.style.width = "100%";
  promptInput.style.height = "100px";
  contentDiv.appendChild(promptInput);

  const generateButton = document.createElement("button");
  generateButton.textContent = "Generate Polished Text";
  generateButton.style.marginTop = "10px";
  contentDiv.appendChild(generateButton);

  const resultTextarea = document.createElement("textarea");
  resultTextarea.id = "polishedResult";
  resultTextarea.style.width = "100%";
  resultTextarea.style.height = "100px";
  resultTextarea.style.marginTop = "10px";
  resultTextarea.readOnly = true;
  contentDiv.appendChild(resultTextarea);

  const insertButton = document.createElement("button");
  insertButton.textContent = "Insert Polished Text";
  insertButton.style.marginTop = "10px";
  contentDiv.appendChild(insertButton);

  const closeButton = document.createElement("button");
  closeButton.textContent = "Close";
  closeButton.style.marginLeft = "10px";
  closeButton.style.marginTop = "10px";
  contentDiv.appendChild(closeButton);

  popupDiv.appendChild(contentDiv);
  document.body.appendChild(popupDiv);

  generateButton.addEventListener("click", async () => {
    const userInput = promptInput.value;
    const emailBodyArea = document.querySelector(
      "div[aria-label='Message Body']"
    );

    if (emailBodyArea) {
      const existingText = emailBodyArea.innerText;
      const prompt = `
        Please polish the following email content in a ${selectedStyle.toLowerCase()} style for clarity and professionalism. Return a single email template, without repeating sections, and ensure it is ready to be sent. Do not include a subject line. Do not include extra notes, suggestions, or alternative templates.
        ${userInput ? "Additional instructions: " + userInput : ""}
        ${existingText}
        `;

      // Show loading message
      resultTextarea.value = "Generating polished text, please wait...";

      // Call the API to polish the existing text without streaming
      const polishedText = await callAIPromptAPI(prompt);
      resultTextarea.value =
        polishedText.replace(/^Subject:.*$/m, "").trim() ||
        "Error generating polished text.";
    } else {
      resultTextarea.value = "No text found in the email body area.";
    }
  });

  insertButton.addEventListener("click", () => {
    const emailBodyArea = document.querySelector(
      "div[aria-label='Message Body']"
    );
    if (emailBodyArea) {
      // Insert the polished text into the email body area
      emailBodyArea.innerText = resultTextarea.value;

      // Clear out the polished text area
      resultTextarea.value = "";

      alert("Polished text inserted into the email body!");
    } else {
      alert("No email body area found to insert the text.");
    }
  });

  closeButton.addEventListener("click", () => {
    document.body.removeChild(popupDiv);
  });

  // Implement dragging functionality
  let isDragging = false;
  let offsetX = 0;
  let offsetY = 0;

  titleBar.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - popupDiv.getBoundingClientRect().left;
    offsetY = e.clientY - popupDiv.getBoundingClientRect().top;
    popupDiv.style.transition = "none"; // Disable smooth movement during drag
  });

  document.addEventListener("mousemove", (e) => {
    if (isDragging) {
      popupDiv.style.left = `${e.clientX - offsetX}px`;
      popupDiv.style.top = `${e.clientY - offsetY}px`;
      popupDiv.style.transform = "none"; // Remove initial centering transform
    }
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
  });
}
