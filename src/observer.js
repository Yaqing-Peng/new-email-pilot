import { addAutoWriteButton } from './auto-write.js';
import { addSummarizeButton } from './summarize.js';
import { addPolishButton } from './polish.js';
import { addCreateSubjectButton } from './subject.js';
import { addAutoReplyButton } from './auto-reply.js';

// Detect the current platform (Gmail or Outlook)
const isGmail = window.location.hostname.includes("mail.google.com");
const isOutlook = window.location.hostname.includes("outlook.office365.com");

// Initialize MutationObserver to watch for new compose windows or email details
const observer = new MutationObserver((mutations) => {
    mutations.forEach(() => {
        if (isGmail) {
            handleMutations(
                {
                    subjectArea: 'input[name="subjectbox"]',
                    emailBodyArea: '.Am.Al.editable',
                    subjectElement: 'h2.hP',
                    replyArea: 'form.bAs',
                    newMsgEl: 'div.aYF',
                },
                "Gmail"
            );
        } else if (isOutlook) {
            handleMutations(
                {
                    subjectArea: 'div.ZMK7F',
                    emailBodyArea: 'div[aria-label="Message body, press Alt+F10 to exit"]',
                    subjectElement: 'span.JdFsz',
                    replyArea: 'div.UVFSO.GCol2',
                },
                "Outlook"
            );
        }
    });
});

// Generalized mutation handling
function handleMutations(selectors, platform) {
    const { subjectArea, emailBodyArea, subjectElement, replyArea, newMsgEl } = selectors;
    const subjectAreaEl = document.querySelector(subjectArea);
    const emailBodyAreaEl = document.querySelector(emailBodyArea);
    const subjectElementEl = document.querySelector(subjectElement);
    const replyAreaEl = document.querySelector(replyArea);
    const newMsgElDetected = newMsgEl ? document.querySelector(newMsgEl) : true;

    const actions = [
        {
            condition: newMsgElDetected && subjectAreaEl && emailBodyAreaEl && !document.querySelector("#auto-write-button"),
            action: () => addAutoWriteButton(subjectAreaEl, emailBodyAreaEl),
            message: `${platform}: Compose window detected. Adding auto-write button...`,
        },
        {
            condition: subjectElementEl && !document.getElementById("summarize-button"),
            action: () => addSummarizeButton(subjectElementEl),
            message: `${platform}: Email detail detected. Adding summarize button...`,
        },
        {
            condition: newMsgElDetected && subjectAreaEl && emailBodyAreaEl && !document.querySelector("#polish-button"),
            action: () => addPolishButton(subjectAreaEl, emailBodyAreaEl),
            message: `${platform}: Compose window detected. Adding polish button...`,
        },
        {
            condition: newMsgElDetected && subjectAreaEl && emailBodyAreaEl && !document.querySelector("#create-subject-button"),
            action: () => addCreateSubjectButton(subjectAreaEl, emailBodyAreaEl),
            message: `${platform}: Compose window detected. Adding create subject button...`,
        },
        {
            condition: !newMsgElDetected && replyAreaEl && emailBodyAreaEl && !document.querySelector("#auto-reply-button"),
            action: () => addAutoReplyButton(replyAreaEl, emailBodyAreaEl),
            message: `${platform}: Reply window detected. Adding auto-reply button...`,
        },
    ];

    actions.forEach(({ condition, action, message }) => {
        if (condition) {
            console.log(message);
            action();
        }
    });
}

// Start observing
observer.observe(document, {
    childList: true,
    subtree: true,
});
