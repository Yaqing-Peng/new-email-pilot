import { callAIPromptAPI } from './prompt-api.js';

console.log("Summarize content script loaded.");

// 添加 Summarize 按钮并定义点击事件
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

        // 如果弹窗已经存在，直接切换到 "Loading..." 状态
        const existingPopup = document.querySelector("#summary-popup");
        if (existingPopup) {
            updatePopupContent("Summarizing...");
        } else {
            // 如果弹窗不存在，创建一个新的
            showSummaryPopup("Summarizing...");
        }

        // 构建 prompt，并使用 callAIPromptAPI 调用 API
        const prompt = `Summarize the following email content in 100 words or less:\n\n${emailContent}`;
        console.log("Generated Prompt:", prompt);
        try {
            let summary = await callAIPromptAPI(prompt); // 使用通用 API 调用函数

            if (summary && summary.trim() !== "") {
                updatePopupContent(summary); // 更新文本内容为实际摘要
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

// 获取邮件内容并清理
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

// 显示弹出窗口
function showSummaryPopup(initialContent) {
    const popup = document.createElement("div");
    popup.id = "summary-popup"; // 给弹窗添加唯一 ID，便于复用
    popup.style.position = "fixed";
    popup.style.top = "50%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%, -50%)";
    popup.style.width = "400px";
    popup.style.padding = "20px";
    popup.style.backgroundColor = "#fff";
    popup.style.border = "1px solid #ccc";
    popup.style.borderRadius = "8px";
    popup.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.2)";
    popup.style.zIndex = "1000";

    popup.innerHTML = `
        <h3>Summary</h3>
        <p id="summary-content">${initialContent}</p>
        <button id="close-popup" style="margin-top: 10px; padding: 5px 10px; cursor: pointer; background-color: #1a73e8; color: #fff; border: none; border-radius: 4px;">Close</button>
    `;

    document.body.appendChild(popup);

    // 关闭弹窗
    document.getElementById("close-popup").addEventListener("click", () => {
        popup.remove();
    });
}

// 更新弹窗文本内容
function updatePopupContent(newContent) {
    const summaryContent = document.querySelector("#summary-popup #summary-content");
    if (summaryContent) {
        summaryContent.innerText = newContent; // 更新内容
    }
}
