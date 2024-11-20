import { createPopupDiv } from './popup.js';
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

  createPopupDiv("Polish Email", (contentDiv) => {
    // Set innerHTML for content div
    contentDiv.innerHTML = `
      <p style="margin-top: 0px; margin-bottom: 10px;">Choose a style for the email:</p>
      <div id="buttonContainer" style="display: flex; justify-content: flex-start; margin-bottom: 10px;">
        <button class="style-button" data-style="Professional" style="margin-right: 10px;">Professional</button>
        <button class="style-button" data-style="Friendly" style="margin-right: 10px;">Friendly</button>
        <button class="style-button" data-style="Concise">Concise</button>
      </div>
      <textarea id="polishPrompt" placeholder="Input additional instructions for polishing the email..." style="width: 100%; height: 100px;"></textarea>
      <button id="generateButton" style="margin-top: 10px;">Generate Polished Text</button>
      <textarea id="polishedResult" style="width: 100%; height: 100px; margin-top: 10px;" readonly></textarea>
      <button id="insertButton" style="margin-top: 10px;">Insert Polished Text</button>
      <button id="closeButton" style="margin-top: 10px; margin-left: 10px;">Close</button>
    `;

    // Get references to elements inside contentDiv
    const promptInput = contentDiv.querySelector("#polishPrompt");
    const generateButton = contentDiv.querySelector("#generateButton");
    const resultTextarea = contentDiv.querySelector("#polishedResult");
    const insertButton = contentDiv.querySelector("#insertButton");
    const closeButton = contentDiv.querySelector("#closeButton");

    // Handle style button selection
    let selectedStyle = "Professional";
    contentDiv.querySelectorAll(".style-button").forEach((button) => {
      button.addEventListener("click", () => {
        selectedStyle = button.dataset.style;

        // Highlight the selected button and reset others
        contentDiv.querySelectorAll(".style-button").forEach((btn) => {
          btn.style.backgroundColor = btn === button ? "#007bff" : "";
          btn.style.color = btn === button ? "white" : "";
        });

        console.log(`Selected style: ${selectedStyle}`);
      });

      // Set initial styles for the default selected button
      if (button.dataset.style === selectedStyle) {
        button.style.backgroundColor = "#007bff";
        button.style.color = "white";
      }
    });

    // Generate polished text
    generateButton.addEventListener("click", async () => {
      const userInput = promptInput.value;
      const emailBodyArea = document.querySelector("div[aria-label='Message Body']");

      if (emailBodyArea) {
        const existingText = emailBodyArea.innerText;
        const prompt = `
          Please polish the following email content in a ${selectedStyle.toLowerCase()} style for clarity and professionalism.
          Return a single email template, without repeating sections, and ensure it is ready to be sent.
          Do not include a subject line. Do not include extra notes, suggestions, or alternative templates.
          ${userInput ? "Additional instructions: " + userInput : ""}
          ${existingText}
        `;

        // Show loading message
        resultTextarea.value = "Generating polished text, please wait...";

        // Call the API to polish the existing text without streaming
        try {
          const polishedText = await callAIPromptAPI(prompt);
          resultTextarea.value = polishedText.replace(/^Subject:.*$/m, "").trim() || "Error generating polished text.";
        } catch (error) {
          resultTextarea.value = "Error generating polished text.";
        }
      } else {
        resultTextarea.value = "No text found in the email body area.";
      }
    });

    // Insert polished text into the email body
    insertButton.addEventListener("click", () => {
      const emailBodyArea = document.querySelector("div[aria-label='Message Body']");
      if (emailBodyArea) {
        emailBodyArea.innerText = resultTextarea.value;
        resultTextarea.value = "";
        alert("Polished text inserted into the email body!");
      } else {
        alert("No email body area found to insert the text.");
      }
    });

    // Close popup
    closeButton.addEventListener("click", () => {
      document.body.removeChild(contentDiv.parentElement);
    });
  });
}
