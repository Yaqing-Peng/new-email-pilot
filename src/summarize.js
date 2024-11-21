import { callAIPromptAPI } from './prompt-api.js';
import { createPopupDiv } from './popup.js';

console.log("Summarize content script loaded.");

// Add Summarize button and define click event
export function addSummarizeButton(subjectElement) {
    const summarizeButton = document.createElement("button");
    summarizeButton.id = "summarize-button";
    summarizeButton.innerText = "Summarize";
    summarizeButton.style.marginLeft = "10px";
    summarizeButton.style.cursor = "pointer";
    summarizeButton.style.padding = "5px 10px";
    summarizeButton.style.backgroundColor = "#1a73e8";
    summarizeButton.style.color = "#fff";
    summarizeButton.style.border = "none";
    summarizeButton.style.borderRadius = "4px";

    subjectElement.insertAdjacentElement("afterend", summarizeButton);

    summarizeButton.addEventListener("click", async () => {
        const emailContent = getEmailContent();
        if (!emailContent) {
            console.error("No email content detected.");
            return;
        }

        // If popup already exists, switch to "Loading..." state
        const existingPopup = document.querySelector("#summary-popup");
        if (existingPopup) {
            updatePopupContent("Summarizing...");
        } else {
            // If not, create a new popup
            showSummaryPopup("Summarizing...");
        }

        // Build prompt and call API using callAIPromptAPI
        const prompt = `Summarize the following email content in 100 words or less:\n\n${emailContent}`;
        console.log("Generated Prompt:", prompt);
        try {
            let summary = await callAIPromptAPI(prompt); 

            if (summary && summary.trim() !== "") {
                updatePopupContent(summary); // Update popup content with summary
            } else {
                console.error("Failed to generate summary or summary is empty.");
                updatePopupContent("Failed to generate a summary. Please try again.");
            }
        } catch (error) {
            console.error("Error generating summary:", error);
            updatePopupContent("An error occurred while generating the summary.");
        }
    });
}

// Get email content and clean it up
function getEmailContent() {
    const emailBodyContainer = document.querySelector(".ii.gt");
    let emailContent = "";

    if (emailBodyContainer) {
        emailContent = emailBodyContainer.innerText.trim();
    } else {
        console.error("Unable to find the email content container.");
        return "";
    }

    return emailContent.replace(/[^\x00-\x7F]/g, " ").slice(0, 1000);
}

// Show popup window
function showSummaryPopup(initialContent) {
    // Use createPopupDiv function from popup.js
    createPopupDiv("Summary", (contentDiv) => {
        // Initialize content
        contentDiv.id = "summary-content";
        contentDiv.innerText = initialContent;
    });

}

// Update popup text content
function updatePopupContent(newContent) {
    const summaryContent = document.querySelector("#summary-content");
    if (summaryContent) {
        summaryContent.innerText = newContent; // 更新内容
    } else {
        console.error("Summary content container not found.");
    }
}
