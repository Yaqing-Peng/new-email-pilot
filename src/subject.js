import { callAIPromptAPI } from './prompt-api.js';

console.log("Content script loaded.");

let subjectOptions = []; // Array to hold the generated subjects
let currentIndex = 0; // Current index in the subject options

export function addCreateSubjectButton(subjectInput, bodyInput) {
    console.log("Creating buttons...");

    // Create a container for the buttons
    const buttonContainer = document.createElement('div');
    buttonContainer.id = "button-container";
    buttonContainer.style.display = 'inline-flex';
    buttonContainer.style.gap = '5px'; // Space between buttons
    console.log("Button container created.");

    // Create "Create Subject" button
    const createButton = document.createElement('button');
    createButton.id = "create-subject-button";
    createButton.innerText = 'Create Subject';
    console.log("Create Subject button created.");
    createButton.style.cursor = 'pointer';

    // Create "<" button
    const prevButton = document.createElement('button');
    prevButton.id = "prev-button";
    prevButton.innerText = '<';
    console.log("Previous button created.");
    prevButton.style.cursor = 'pointer';

    // Create ">" button
    const nextButton = document.createElement('button');
    nextButton.id = "next-button";
    nextButton.innerText = '>';
    console.log("Next button created.");
    nextButton.style.cursor = 'pointer';

    // Append buttons to the container
    buttonContainer.appendChild(createButton);
    buttonContainer.appendChild(prevButton);
    buttonContainer.appendChild(nextButton);

    // Insert the button container into the DOM
    subjectInput.insertAdjacentElement('afterend', buttonContainer);
    console.log("Button container added to DOM.");

    // Event listener for "Create Subject" button
    createButton.addEventListener('click', async () => {
        console.log("Generating subject...");
        const bodyText = bodyInput.innerText;

        // Show "Generating subject lines..." in subject line
        subjectInput.value = "Generating subject lines...";

        const prompt = `Write three email subject lines in English based on the following email content. Do not attempt to interpret or modify any technical terms, abbreviations, or acronyms. Treat them as is. Email content:\n\n${bodyText}\n\nOnly return the subject lines, separated by new lines.`;
        console.log("Prompt:", prompt);

        try {
            const result = await callAIPromptAPI(prompt);
            subjectOptions = result
                .split('\n') // Split by new lines
                .map(subject => subject.trim()) // Remove extra spaces
                .filter(subject => subject !== ""); // Remove empty entries
            currentIndex = 0; // Reset index to the first subject

            if (subjectOptions.length > 0) {
                subjectInput.value = subjectOptions[currentIndex]; // Display the first subject
                console.log("Generated subjects:", subjectOptions);
            } else {
                console.error("No valid subjects generated.");
                subjectInput.value = "No subject generated.";
            }
        } catch (error) {
            console.error("Error generating subjects:", error);
            subjectInput.value = "Error occurred while generating subjects.";
        }
    });

    // Event listeners for "<" and ">" buttons
    prevButton.addEventListener('click', () => {
        console.log("Previous button clicked.");
        if (subjectOptions.length > 0) {
            currentIndex = (currentIndex - 1 + subjectOptions.length) % subjectOptions.length; // Loop back to last if at first
            console.log("Current Index:", currentIndex, "Subject:", subjectOptions[currentIndex]);
            subjectInput.value = subjectOptions[currentIndex];
        } else {
            console.error("No subject options available.");
        }
    });

    nextButton.addEventListener('click', () => {
        console.log("Next button clicked.");
        if (subjectOptions.length > 0) {
            currentIndex = (currentIndex + 1) % subjectOptions.length; // Loop to first if at last
            console.log("Current Index:", currentIndex, "Subject:", subjectOptions[currentIndex]);
            subjectInput.value = subjectOptions[currentIndex];
        } else {
            console.error("No subject options available.");
        }
    });
}
