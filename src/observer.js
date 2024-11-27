import { addAutoWriteButton, openPromptPopup } from "./auto-write.js";
import {
  addSummarizeButton,
  getSummaryPopup,
  getEmailContent,
} from "./summarize.js";
import { addPolishButton, openPolishPromptPopup } from "./polish.js";
import { addCreateSubjectButton } from "./subject.js";
import { addAutoReplyButton } from "./auto-reply.js";
import { callAIPromptAPI } from "./prompt-api.js";
import { createPopupDiv } from "./createPopupDiv.js";

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  const subjectArea = document.querySelector('input[name="subjectbox"]');
  const emailBodyArea = document.querySelector(".Am.Al.editable");
  const emailBodyContainer =
    document.querySelector(".ii.gt") ||
    document.querySelector('div[aria-label="Message body"]');

  if (message.action === "autoWrite") {
    if (!subjectArea || !emailBodyArea) {
      const message = "Compose window not detected.";
      sendResponse({ success: false, message: message });
      createPopupDiv("Error", (contentDiv) => {
        // Initialize content
        contentDiv.id = "autowrite-content";
        contentDiv.innerText = message;
      });
      return true;
    }
    console.log("Displaying Auto Write popup.");
    openPromptPopup(subjectArea, emailBodyArea);
    sendResponse({ success: true, message: "Auto Write popup displayed." });
  } else if (message.action === "polish") {
    if (!subjectArea || !emailBodyArea) {
      const message = "Compose window not detected.";
      sendResponse({ success: false, message: message });
      createPopupDiv("Error", (contentDiv) => {
        // Initialize content
        contentDiv.id = "polish-content";
        contentDiv.innerText = message;
      });
      return true;
    }
    console.log("Displaying Polish popup.");
    openPolishPromptPopup(subjectArea, emailBodyArea);
    sendResponse({ success: true, message: "Polish popup displayed." });
  } else if (message.action === "summarize") {
    if (!emailBodyContainer) {
      const message = "Email content not detected.";
      sendResponse({ success: false, message: message });
      createPopupDiv("Error", (contentDiv) => {
        // Initialize content
        contentDiv.id = "summary-content";
        contentDiv.innerText = message;
      });
      return true;
    }
    console.log("Displaying Summarize popup.");
    const emailContent = getEmailContent();
    if (!emailContent) {
      console.error("No email content detected.");
      return;
    }

    //initialize the summarize popup
    getSummaryPopup("Summarizing...");

    // Use an async function to handle the API call
    (async () => {
      const prompt = `Summarize the following email content in 100 words or less:\n\n${emailContent}`;
      console.log("Generated Prompt:", prompt);

      try {
        const summary = await callAIPromptAPI(prompt);

        if (summary && summary.trim() !== "") {
          getSummaryPopup(summary); // Update popup content with summary
        } else {
          console.error("Failed to generate summary or summary is empty.");
          getSummaryPopup("Failed to generate a summary. Please try again.");
        }
        sendResponse({ success: true, message: "Summarize popup displayed." });
      } catch (error) {
        console.error("Error generating summary:", error);
        getSummaryPopup("An error occurred while generating the summary.");
        sendResponse({ success: false, message: "Error generating summary." });
      }
    })();
    return true; // Keeps the message channel open for asynchronous response
  } else {
    console.warn("Unknown action received.");
    sendResponse({ success: false, message: "Unknown action." });
  }
  return true; // Ensure the channel stays open for async responses
});

// Detect the current platform (Gmail or Outlook)
const isGmail = window.location.hostname.includes("mail.google.com");
const isOutlook = window.location.hostname.includes("outlook.office365.com");

// Initialize MutationObserver to watch for new compose windows or email details
const observer = new MutationObserver((mutations) => {
  mutations.forEach(() => {
    if (isGmail) {
      handleMutations(
        {
          subjectArea: 'input[name="subjectbox"]',
          emailBodyArea: ".Am.Al.editable",
          subjectElement: "h2.hP",
          replyArea: "form.bAs",
          newMsgEl: "div.aYF",
        },
        "Gmail"
      );
    } else if (isOutlook) {
      handleMutations(
        {
          subjectArea: "div.ZMK7F",
          emailBodyArea:
            'div[aria-label="Message body, press Alt+F10 to exit"]',
          subjectElement: "span.JdFsz",
          replyArea: "div.UVFSO.GCol2",
        },
        "Outlook"
      );
    }
  });
});

// Generalized mutation handling
function handleMutations(selectors, platform) {
  const { subjectArea, emailBodyArea, subjectElement, replyArea, newMsgEl } =
    selectors;
  const subjectAreaEl = document.querySelector(subjectArea);
  const emailBodyAreaEl = document.querySelector(emailBodyArea);
  const subjectElementEl = document.querySelector(subjectElement);
  const replyAreaEl = document.querySelector(replyArea);
  const newMsgElDetected = newMsgEl ? document.querySelector(newMsgEl) : true;

  const actions = [
    {
      condition:
        newMsgElDetected &&
        subjectAreaEl &&
        emailBodyAreaEl &&
        !document.querySelector("#auto-write-button"),
      action: () => addAutoWriteButton(subjectAreaEl, emailBodyAreaEl),
      message: `${platform}: Compose window detected. Adding auto-write button...`,
    },
    {
      condition:
        subjectElementEl && !document.getElementById("summarize-button"),
      action: () => addSummarizeButton(subjectElementEl),
      message: `${platform}: Email detail detected. Adding summarize button...`,
    },
    {
      condition:
        newMsgElDetected &&
        subjectAreaEl &&
        emailBodyAreaEl &&
        !document.querySelector("#polish-button"),
      action: () => addPolishButton(subjectAreaEl, emailBodyAreaEl),
      message: `${platform}: Compose window detected. Adding polish button...`,
    },
    {
      condition:
        newMsgElDetected &&
        subjectAreaEl &&
        emailBodyAreaEl &&
        !document.querySelector("#create-subject-button"),
      action: () => addCreateSubjectButton(subjectAreaEl, emailBodyAreaEl),
      message: `${platform}: Compose window detected. Adding create subject button...`,
    },
    {
      condition:
        !newMsgElDetected &&
        replyAreaEl &&
        emailBodyAreaEl &&
        !document.querySelector("#auto-reply-button"),
      action: () => addAutoReplyButton(replyAreaEl, emailBodyAreaEl),
      message: `${platform}: Reply window detected. Adding auto-reply button...`,
    },
  ];

  actions.forEach(({ condition, action, message }) => {
    if (condition) {
      console.log(message);
      action();
    }
  });
}

// Start observing
observer.observe(document, {
  childList: true,
  subtree: true,
});
