export function showModal({ message, buttons }) {
  const modal = document.createElement("div");
  modal.style.position = "fixed";
  modal.style.top = "50%";
  modal.style.left = "50%";
  modal.style.transform = "translate(-50%, -50%)";
  modal.style.padding = "20px";
  modal.style.backgroundColor = "white";
  modal.style.border = "1px solid #ccc";
  modal.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
  modal.style.zIndex = "1000";
  modal.style.textAlign = "center";

  // Add content to the modal
  modal.innerHTML = `
      <p>${message}</p>
      <div id="modalButtonContainer" style="margin-top: 10px;"></div>
    `;

  const buttonContainer = modal.querySelector("#modalButtonContainer");
  buttons.forEach(({ text, color, backgroundColor, onClick, style = {} }) => {
    const button = document.createElement("button");
    button.textContent = text;
    button.style.margin = "0 5px";
    button.style.padding = "5px 10px";
    button.style.color = color || "black";
    button.style.backgroundColor = backgroundColor || ""; // Default color
    Object.assign(button.style, style); // Apply optional styles
    button.addEventListener("click", () => {
      onClick(modal); // Execute button action
    });
    buttonContainer.appendChild(button);
  });

  // Add modal to the document
  document.body.appendChild(modal);

  return modal;
}
