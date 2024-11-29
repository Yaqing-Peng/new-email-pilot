import { createPopupDiv, showErrorPopup } from "./popup.js";
import { callAIPromptAPI } from "./prompt-api.js";
import { createButton } from './button.js';
import { getButtonStyle } from './popup-button-style.js';

export function addPolishButton(subjectArea, emailBodyArea) {
  console.log("Creating polish button...");

  // Create polish button
  const polishButton = createButton("polish-button", "Polish Text");

  // Insert button next to the subject area
  subjectArea.insertAdjacentElement("afterend", polishButton);
  polishButton.addEventListener("click", () =>
    openPolishPromptPopup(emailBodyArea)
  );

  // Check if the button is added to the DOM
  if (document.querySelector("#polish-button")) {
    console.log("Polish button successfully added.");
  } else {
    console.error("Failed to add polish button.");
  }
}

export function openPolishPromptPopup(emailBodyArea) {
  console.log("Creating polish pop-up window...");

  createPopupDiv("Polish Email", (contentDiv) => {
    // Set innerHTML for content div
    contentDiv.innerHTML = `
      <p style="margin-top: 0px; margin-bottom: 10px;">Choose a style for the email:</p>
      <div id="buttonContainer" style="display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 10px;">
        <button class="style-button" data-style="Professional" style="${getButtonStyle()}">Professional</button>
        <button class="style-button" data-style="Friendly" style="${getButtonStyle()}">Friendly</button>
        <button class="style-button" data-style="Concise" style="${getButtonStyle()}">Concise</button>
        <button class="style-button" data-style="Grammar and spelling check only" style="${getButtonStyle()}">Grammar & spelling check only</button>
      </div>

      <textarea id="polishPrompt" placeholder="Mail content has been selected, please input additional instructions for polishing the email..." style="width: 100%; height: 100px;"></textarea>
      <button id="generateButton" style="${getButtonStyle()}">Generate Polished Text</button>
      <textarea id="polishedResult" style="width: 100%; height: 100px; margin-top: 10px;" readonly></textarea>
      <button id="insertButton" style="${getButtonStyle()}">Insert Polished Text</button>
      `;

    // Get references to elements inside contentDiv
    const promptInput = contentDiv.querySelector("#polishPrompt");
    const generateButton = contentDiv.querySelector("#generateButton");
    const resultTextarea = contentDiv.querySelector("#polishedResult");
    const insertButton = contentDiv.querySelector("#insertButton");

    // Handle style button selection
    let selectedStyle = "Professional";
    contentDiv.querySelectorAll(".style-button").forEach((button) => {
      button.addEventListener("click", () => {
        selectedStyle = button.dataset.style;

        // Highlight the selected button and reset others
        contentDiv.querySelectorAll(".style-button").forEach((btn) => {
          btn.style.backgroundColor = btn === button ? "#8e24aa" : "";
          btn.style.color = btn === button ? "white" : "";
        });

        console.log(`Selected style: ${selectedStyle}`);
      });

      // Set initial styles for the default selected button
      if (button.dataset.style === selectedStyle) {
        button.style.backgroundColor = "#8e24aa";
        button.style.color = "white";
      }
    });

    // Generate polished text
    generateButton.addEventListener("click", async () => {
      const userInput = promptInput.value.trim();

      if (!emailBodyArea || !emailBodyArea.innerText.trim()) {
        showErrorPopup("Error", "No text found in the email body area.");
        return;
      }

      const existingText = emailBodyArea.innerText;
      const prompt = `
        Please polish the following email content in a ${selectedStyle.toLowerCase()} style.
        Return a single email template, without repeating sections, and ensure it is ready to be sent.
        Do not include a subject line. Do not include extra notes, suggestions, or alternative templates.
        ${userInput ? "Additional instructions: " + userInput : ""}
        ${existingText ? "Email content:\n" + existingText : ""}
      `;

      // Show loading message
      resultTextarea.value = "Generating polished text, please wait...";

      // Call the API to polish the text
      const polishedText = await callAIPromptAPI(prompt);
      resultTextarea.value =
        polishedText?.replace(/^Subject:.*$/m, "").trim() || "Error generating polished text.";
      
    });

    // Insert polished text into the email body
    insertButton.addEventListener("click", () => {
      // const emailBodyArea = document.querySelector('.Am.Al.editable');
      const resultText = resultTextarea.value.trim();

      if (!emailBodyArea) {
        showErrorPopup("Error", "No email body area found to insert the text.");
        return;
      }

      if (!resultText) {
        showErrorPopup(
          "Error",
          "The generated text area is empty. Please provide text to insert."
        );
        return;
      }

      createPopupDiv("Confirm Insert", (confirmDiv) => {
        confirmDiv.innerHTML = `
          <p>Are you sure you want to insert the polished text into the email body? This will replace your original email.</p>
          <button id="confirmButton" style="margin-right: 10px;">Confirm</button>
          <button id="cancelButton">Cancel</button>
        `;

        confirmDiv.querySelector("#confirmButton").addEventListener("click", () => {
          emailBodyArea.innerText = resultText;
          resultTextarea.value = ""; // Clear the result area
          console.log("Text inserted successfully.");
          document.body.removeChild(confirmDiv.parentElement); // Close the confirmation popup
        });

        confirmDiv.querySelector("#cancelButton").addEventListener("click", () => {
          console.log("Insertion cancelled.");
          document.body.removeChild(confirmDiv.parentElement); // Close the confirmation popup
        });
      });
    });
  });
}
