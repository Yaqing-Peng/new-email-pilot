export async function callAIPromptAPI(prompt) {
    try {
        const { available } = await ai.languageModel.capabilities();
        if (available !== "no") {
            const session = await ai.languageModel.create();
            const result = await session.prompt(prompt);
            return result;
        } else {
            console.error("AI model is not available.");
            return "AI model is not available.";
        }
    } catch (error) {
        console.error("Error calling AI Prompt API:", error);
        console.error("Prompt causing error:", prompt); // 输出导致错误的 prompt
        return "Error occurred while calling AI Prompt API.";
    }
}