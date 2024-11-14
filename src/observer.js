import { addAutoWriteButton } from './auto-write.js';
import { addSummarizeButton } from './summarize.js';
import { addPolishButton } from './polish.js';
import { addCreateSubjectButton } from './subject.js';

// Initialize MutationObserver to watch for new compose windows or email details
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        const subjectArea = document.querySelector('input[name="subjectbox"]');
        const subjectElement = document.querySelector("h2.hP");
        const bodyInput = document.querySelector('.Am.Al.editable');

        // Check for compose window to add auto-write button
        if (subjectArea && !document.querySelector("#autoWriteButton")) {
            console.log("Compose window detected. Adding auto-write button...");
            addAutoWriteButton(subjectArea);
        }

        // Check for email detail view to add summarize button
        if (subjectElement && !document.getElementById("summarize-button")) {
            console.log("Email detail detected. Adding summarize button...");
            addSummarizeButton(subjectElement);
        }

        // Check for email detail view to add polish button
        if (subjectArea && !document.querySelector("#polishButton")) {
            console.log("Compose window detected. Adding polish button...");
            addPolishButton(subjectArea);
        }

        // Check for email detail view to add create subject button
        if (subjectArea && bodyInput && !document.querySelector("#create-subject-button")) {
            console.log("Compose window detected. Adding create subject button...");
            addCreateSubjectButton(subjectArea, bodyInput);
        }
    });
});

observer.observe(document, {
    childList: true,
    subtree: true
});


