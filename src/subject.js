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
    prevButton.innerText = 'prev';
    console.log("Previous button created.");
    prevButton.style.cursor = 'pointer';

    // Create ">" button
    const nextButton = document.createElement('button');
    nextButton.id = "next-button";
    nextButton.innerText = 'next';
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
        const prompt = `Generate three subject lines for this email content:\n\n${bodyText}\n\nOnly return the subject lines, separated by new lines.`;
        console.log("Prompt:", prompt);
    
        const result = await callAIPromptAPI(prompt); // Generate and store subjects
        const subjectOptions = result.split('\n').slice(0, 3);// Split and return only the first three subjects
        currentIndex = 0; // Reset index to the first subject

        if (subjectOptions.length > 0) {
            subjectInput.value = subjectOptions[currentIndex]; // Display the first subject
        } else {
            console.error("Failed to generate subject options.");
            subjectInput.value = "No subject generated.";
        }
    });

    // Event listeners for "<" and ">" buttons
    prevButton.addEventListener('click', () => {
        console.log("Previous button clicked.");
        if (subjectOptions.length > 0) {
            currentIndex = (currentIndex - 1 + subjectOptions.length) % subjectOptions.length; // Loop back to last if at first
            subjectInput.value = subjectOptions[currentIndex];
            console.log("Previous subject:", subjectInput.value);
        }
    });

    nextButton.addEventListener('click', () => {
        console.log("Next button clicked.");
        if (subjectOptions.length > 0) {
            currentIndex = (currentIndex + 1) % subjectOptions.length; // Loop to first if at last
            subjectInput.value = subjectOptions[currentIndex];
            console.log("Next subject:", subjectInput.value);
        }
    });
}
