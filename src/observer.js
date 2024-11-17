import { addAutoWriteButton } from './auto-write.js';
import { addSummarizeButton } from './summarize.js';
import { addPolishButton } from './polish.js';
import { addCreateSubjectButton } from './subject.js';
import { addAutoReplyButton } from './auto-reply.js';

// Initialize MutationObserver to watch for new compose windows or email details
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        const subjectArea = document.querySelector('input[name="subjectbox"]');
        const subjectElement = document.querySelector("h2.hP");
        const bodyInput = document.querySelector('.Am.Al.editable');
        const replyArea = document.querySelector('form[class="bAs"]');
        //This element is to differentiate new message window and reply window
        const newMsgEl = document.querySelector('div[class="aYF"]');

        // Check for compose window to add auto-write button
        if (newMsgEl && subjectArea && !document.querySelector("#autoWriteButton")) {
            console.log("Compose window detected. Adding auto-write button...");
            addAutoWriteButton(subjectArea);
        }

        // Check for email detail view to add summarize button
        if (subjectElement && !document.getElementById("summarize-button")) {
            console.log("Email detail detected. Adding summarize button...");
            addSummarizeButton(subjectElement);
        }

        // Check for compose window to add polish button
        if (newMsgEl && subjectArea && !document.querySelector("#polishButton")) {
            console.log("Compose window detected. Adding polish button...");
            addPolishButton(subjectArea);
        }

        // Check for compose window to add create subject button
        if (newMsgEl && subjectArea && bodyInput && !document.querySelector("#create-subject-button")) {
            console.log("Compose window detected. Adding create subject button...");
            addCreateSubjectButton(subjectArea, bodyInput);
        }

        // Check for reply window to add auto reply button
        if (!newMsgEl && replyArea && bodyInput && !document.querySelector("#autoReplyButton")) {
            console.log("Compose window detected. Adding auto reply button...");
            addAutoReplyButton(replyArea, bodyInput);
        }

    });
});

observer.observe(document, {
    childList: true,
    subtree: true
});


