import { callAIPromptAPI } from './prompt-api.js';

export function addAutoReplyButton(replyArea, emailBodyArea) {
    console.log("Creating auto-reply button...")

    const autoReplyButton = document.createElement("button");
    autoReplyButton.id = "autoReplyButton";
    autoReplyButton.textContent = "Auto Reply";
    autoReplyButton.style.margin = "10px";
    replyArea.insertAdjacentElement('afterend', autoReplyButton);

    autoReplyButton.addEventListener('click', async () => {
        console.log("creating reply content...")

        const emailContent = getEmailContent();
        if (!emailContent) {
            console.error("No email content detected.");
            return;
        }

        const prompt = "Create a reply email without subject for this email content: " + emailContent;
        console.log(prompt);

        try {
            generateEmailContent(prompt, emailBodyArea);
        } catch (error) {
            responseOutput.textContent = 'Error occurred while calling the API.';
            console.error('Error in content.js:', error);
        }
    });
}


// 获取邮件内容并清理
function getEmailContent() {
    // 选择包含邮件正文的主要元素（
    const emailBodyContainer = document.querySelector(".ii.gt"); 
    let emailContent = "";

    if (emailBodyContainer) {
        // 提取正文内容并清理多余的空白字符
        emailContent = emailBodyContainer.innerText.trim();
    } else {
        console.error("Unable to find the email content container.");
        return "";
    }

    // 清理非英文字符和多余的内容，限制长度
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

