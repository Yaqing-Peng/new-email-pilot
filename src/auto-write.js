import { callAIPromptAPI } from './prompt-api.js';

export function addAutoWriteButton(subjectArea) {
    console.log("Creating auto-write button...")

    const autoWriteButton = document.createElement("button");
    autoWriteButton.id = "autoWriteButton";
    autoWriteButton.textContent = "Auto Write";
    autoWriteButton.style.margin = "10px";
    subjectArea.insertAdjacentElement('afterend', autoWriteButton);

    autoWriteButton.addEventListener("click", openPromptPopup);
}


function openPromptPopup() {
    console.log("Creating auto-write pop-up window...");

    const promptInput = document.createElement("textarea");
    promptInput.id = "autoWritePrompt";
    promptInput.placeholder = "Input what do you want to include in your email...";
    promptInput.style.width = "100%";
    promptInput.style.height = "100px";
    const generateButton = document.createElement("button");
    generateButton.textContent = "Generate";
    generateButton.style.marginTop = "10px";
    const closeButton = document.createElement("button");
    closeButton.textContent = "Close";
    closeButton.style.marginLeft = "10px";
    closeButton.style.marginTop = "10px";
  
    const popupDiv = document.createElement("div");
    popupDiv.style.position = "fixed";
    popupDiv.style.top = "50%";
    popupDiv.style.left = "25%";
    popupDiv.style.backgroundColor = "white";
    popupDiv.style.padding = "20px";
    popupDiv.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";
    popupDiv.appendChild(promptInput);
    popupDiv.appendChild(generateButton);
    popupDiv.appendChild(closeButton);
    document.body.appendChild(popupDiv);

    generateButton.addEventListener("click", () => {
        const userInput = promptInput.value;
        console.log("User input: " + userInput);
      
        // 查找现有的错误消息元素
        const existingErrorMessage = popupDiv.querySelector("#errorMessage");
      
        // 如果用户输入有效，移除错误消息
        if (userInput.trim()) {
          if (existingErrorMessage) {
            existingErrorMessage.remove();
          }
          generateEmailContent(userInput + '. Also generate subject.');
        } else {
          // 如果用户输入无效，显示错误消息
          if (!existingErrorMessage) {
            const errorMessage = document.createElement("p");
            errorMessage.id = "errorMessage";
            errorMessage.textContent = "Please enter content for your email before generating.";
            errorMessage.style.color = "red";
            errorMessage.style.marginTop = "10px";
            popupDiv.appendChild(errorMessage);
          }
        }
    });
      

    closeButton.addEventListener("click", () => {
        promptInput.value = "";
        document.body.removeChild(popupDiv);
      });
  }

async function generateEmailContent(prompt) {
    const subjectArea = document.querySelector('input[name="subjectbox"]');
    const emailBodyArea = document.querySelector("div[aria-label='Message Body']");

    if (emailBodyArea) {
        emailBodyArea.innerText = "Email is being generated. Please wait...";
    }

    const emailContent = await callAIPromptAPI(prompt);

    const [subject, ...bodyParts] = emailContent.split('\n');
    const body = bodyParts.join('\n').replace('Subject:', '').trim();
  
    if (subjectArea) {
      subjectArea.value = subject.replace('Subject:', '').trim();
    }
    if (emailBodyArea) {
      emailBodyArea.innerText = body;
    }
}

