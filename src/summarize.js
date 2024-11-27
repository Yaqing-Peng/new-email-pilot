import { callAIPromptAPI } from "./prompt-api.js";
import { createPopupDiv } from "./createPopupDiv.js";
import { createButton } from "./button.js";

console.log("Summarize content script loaded.");

// Add Summarize button and define click event
export function addSummarizeButton(subjectElement) {
  const summarizeButton = createButton("summarize-button", "Summarize");

  subjectElement.insertAdjacentElement("afterend", summarizeButton);

  summarizeButton.addEventListener("click", async () => {
    const emailContent = getEmailContent();
    if (!emailContent) {
      console.error("No email content detected.");
      return;
    }

    //initialize the summarize popup
    getSummaryPopup("Summarizing...");

    // Build prompt and call API using callAIPromptAPI
    const prompt = `Summarize the following email content in 100 words or less:\n\n${emailContent}`;
    console.log("Generated Prompt:", prompt);
    try {
      let summary = await callAIPromptAPI(prompt);

      if (summary && summary.trim() !== "") {
        getSummaryPopup(summary); // Update popup content with summary
      } else {
        console.error("Failed to generate summary or summary is empty.");
        getSummaryPopup("Failed to generate a summary. Please try again.");
      }
    } catch (error) {
      console.error("Error generating summary:", error);
      getSummaryPopup("An error occurred while generating the summary.");
    }
  });
}

// Get email content and clean it up
export function getEmailContent() {
  //choose gmail or outlook
  const emailBodyContainer =
    document.querySelector(".ii.gt") ||
    document.querySelector('div[aria-label="Message body"]');

  let emailContent = "";

  if (emailBodyContainer) {
    emailContent = emailBodyContainer.innerText.trim();
  } else {
    console.error("Unable to find the email content container.");
    return "";
  }

  return emailContent.replace(/[^\x00-\x7F]/g, " ").slice(0, 1000);
}

// Show or update popup window
export function getSummaryPopup(content) {
  // Check if popup content already exists
  let summaryContent = document.querySelector("#summary-content");

  if (summaryContent) {
    // If exists, update content
    summaryContent.innerText = content;
  } else {
    // If not exists, create the popup
    createPopupDiv("Summary", (contentDiv) => {
      // Initialize content
      contentDiv.id = "summary-content";
      contentDiv.innerText = content;
    });
  }
}
