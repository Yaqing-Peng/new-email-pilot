import { callAIPromptAPI } from './prompt-api.js';

export function addPolishButton(subjectArea) {
  console.log("Creating polish button...");

  // Create the button
  const polishButton = document.createElement("button");
  polishButton.id = "polishButton";
  polishButton.textContent = "Polish Text";
  polishButton.style.margin = "10px";

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
  popupDiv.style.padding = "20px";
  popupDiv.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";
  popupDiv.style.zIndex = "1000";
  popupDiv.style.width = "400px"; // Set width for consistent styling

  const styleLabel = document.createElement("p");
  styleLabel.textContent = "Choose a style for the email:";
  popupDiv.appendChild(styleLabel);

  const styleOptions = ["Professional", "Friendly", "Concise"];
  let selectedStyle = "Professional"; // Default style
  let selectedStyleMessage = document.createElement("p");
  selectedStyleMessage.style.marginTop = "10px";
  selectedStyleMessage.style.fontStyle = "italic";
  selectedStyleMessage.textContent = `Selected style: ${selectedStyle}`;
  popupDiv.appendChild(selectedStyleMessage);

  // Create buttons for each style
  styleOptions.forEach((style) => {
    const styleButton = document.createElement("button");
    styleButton.textContent = style;
    styleButton.style.margin = "5px";

    styleButton.addEventListener("click", () => {
      selectedStyle = style;

      // Highlight the selected button and reset others
      Array.from(popupDiv.querySelectorAll("button")).forEach((btn) => {
        btn.style.backgroundColor = btn.textContent === style ? "#007bff" : "";
        btn.style.color = btn.textContent === style ? "white" : "";
      });

      // Update feedback message
      selectedStyleMessage.textContent = `Selected style: ${selectedStyle}`;
      console.log(`Selected style: ${selectedStyle}`);
    });

    popupDiv.appendChild(styleButton);
  });

  const promptInput = document.createElement("textarea");
  promptInput.id = "polishPrompt";
  promptInput.placeholder =
    "Input additional instructions for polishing the email...";
  promptInput.style.width = "100%";
  promptInput.style.height = "100px";
  popupDiv.appendChild(promptInput);

  const generateButton = document.createElement("button");
  generateButton.textContent = "Generate Polished Text";
  generateButton.style.marginTop = "10px";
  popupDiv.appendChild(generateButton);

  const closeButton = document.createElement("button");
  closeButton.textContent = "Close";
  closeButton.style.marginLeft = "10px";
  closeButton.style.marginTop = "10px";
  popupDiv.appendChild(closeButton);

  const resultTextarea = document.createElement("textarea");
  resultTextarea.id = "polishedResult";
  resultTextarea.style.width = "100%";
  resultTextarea.style.height = "100px";
  resultTextarea.style.marginTop = "10px";
  resultTextarea.readOnly = true;
  popupDiv.appendChild(resultTextarea);

  const copyButton = document.createElement("button");
  copyButton.textContent = "Copy Polished Text";
  copyButton.style.marginTop = "10px";
  popupDiv.appendChild(copyButton);

  document.body.appendChild(popupDiv);

  generateButton.addEventListener("click", async () => {
    const userInput = promptInput.value;
    const emailBodyArea = document.querySelector(
      "div[aria-label='Message Body']"
    );

    if (emailBodyArea) {
      const existingText = emailBodyArea.innerText;
      const prompt = `
        Please polish the following email content in a ${selectedStyle.toLowerCase()} style for clarity and professionalism. Return a single, complete email template, without repeating sections, and ensure it is ready to be sent. Do not include extra notes, suggestions, or alternative templates.
        ${userInput ? "Additional instructions: " + userInput : ""}
        ${existingText}
        `;

      // Show loading message
      resultTextarea.value = "Generating polished text, please wait...";

      // Call the API to polish the existing text without streaming
      const polishedText = await callAIPromptAPI(prompt);
      resultTextarea.value = polishedText || "Error generating polished text.";
    } else {
      resultTextarea.value = "No text found in the email body area.";
    }
  });

  copyButton.addEventListener("click", () => {
    resultTextarea.select();
    document.execCommand("copy");
    alert("Polished text copied to clipboard!");
  });

  closeButton.addEventListener("click", () => {
    document.body.removeChild(popupDiv);
  });
}

