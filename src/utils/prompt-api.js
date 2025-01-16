import { showErrorPopup } from './popup.js';

// Error handling function
async function handleAIError(error, prompt) {
    console.error("Error calling AI Prompt API:", error);
    console.error("Prompt causing error:", prompt);

    if (error.message && error.message.includes("untested language")) {
        showErrorPopup("Error", "Your request includes unsupported language. Please use English only for both input and output.");
    } else {
        showErrorPopup("Error", "An unexpected error occurred. Please try again later.");
    }
}

// Use AI model to prompt for user input
export async function callAIPromptAPI(prompt) {
    try {
        const { available } = await ai.languageModel.capabilities();
        if (available !== "no") {
            const session = await ai.languageModel.create();
            const result = await session.prompt(prompt);
            return result;
        } else {
            console.error("AI model is not available.");
            showErrorPopup("Error", "AI model is not available. Please try again later.");
        }
    } catch (error) {
        await handleAIError(error, prompt);
    }
}
