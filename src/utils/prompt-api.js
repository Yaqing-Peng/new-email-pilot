import { showErrorPopup } from './popup.js';
import { GoogleGenerativeAI } from "@google/generative-ai";

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


// set Google API Key
const API_KEY = "AIzaSyDTN-al14Cq0hGL0R6fH27qUCsHjnXy21Y"; // can be replaced with your API Key
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function callAIPromptAPI(prompt) {
    try {
        const result = await model.generateContent(prompt);
        console.log(result.response.text());
        return result.response.text();
    } catch (error) {
        await handleAIError(error, prompt);
    }
}


// Use google gemini nano AI model to prompt for user input
// export async function callAIPromptAPI(prompt) {
//     try {
//         const { available } = await ai.languageModel.capabilities();
//         if (available !== "no") {
//             const session = await ai.languageModel.create();
//             const result = await session.prompt(prompt);
//             return result;
//         } else {
//             console.error("AI model is not available.");
//             showErrorPopup("Error", "AI model is not available. Please try again later.");
//         }
//     } catch (error) {
//         await handleAIError(error, prompt);
//     }
// }