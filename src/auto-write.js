import { callAIPromptAPI } from './utils/prompt-api.js';
import { createPopupDiv, showErrorPopup } from './utils/popup.js';
import { createButton } from './utils/button.js';
import { getButtonStyle } from './utils/popup-button-style.js';

export function addAutoWriteButton(subjectArea,subjectInput, emailBodyArea) {
  console.log("Creating auto-write button...")

  const autoWriteButton = createButton("auto-write-button", "Auto Write");
  subjectArea.insertAdjacentElement("afterend", autoWriteButton);

  autoWriteButton.addEventListener("click", () => openPromptPopup(subjectInput, emailBodyArea));
}

// Function to open the specific prompt popup
export function openPromptPopup(subjectInput, emailBodyArea) {
  console.log("Creating auto-write pop-up window...");

  createPopupDiv("Auto Write Email", (contentDiv) => {
    // Set innerHTML for content div
    contentDiv.innerHTML = `
      <textarea id="autoWritePrompt" placeholder="Input what do you want to include in your email..." style="width: 100%; height: 100px;"></textarea>
      <button id="generateButton" style="${getButtonStyle()}">Generate</button>
      <p id="errorMessage" style="color: red; margin-top: 10px; display: none;">Please enter content for your email before generating.</p>
    `;

    // Get references to elements inside contentDiv
    const promptInput = contentDiv.querySelector("#autoWritePrompt");
    const generateButton = contentDiv.querySelector("#generateButton");

    // Generate button event listener
    generateButton.addEventListener("click", () => {
      const userInput = promptInput.value.trim();
      console.log("User input: " + userInput);

      if (userInput) {
        // Valid input, remove error message if it exists and generate email content
        errorMessage.style.display = "none";
        generateEmailContent(userInput + '. Also generate subject.', subjectInput, emailBodyArea);
      } else {
        // Invalid input, show error message
        showErrorPopup("Error", "Please enter content for your email before generating.");     
      }
    });
  });
}

async function generateEmailContent(prompt, subjectInput, emailBodyArea) {
  if (emailBodyArea) {
    subjectInput.value = ""; //clear subject
    emailBodyArea.innerText = "Email is being generated. Please wait...";
  }

  try {
    const emailContent = await callAIPromptAPI(prompt);
    console.log(emailContent);

    const [subject, ...bodyParts] = emailContent.split('\n');

    // Replace the "Subject:" or "## Subject:" prefix
    const cleanedSubject = subject.replace(/^(##\s*)?Subject:\s*/, '').trim();
    
    // Join the remaining parts of the email content
    const body = bodyParts.join('\n').trim();
    
    if (subjectInput) {
      subjectInput.value = cleanedSubject;
    }
    if (emailBodyArea) {
      emailBodyArea.innerText = body;
    }
  } catch (error) {
    console.error("Error generating email content:", error);
    emailBodyArea.innerText = "";//clear loading message
  }
}
