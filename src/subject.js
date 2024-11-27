import { callAIPromptAPI } from "./prompt-api.js";
import { createPopupDiv } from "./createPopupDiv.js";
import { createButton } from "./button.js";

console.log("Content script loaded.");

let subjectOptions = []; // Array to hold the generated subjects
let currentIndex = 0; // Current index in the subject options

export function addCreateSubjectButton(subjectArea, emailBodyArea) {
  console.log("Creating buttons...");

  const createSubjectButton = createButton(
    "create-subject-button",
    "Create Subject"
  );
  subjectArea.insertAdjacentElement("afterend", createSubjectButton);
  console.log("Create Subject button added.");

  // Event listener for "Create Subject" button
  createSubjectButton.addEventListener("click", async () => {
    console.log("Generating subject...");
    const bodyText = emailBodyArea.innerText?.trim(); // Ensure bodyText is trimmed

    // Check if bodyText is empty
    if (!bodyText || bodyText.length === 0) {
      console.error("Email content is empty.");
      showEmptyContentPopup(); // Show popup if email content is empty
      return;
    }

    // Show "Generating subject lines..." in subject line
    subjectArea.value = "Generating subject lines...";

    const prompt = `Write three email subject lines in English based on the following email content. Do not attempt to interpret or modify any technical terms, abbreviations, or acronyms. Treat them as is. Email content:\n\n${bodyText}\n\nOnly return the subject lines, separated by new lines.`;
    console.log("Prompt:", prompt);

    try {
      const result = await callAIPromptAPI(prompt);
      subjectOptions = result
        .split("\n") // Split by new lines
        .map((subject) => subject.trim()) // Remove extra spaces
        .filter((subject) => subject !== ""); // Remove empty entries
      currentIndex = 0; // Reset index to the first subject

      if (subjectOptions.length > 0) {
        subjectArea.value = subjectOptions[currentIndex]; // Display the first subject
        console.log("Generated subjects:", subjectOptions);
        showNavigationButtons(subjectArea); // Show navigation buttons
      } else {
        console.error("No valid subjects generated.");
        subjectArea.value = "No subject generated.";
      }
    } catch (error) {
      console.error("Error generating subjects:", error);
      subjectArea.value = "Error occurred while generating subjects.";
    }
  });
}
function showNavigationButtons(subjectArea) {
  let navContainer = document.getElementById("nav-container");

  // If the container already exists, remove it
  if (navContainer) {
    navContainer.remove();
  }

  // Create a new navigation container
  navContainer = document.createElement("div");
  navContainer.id = "nav-container";
  navContainer.style.display = "inline-flex";
  navContainer.style.alignItems = "center";
  navContainer.style.gap = "4px";
  navContainer.style.marginTop = "10px";

  // Create "<" button
  const prevButton = document.createElement("button");
  prevButton.id = "prev-button";
  prevButton.innerText = "<";
  prevButton.style.cursor = "pointer";
  //const prevButton = createButton("prev-button", "<");//not very good

  // Create page indicator
  const pageIndicator = document.createElement("span");
  pageIndicator.id = "page-indicator";
  pageIndicator.innerText = `${currentIndex + 1}/${subjectOptions.length}`;
  pageIndicator.style.fontSize = "14px";
  pageIndicator.style.color = "#555";

  // Create ">" button
  const nextButton = document.createElement("button");
  nextButton.id = "next-button";
  nextButton.innerText = ">";
  nextButton.style.cursor = "pointer";
  //const nextButton = createButton("next-button", ">");

  // Append navigation elements to the container
  navContainer.appendChild(prevButton);
  navContainer.appendChild(pageIndicator);
  navContainer.appendChild(nextButton);

  // Append navigation buttons below the subjectArea but aligned with Create Button
  const createSubjectButton = document.getElementById("create-subject-button");
  createSubjectButton.style.marginRight = "10px";
  createSubjectButton.parentElement.insertBefore(
    navContainer,
    createSubjectButton.nextSibling
  );

  // Event listeners for navigation buttons
  prevButton.addEventListener("click", () => {
    if (subjectOptions.length > 0) {
      currentIndex =
        (currentIndex - 1 + subjectOptions.length) % subjectOptions.length; // Loop back to last if at first
      subjectArea.value = subjectOptions[currentIndex];
      pageIndicator.innerText = `${currentIndex + 1}/${subjectOptions.length}`;
      console.log("Previous clicked. Current Index:", currentIndex);
    }
  });

  nextButton.addEventListener("click", () => {
    if (subjectOptions.length > 0) {
      currentIndex = (currentIndex + 1) % subjectOptions.length; // Loop to first if at last
      subjectArea.value = subjectOptions[currentIndex];
      pageIndicator.innerText = `${currentIndex + 1}/${subjectOptions.length}`;
      console.log("Next clicked. Current Index:", currentIndex);
    }
  });
}

// Show popup for empty content
function showEmptyContentPopup() {
  console.log("Displaying empty content popup...");
  createPopupDiv("Error", (contentDiv) => {
    contentDiv.innerText =
      "Email content cannot be empty. Please provide valid content before generating subject lines.";
  });
}
