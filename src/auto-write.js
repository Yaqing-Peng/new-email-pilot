import { callAIPromptAPI } from "./prompt-api.js";
import { createPopupDiv } from "./createPopupDiv.js";
import { createButton } from "./button.js";

export function addAutoWriteButton(subjectArea, emailBodyArea) {
  console.log("Creating auto-write button...");

  const autoWriteButton = createButton("auto-write-button", "Auto Write");
  subjectArea.insertAdjacentElement("afterend", autoWriteButton);

  autoWriteButton.addEventListener("click", () =>
    openPromptPopup(subjectArea, emailBodyArea)
  );
}

// Function to open the specific prompt popup
export function openPromptPopup(subjectArea, emailBodyArea) {
  console.log("Creating auto-write pop-up window...");

  createPopupDiv("Auto Write Email", (contentDiv) => {
    // Set innerHTML for content div
    contentDiv.innerHTML = `
      <textarea id="autoWritePrompt" placeholder="Input what do you want to include in your email..." style="width: 100%; height: 100px;"></textarea>
      <button id="generateButton" style="margin-top: 10px;">Generate</button>
      <p id="errorMessage" style="color: red; margin-top: 10px; display: none;">Please enter content for your email before generating.</p>
    `;

    // Get references to elements inside contentDiv
    const promptInput = contentDiv.querySelector("#autoWritePrompt");
    const generateButton = contentDiv.querySelector("#generateButton");
    const errorMessage = contentDiv.querySelector("#errorMessage");

    // Generate button event listener
    generateButton.addEventListener("click", () => {
      const userInput = promptInput.value.trim();
      console.log("User input: " + userInput);

      if (userInput) {
        // Valid input, remove error message if it exists and generate email content
        errorMessage.style.display = "none";
        generateEmailContent(
          userInput + ". Also generate subject.",
          subjectArea,
          emailBodyArea
        );
      } else {
        // Invalid input, show error message
        errorMessage.style.display = "block";
      }
    });
  });
}

async function generateEmailContent(prompt, subjectArea, emailBodyArea) {
  if (emailBodyArea) {
    subjectArea.value = ""; //clear subject
    emailBodyArea.innerText = "Email is being generated. Please wait...";
  }

  const emailContent = await callAIPromptAPI(prompt);
  console.log(emailContent);

  const [subject, ...bodyParts] = emailContent.split("\n");
  const body = bodyParts.join("\n").replace("Subject:", "").trim();

  if (subjectArea) {
    subjectArea.value = subject.replace(/^## Subject:/, "").trim();
  }
  if (emailBodyArea) {
    emailBodyArea.innerText = body;
  }
}
