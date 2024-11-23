import { callAIPromptAPI } from './prompt-api.js';
import { createButton } from './button.js';

export function addAutoReplyButton(replyArea, emailBodyArea) {
    console.log("Creating auto-reply button...")
    
    const autoReplyButton = createButton("auto-reply-button", "Auto Reply");
    replyArea.insertAdjacentElement('afterend', autoReplyButton);

    autoReplyButton.addEventListener('click', async () => {
        console.log("creating reply content...")

        const emailContent = getEmailContent();
        if (!emailContent) {
            console.error("No email content detected.");
            return;
        }

        const prompt = "Create a reply email for this email content, but do not create subject: " + emailContent;
        console.log(prompt);

        try {
            generateEmailContent(prompt, emailBodyArea);
        } catch (error) {
            responseOutput.textContent = 'Error occurred while calling the API.';
            console.error('Error in content.js:', error);
        }
    });
}


function getEmailContent() {
    const emailBodyContainer = document.querySelector(".ii.gt") 
        || document.querySelector('div[aria-label="Message body"]'); 
    let emailContent = "";

    if (emailBodyContainer) {
        emailContent = emailBodyContainer.innerText.trim();
    } else {
        console.error("Unable to find the email content container.");
        return "";
    }

    return emailContent.replace(/[^\x00-\x7F]/g, " ").slice(0, 1000);
}


async function generateEmailContent(prompt, emailBodyArea) {
    console.log("Email is being generated. Please wait...");

    if (emailBodyArea) {
        emailBodyArea.innerText = "Email is being generated. Please wait...";
    }

    const emailContent = await callAIPromptAPI(prompt);
    console.log("emailContent: " + emailContent);

    if (emailBodyArea) {
      emailBodyArea.innerText = emailContent;
    }
}

